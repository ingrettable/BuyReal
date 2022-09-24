import pymongo
from pymongo import MongoClient
from bson.objectid import ObjectId

user_validator = {
    "$jsonSchema" : {
        "bsonType" : "object",
        "title" : "user",
        "required" : [
            "_id",
            "fname",
            "lname",
            "username",
            "linked_accounts",
            "transactions"
        ], 
        "properties" : {
            "_id" : {"bsonType" : "objectId"},
            "fname" : {"bsonType" : "string"},
            "lname" : {"bsonType" : "string"},
            "username" : {"bsonType" : "string"},
            "linked_accounts" : {
                "bsonType" : "object",
                "title" : "linked_account",
                "required" : ["plaid_auth"],
                "properties" : {
                    "plaid_auth" : {"bsonType" : "string"},
                    "twitter_auth" : {"bsonType" : "string"},
                    "discord_tag" : {"bsonType" : "string"}
                },
                "minProperties" : 2,
                "additionalProperties": False
            },
            "transactions" : {
                "bsonType" : "array",
                "items" : {
                    "bsonType" : "object",
                    "title" : "transaction",
                    "required" : [
                        "date",
                        "merchant_name",
                        "amount"
                    ],
                    "properties" : {
                        "date" : {"bsonType" : "string"},
                        "merchant_name" : {"bsonType" : "string"},
                        "amount" : {"bsonType" : "number"},
                        "city" : {"bsonType" : "string"}
                    }
                }
            }
        }
    }
}

test_user = {
    "fname" : "John",
    "lname" : "Doe",
    "username" : "JohnDoe123",
    "linked_accounts" : {
        "plaid_auth" : "1234",
        "discord_tag" : "JohnDoe123#1829"
    },
    "transactions" : []
}

ip = "127.0.0.1"
port = 27017 # Must be int

client = MongoClient(ip, port)
db = client.buy_real
users = None

try:
    users = db.create_collection("users", validator=user_validator)
except:
    db.command("collMod", "users", validator=user_validator)
    users = db.users

print(db.list_collection_names())

users.insert_one(test_user)

for user in users.find({}):
    print(user)