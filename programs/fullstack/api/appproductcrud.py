from flask import Flask, request, jsonify
import pymysql
from ProductNew import Product
import config
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Database connection
def get_db_connection():
    conn = pymysql.connect(
        host=config.MYSQL_HOST,
        user=config.MYSQL_USER,
        password=config.MYSQL_PASSWORD,
        database=config.MYSQL_DB,
        cursorclass=pymysql.cursors.DictCursor
    )
    return conn

@app.route('/product', methods=['POST'])
def create_product():
    data = request.get_json()
   #price = int(data['price'])
    print("create product ",data)
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("INSERT INTO products (name, brand, price) VALUES (%s, %s, %s)",
                   (data['name'], data['brand'], data['price']))
    conn.commit()
    cursor.close()
    conn.close()
    return jsonify({'message': 'Product created successfully'}), 201

@app.route('/product', methods=['GET'])
def list_products():
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM products")
    products = cursor.fetchall()
    cursor.close()
    conn.close()
    return jsonify(products)

@app.route('/product/<int:id>', methods=['GET'])
def get_product(id):
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM products WHERE id = %s", (id,))
    product = cursor.fetchone()
    cursor.close()
    conn.close()
    if product:
        return jsonify(product)
    else:
        return jsonify({'message': 'Product not found'}), 404

@app.route('/product/<int:id>', methods=['PUT'])
def update_product(id):
    data = request.get_json()
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("UPDATE products SET name = %s, brand = %s, price = %s WHERE id = %s",
                   (data['name'], data['brand'], data['price'], id))
    conn.commit()
    cursor.close()
    conn.close()
    return jsonify({'message': 'Product updated successfully'})

@app.route('/product/<int:id>', methods=['DELETE'])
def delete_product(id):
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("DELETE FROM products WHERE id = %s", (id,))
    conn.commit()
    cursor.close()
    conn.close()
    return jsonify({'message': 'Product deleted successfully'})

if __name__ == '__main__':
    app.run(debug=True, port=5000)