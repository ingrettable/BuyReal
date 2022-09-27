# BuyReal

## Inspiration

Many people make irresponsible and inconsiderate financial decisions because of the freedom that comes with a credit card. We wanted to create a project that would allow people to manage their purchases, as these purchases would become public to other BuyReal users — creating a community of people trying to get their spending on track. The website can also just be fun to use. It is funny and exciting to see a random purchase you made that day online! 

BuyReal can also help influencers advance their careers, since companies can reach out to them asking to make purchases, as a form of advertisement. Either way, influencer or not, BuyReal serves as free advertisement for various brands that will inevitably grow popular just from people seeing purchases from certain influencers, stores, and brands on BuyReal.tech.

Finally, BuyReal could be used to hold celebrities accountable for their financial actions. It is time for us to see just how much Taylor is paying for her daily commute, or if other rich celebrities actually give to charity. Seeing others donate to charity may even influence society as a whole to donate more!


## What it does

BuyReal is an exciting and original personal and social finance manager, which displays a random purchase of the day for each user. This information will be displayed on BuyReal.tech, with everyone’s name, purchase price, merchandise, and location printed on their very own certificate. You can also view the purchases of other users, allowing you to evaluate and reflect on the transactions of people around them or even influencers. These purchases are selected with delayed timing for your privacy. Accessing the website is simple, as you can log on using your beloved credit or debit card information. Now, you’ll be able to see just how much your friends are spending on V-Bucks, or how much celebrities spend on charities, luxuries, and private jets! 

## How we built it

In order to collect credit card transaction information in our backend, we used Flask / Python integrated with the Plaid API. We created a database with MongoDB to store this information. The website, BuyReal.tech, was created using React and Material UI, with the interactive feature of linking your credit card account through Plaid Link. The Flask backend is also connected to a Twitter bot, which randomly highlights transactions posted to BuyReal.

## Challenges we ran into

The first of many challenges we ran into was Twitter. We originally planned for BuyReal to work exclusively through Twitter, with a lightweight frontend for account linking. All transactions would go directly to a user's Twitter account allowing them to share with all their existing followers. However, Twitter didn't approve us for API access until 24 hours into the Hackathon, so we had to create our own feed with React. We tried our best, but it does not come close to the user experience of Twitter.

Then, Google Cloud. We wanted to publish our project to a Compute Engine instance in Google Cloud — saying this was a disaster doesn't come close to describing how bad it was. We could not get Port 80 to open no matter what we tried, preventing us from accessing our website. Then, while we were troubleshooting, we ran "apt-get upgrade" on our VM which got stuck on 97% for over 30 minutes before we force shut it down. Upon powering it back up, it was completely dead. And, while we could have tried another Cloud host, it wouldn't have mattered because Stony Brook University blocked our free domain from Domain.com, buyreal.tech, for containing malware! That is why, for the time being, the project is locally hosted.

## Accomplishments that we're proud of

Despite all the challenges we ran into, we were able to get the primary components of our app working: logging in and pulling financial transactions with Plaid, parsing and displaying them in a React application, and getting some level of Twitter functionality working by the end.

Some other accomplishments we are proud of include the logo, the user experience of the website, and the "certificates of purchase" which are used to display transaction information on both the BuyReal website and the Twitter account.

## What we learned

During our planning phase, we expected external services like Google Cloud, Twitter, Plaid, and even the campus network to just work. When they didn’t, we had to pivot our project significantly. However, we learned a lot from all these challenges and changes we had to make throughout the duration of our project.

We also learned about the importance of thinking on your feet, thinking outside of the box, and thinking within our limits. We learned that thinking is very important.

## What's next for BuyReal

User Accounts. Currently, only a single credit card can be linked across the entire service so it is only functional as a proof of concept. By adding user accounts and linking Plaid to our MongoDB database, people could create BuyReal accounts and add as many cards as they want!

Moving BuyReal to Twitter! The random purchases will be tweeted directly through each user’s account, allowing everyone on Twitter to not only view these purchases but to also reply, retweet, and like. 

Incorporating three BuyReal modes: 
- BeReal Mode: BuyReal will tweet a user's random transaction once a day
- Honest Mode: BuyReal will tweet all of the transactions of the user 
- Charity Mode: BuyReal will only tweet charity donations

Real Data. Once implementing more of the other features, we could move from the Plaid Sandbox instance to the Plaid Developer or Plaid Production instance so we can pull real transaction history from users.
