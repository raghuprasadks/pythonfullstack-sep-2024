from flask import Flask

app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello, World!'

@app.route('/welcome')
def welcome():
    return 'Welcome to Python Flask!'

@app.route('/welcome/<name>')
def welcome_name(name):
    return f'Welcome to Python Flask, {name}!'

@app.route('/welcome/<name>/<age>')
def welcome_name_age(name, age):
    return f'Welcome to Python Flask, {name}! Your age is {age}.'
    
if __name__ == '__main__':
    app.run()
