import tweepy, os
from dotenv import load_dotenv
import numpy as np
from PIL import Image
from PIL import ImageDraw
from PIL import ImageFont


load_dotenv()


auth = tweepy.OAuthHandler("5SDGMGAxPL4DAwvjZIjIeIzSW", "v1aYj3OLgsXRsdv8Gcl81edTFuJyT8YEpzlyFHsnqLGJdaqb3w")
auth.set_access_token("1573689140289454085-iAsncJeQHn2me4bEp8TW3UOq9sRoEZ", "6kzS0lCWdG8p5IcXrV41LAAhDdE85LAAMzTegYwxn8vNH")
api = tweepy.API(auth)
#tweet='Hello world!'
#api.update_status(tweet)


#Generate text tweet with media (image)
img = Image.open(("test2.png"))

api.update_with_media(img, "#BigSpender")



