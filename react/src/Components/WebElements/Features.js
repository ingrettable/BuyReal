import React, { useState, useEffect, useCallback } from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import TextContainer from "../TextContainer";

function Implementation({}) {
  const title="Feed"
  const body=["- Interactive website that allows users to log on using their credit or debit card information",
  "- Website is easy to interact with, with just a click of a button to login",
  "- Website features its own BuyReal logo and privacy notice",
  "- Website displays a random transaction of the day from users, through different certificates",
  "- Users can view these random certificates by scrolling down the website",
  "- For every time a transaction is posted, there is a 1 in 20 chance it will be posted through our Twitter bot, @buyrealofficial"
  ]

  return (
    <TextContainer title={title} body={body}/>
  )
}
export default Implementation;