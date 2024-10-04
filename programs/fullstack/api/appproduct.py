from flask import Flask, request, jsonify

app = Flask(__name__)

from Product import Product
from ProductManagement import ProductManagement

pm = ProductManagement()
#prod1 = Product("1", "Laptop", "Dell", "45000")

@app.route('/')
def hello_world():
    return 'Hello, World!'

@app.route('/product', methods=['POST'])
def create_product():
    data = request.get_json()
    print("incoming data ",data)
    new_product = Product(data['code'], data['name'], data['supplier'], data['price'])
    pm.add_Product(new_product)
    return jsonify({'message': 'Product created successfully'}), 201

@app.route('/products', methods=['GET'])
def get_products():
    products = pm.get_products()
    return jsonify([product.__dict__ for product in products])  

@app.route('/product/<code>', methods=['GET'])
def get_product(code):
    product = pm.get_product(code)
    if product:
        return jsonify(product.__dict__)
    else:
        return jsonify({'message': 'Product not found'}), 404

@app.route('/product/<code>', methods=['PUT'])
def update_product(code):
    data = request.get_json()
    updated_product = Product(code, data['name'], data['supplier'], data['price'])
    if pm.update_product(updated_product):
        return jsonify({'message': 'Product updated successfully'})
    else:
        return jsonify({'message': 'Product not found'}), 404

@app.route('/product/<code>', methods=['DELETE'])
def delete_product(id):
    if pm.delete_product(code):
        return jsonify({'message': 'Product deleted successfully'})
    else:
        return jsonify({'message': 'Product not found'}), 404

if __name__ == '__main__':
    app.run(debug=True, port=3000)