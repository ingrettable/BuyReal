import json
from pymongo import MongoClient

# IP and Port to the database
ip = "127.0.0.1"
port = 27017 # Must be an int

# Connects to the database
client = MongoClient(ip, port)
db = client.buy_real
users = None

# Schema to apply
user_validator = json.load(open('./user_validation.json'))

try:
    users = db.create_collection("users", validator=user_validator)
except:
    db.command("collMod", "users", validator=user_validator)
    users = db.users
    
print('Applied the schema to the buy_real/users collection!')