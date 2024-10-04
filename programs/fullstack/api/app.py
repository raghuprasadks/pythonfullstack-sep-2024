from flask import Flask,request
app = Flask(__name__)

#http://127.0.0.1:5000/
@app.route('/')
def hello_world():
    return 'Hello, World!'

#http://127.0.0.1:5000/welcome
@app.route('/welcome')
def welcome():
    return 'Welcome to Python Flask!'

#http://127.0.0.1:5000/welcome/ravi
@app.route('/welcome/<name>')
def welcome_name(name):
    return f'Welcome to Python Flask, {name}!'

#http://127.0.0.1:5000/welcome/ravi/30
@app.route('/welcome/<name>/<age>')
def welcome_name_age(name, age):
    return f'Welcome to Python Flask, {name}! Your age is {age}.'

#http://127.0.0.1:5000/queryparam?name=ravi&age=30
@app.route('/queryparam')
def queryparam():
    name = request.args.get('name')
    age = request.args.get('age')
    return f'Welcome to Python Flask, {name}! Your age is {age}.'

if __name__ == '__main__':
    app.run()
