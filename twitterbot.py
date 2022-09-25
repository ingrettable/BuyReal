import tweepy, os
from dotenv import load_dotenv
import numpy as np
from PIL import Image
from PIL import ImageDraw
from PIL import ImageFont


load_dotenv()
auth = tweepy.OAuthHandler(os.getenv("TWITTER_API_KEY"), os.getenv("TWITTER_API_SECRET"))
auth.set_access_token(os.getenv("TWITTER_ACCESS_TOKEN"), os.getenv("TWITTER_ACCESS_TOKEN_SECRET"))
api = tweepy.API(auth)
tweet='#bigSpender #money'
media = api.media_upload("test2.png")

#Generate text tweet with media (image)
api.update_status(status=tweet, media_ids=[media.media_id])



