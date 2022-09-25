import React, { useState, useEffect, useCallback } from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import TextContainer from "../TextContainer";

function Implementation({}) {
  const title="Problem"
  const body=["Many people make irresponsible and inconsiderate financial decisions because of the freedom that comes with a credit card. We wanted to create a project that would allow people to manage their purchases, as these purchases would become public to other BuyReal users– creating a community of people trying to get their spending on track. The website can also just be fun to use. It's funny and exciting to see a random purchase you made that day online!", "BuyReal can help influencers advance their careers as well, since companies can reach out to them asking to make purchases, as a form of advertisement. Either way, influencer or not, BuyTech serves as free advertisement for various brands that will inevitably grow popular just from people seeing purchases from certain influencers, stores and brands on BuyReal.tech.", "Finally, BuyReal could be used to hold celebrities accountable for their financial actions. It is time for us to see just how much Taylor is paying for her daily commute, or if other rich celebrities actually give to charity. Seeing others donate to charity may even influence society as a whole to donate more!"];

  return (
    <TextContainer title={title} body={body}/>
  )
}
export default Implementation;