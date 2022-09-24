import tweepy, os
from dotenv import load_dotenv
from time import sleep
from credentials import * 
from config import QUERY, FOLLOW, LIKE, SLEEP_TIME

load_dotenv()

try:
    auth = tweepy.OAuthHandler(os.environ.get("APIKey", 3), os.environ.get("APIKeySecret", 3))
    auth.set_access_token(os.environ.get("AccessToken", 3), os.environ.get("AccessToken", 3))
    print("Authentication OK")
except:
    print("Error during authentication")

api = tweepy.API(auth)
api.update_status("Test tweet")