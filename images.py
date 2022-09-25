from PIL import Image
from PIL import ImageDraw
from PIL import ImageFont

def xAxis(string, font=100):
    returnx = len(string) + 1000
    return returnx #16 pixels 12 pts
def ptToPix(size):
   size = size / 12
   size = size * 16
   return size
def addText(img, text: str, x: int, y: int):
    I1 = ImageDraw.Draw(img)
    I1.text((x,y), text, fill=(255, 0, 0))
    return img
def changeSize(img, x: int, y: int):
    newsize = (x, y)
    resized = img.resize(newsize)
    return resized
def completeCertificate(img, name, spent, merchant, location, fontsize=100):
    draw = ImageDraw.Draw(img)
    font = ImageFont.truetype("public/Lora-Regular.ttf", fontsize)
    draw.text((700,600), name, fill=(39,119,67), font = font)
    draw.text((700,900), spent, fill=(39,119,67), font = font)
    draw.text((200,1100), merchant, fill=(39,119,67), font = font)
    draw.text((1150, 1100), location, fill=(39,119,67), font = font)
    img.show()

img = Image.open("public/bigSpenderCertified.jpg")
#completeCertificate(img, "Ben Jman", "$1000000", "ESD", "Stony Brook")

