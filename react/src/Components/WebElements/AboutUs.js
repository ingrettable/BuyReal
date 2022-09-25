import React, { useState, useEffect, useCallback } from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import TextContainer from "../TextContainer";
import Grid from '@mui/material/Unstable_Grid2';
import PersonCard from "./PersonCard";
import TransactionCard from "./TransactionCard";


function AboutUs({ }) {
  const title = "About Us"
  const body = ["BuyReal is an exciting and original personal and social financial manager, which displays a random purchase of the day for each user. This information is displayed on http://buyreal.tech, with everyone’s name, purchase price, merchandise and location printed on your very own certificate. You can also view the purchases of other users, allowing you to evaluate and reflect on the transactions of people around you or even influencers. These purchases are selected with delayed timing for your privacy. Accessing the website is simple, as you can log-on using your beloved credit or debit card information. Now, you’ll be able to see just how much your friends are spending on V-Bucks, or how much celebrities are spending on charities, luxuries, and private jets!"]

  return (
    <Grid id={'AboutUs'} container spacing={2} >
      <Grid  xs={6}>
        <TextContainer title={title} body={body} />
      </Grid>
      <Grid xs={6}>
        <Grid container spacing={1}>
          <Grid xs={6}>
            <PersonCard 
              name={"Daniel Kogan"} 
              img={"https://media-exp1.licdn.com/dms/image/C4D03AQEMVb0H3Y1EvQ/profile-displayphoto-shrink_800_800/0/1632351957101?e=1669852800&v=beta&t=DBvqIDJDPSp6ve8zFVnXVmwEP7pQAfJYg6hn8s4jnfY"} 
              bio="Something"
              gh="daminals"
              lin="danielkogan123"
            />
            <PersonCard 
              name={"Dylan Scott"} 
              img={"https://media-exp1.licdn.com/dms/image/C4D03AQFYLdsaGjzPAw/profile-displayphoto-shrink_800_800/0/1650065111950?e=1669852800&v=beta&t=V_AHZxG99DDAi1axTRiUGxN-gjgnaHq_JToz5hMhljM"} 
              bio="Something"
              gh="dyscott"
              lin="dylanscott821"
            />
          </Grid>
          <Grid xs={6}>
            <PersonCard 
              name={"Alex Snit"} 
              img={"https://media-exp1.licdn.com/dms/image/C4E03AQE6Xp4EXOuCWA/profile-displayphoto-shrink_800_800/0/1664067825556?e=1669852800&v=beta&t=xnLWQ6jWrq9I34GKgPhUKvcOW5vDrsd-uBxNYVjti_w"} 
              bio="Hey! I'm Alex, a sophomore in the Computer Science Honors Program at Stony Brook!"
              gh="snitski"
              lin="alexander-snit"
            />
            <PersonCard 
              name={"Gretta Halollari"} 
              img={"https://cdn.discordapp.com/attachments/838386669736165417/1023428730116386826/ED6D7EA9-FD5D-4EDA-A7C2-BAF4A6B25530_Original.jpg"} 
              bio="Something"
              gh="ingrettable"
              lin="grettahalollari"
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}
export default AboutUs;