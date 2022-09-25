import React, { useState, useEffect, useCallback } from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import TextContainer from "../TextContainer";

function Next({}) {
  const title="Next Steps"
  const body=["Moving BuyReal to Twitter! The random purchases will be tweeted directly through each user’s account, allowing everyone on Twitter to not only view these purchases, but to also reply, retweet and like", 
  "Incorporating three never-before-seen BuyReal modes: ",
  " - BeReal Mode: BuyReal will tweet a user's random transaction once a day",
  " - Honest Mode: BuyReal will tweet all of the transactions of the user ",
  " - Charity Mode: BuyReal will only tweet charity donations"]

  return (
    <>
    <TextContainer id={'NextSteps'} title={title} body={body}  />
    </>
  )
}
export default Next;