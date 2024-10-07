from flask import Flask
from user import user_bp
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
app.register_blueprint(user_bp)

@app.route('/')
def home():
    return "Welcome to my application api"

if __name__ == '__main__':
    app.run(debug=True, port=5000)