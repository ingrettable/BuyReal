import React, { useState, useEffect, useCallback } from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Grid from '@mui/material/Unstable_Grid2';
import TextContainer from "../TextContainer";

function Problem({ }) {
  const title = "Problem"
  const body = ["Many people make irresponsible and inconsiderate financial decisions because of the freedom that comes with a credit card. We wanted to create a project that would allow people to manage their purchases, as these purchases would become public to other BuyReal users — creating a community of people trying to get their spending on track. The website can also just be fun to use. It is funny and exciting to see a random purchase you made that day online!", 
  "BuyReal can also help influencers advance their careers, since companies can reach out to them asking to make purchases, as a form of advertisement. Either way, influencer or not, BuyReal serves as free advertisement for various brands that will inevitably grow popular just from people seeing purchases from certain influencers, stores, and brands on BuyReal.tech.",
  "Finally, BuyReal could be used to hold celebrities accountable for their financial actions. It is time for us to see just how much Taylor is paying for her daily commute, or if other rich celebrities actually give to charity. Seeing others donate to charity may even influence society as a whole to donate more!"
  ]
  return (
    <Grid id={'Problem'} container spacing={2} >
    <Grid xs={6}>
      <TextContainer title={title} body={body} />
    </Grid>
    <Grid xs={6}>
      <Grid container spacing={1}>
        <Grid xs={6}>
          <img src="https://media.discordapp.net/attachments/838386669736165417/1023419845238325258/istockphoto-854565156-170667a-removebg-preview.png" />
        </Grid>
      </Grid>
    </Grid>
  </Grid>
  )
}
export default Problem;