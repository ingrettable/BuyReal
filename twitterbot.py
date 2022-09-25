import tweepy, os
from dotenv import load_dotenv
import numpy as np
from PIL import Image
from PIL import ImageDraw
from PIL import ImageFont

load_dotenv()

def sendMedia(img, api, tweet):
    #tweet='#bigSpender #money'
    media = api.media_upload(img)   
    return api.update_status(status=tweet, media_ids=[media.media_id])
    
def sendTweet(api, tweet):
    return api.update_status(status=tweet)


#client = tweepy.Client("TWITTER_BEARER_TOKEN")
# oauth1_user_handler = tweepy.OAuth1UserHandler("TWITTER_API_KEY", "TWITTER_API_SECRET",callback="buyReal.tech")
# print(oauth1_user_handler.get_authorization_url())
# print(oauth1_user_handler.get_authorization_url(signin_with_twitter=True))

# oauth1_user_handler = tweepy.OAuth1UserHandler("TWITTER_API_KEY", "TWITTER_API_SECRET",callback="we need a callback :(")
# print(oauth1_user_handler.get_authorization_url())

# print(oauth1_user_handler.get_authorization_url(signin_with_twitter=True))

# access_token, access_token_secret = oauth1_user_handler.get_access_token("Verifier (oauth_verifier) here")

# request_token = oauth1_user_handler.request_token["oauth_token"]
# request_secret = oauth1_user_handler.request_token["oauth_token_secret"]

# new_oauth1_user_handler = tweepy.OAuth1UserHandler("TWITTER_API_KEY", "TWITTER_API_SECRET", callback="Callback / Redirect URI / URL here")

# new_oauth1_user_handler.request_token = {
#     "oauth_token": "Request Token (oauth_token) here",
#     "oauth_token_secret": request_secret
# }

# access_token, access_token_secret = (new_oauth1_user_handler.get_access_token("Verifier (oauth_verifier) here"))

