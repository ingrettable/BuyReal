from flask import Flask

app = Flask(__name__)

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"

@app.route("/twitter")
def hello_world():
    return "buyreal.tech ahahaha put twitter next steps here"
