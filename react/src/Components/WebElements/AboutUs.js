import React, { useState, useEffect, useCallback } from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import TextContainer from "../TextContainer";
import Grid from '@mui/material/Unstable_Grid2';
import PersonCard from "./PersonCard";


function AboutUs({ }) {
  const title = "About Us"
  const body = ["BuyReal is an exciting and original personal and social finance manager, which displays a random purchase of the day for each user. This information is displayed on BuyReal.tech, with everyone’s name, purchase price, merchandise and location printed on your very own certificate. You can also view the purchases of other users, allowing you to evaluate and reflect on the transactions of people around them or even influencers. These purchases are selected with delayed timing for your privacy. Accessing the website is simple, as you can log-on using your beloved credit or debit card information. Now, you’ll be able to see just how much your friends are spending on V-Bucks, or how much celebrities are spending on charities, luxuries and private jets!"]

  return (
    <Grid container spacing={2} >
      <Grid  xs={6}>
        <TextContainer title={title} body={body} />
      </Grid>
      <Grid xs={6}>
        <Grid container spacing={1}>
          <Grid xs={6}>
            <PersonCard 
              name={"Daniel Kogan"} 
              img={"https://media-exp1.licdn.com/dms/image/C4D03AQEMVb0H3Y1EvQ/profile-displayphoto-shrink_800_800/0/1632351957101?e=1669852800&v=beta&t=DBvqIDJDPSp6ve8zFVnXVmwEP7pQAfJYg6hn8s4jnfY"} 
              bio="            Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica"
              gh="daminals"
              in="danielkogan123"
              />
          </Grid>

        </Grid>
      </Grid>
    </Grid>
  )
}
export default AboutUs;