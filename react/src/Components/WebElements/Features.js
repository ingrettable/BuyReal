import React, { useState, useEffect, useCallback } from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import TextContainer from "../TextContainer";

function Implementation({}) {
  const title="Feed"
  const body=["-Interactive website that allows users to log-on using their credit or debit card information",
                "-Website is easy to interact, with just a click of a button to login",
                "-Website features its own BuyReal logo and privacy notice",
                "-Website displays a random transaction of the day from each user, through different certificates",
                "-Users can view these random certificates by scrolling down the website "]

  return (
    <TextContainer title={title} body={body}/>
  )
}
export default Implementation;