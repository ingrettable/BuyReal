import React, { useState, useEffect, useCallback } from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import TextContainer from "../TextContainer";

function Next({}) {
  const title="Next Steps"
  const body=["User Accounts. Currently, only a single credit card can be linked across the entire service so it is only functional as a proof of concept. By adding user accounts and linking Plaid to our MongoDB database, people could create BuyReal accounts and add as many cards as they want!", 
  "Moving BuyReal to Twitter! The random purchases will be tweeted directly through each user’s account, allowing everyone on Twitter to not only view these purchases but to also reply, retweet, and like. ",
  "Incorporating three BuyReal modes: ",
  "- BeReal Mode: BuyReal will tweet a user's random transaction once a day",
  "- Honest Mode: BuyReal will tweet all of the transactions of the user ",
  "- Charity Mode: BuyReal will only tweet charity donations",
  "Adding Real Data. Once implementing more of the other features, we could move from the Plaid Sandbox instance to the Plaid Developer or Plaid Production instance so we can pull real transaction history from users."]

  return (
    <>
    <TextContainer id={'NextSteps'} title={title} body={body}  />
    </>
  )
}
export default Next;