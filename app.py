from flask import Flask
from pymongo import MongoClient

app = Flask(__name__)

@app.route("/")
def main_route():
    return "<p>Hello, World!</p>"

@app.route("/twitter")
def twitter_route():
    return "buyreal.tech ahahaha put twitter next steps here"
