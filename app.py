from flask import Flask
from pymongo import MongoClient

app = Flask(__name__)

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"

@app.route("/twitter")
def hello_world():
    return "buyreal.tech ahahaha put twitter next steps here"
