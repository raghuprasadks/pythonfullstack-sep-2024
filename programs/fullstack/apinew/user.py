from flask import Blueprint, request, jsonify
import pymysql
from connection import db_config
from bcrypt import hashpw, gensalt, checkpw

user_bp = Blueprint('user', __name__)

@user_bp.route('/user', methods=['POST'])
def add_user():
    data = request.get_json()
    id = data.get('id')
    name = data.get('name')
    email = data.get('email')
    mobile = data.get('mobile')
    password = data.get('password')

    # Encrypt the password
    hashed_password = hashpw(password.encode('utf-8'), gensalt())

    conn = pymysql.connect(**db_config)
    cursor = conn.cursor()

    query = "INSERT INTO users (id, name, email, mobile, password) VALUES (%s, %s, %s, %s, %s)"
    values = (id, name, email, mobile, hashed_password)

    cursor.execute(query, values)
    conn.commit()

    cursor.close()
    conn.close()

    return jsonify({"message": "User added successfully!"}), 201

@user_bp.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    conn = pymysql.connect(**db_config)
    cursor = conn.cursor()

    query = "SELECT password FROM users WHERE email = %s"
    cursor.execute(query, (email,))
    result = cursor.fetchone()

    cursor.close()
    conn.close()

    if result and checkpw(password.encode('utf-8'), result[0].encode('utf-8')):
        return jsonify({"message": "Login successful!"}), 200
    else:
        return jsonify({"message": "Invalid email or password!"}), 401