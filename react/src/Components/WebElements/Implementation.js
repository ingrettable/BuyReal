import React, { useState, useEffect, useCallback } from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import TextContainer from "../TextContainer";

function Implementation({}) {
  const title="Implementation"
  const body=["In order to collect credit card transaction information in our backend, we used Flask / Python integrated with the Plaid API. We created a database with MongoDB to store this information. The website, BuyReal.tech, was created using React and Material UI, with the interactive feature of linking your credit card account through Plaid Link. The Flask backend is also connected to a Twitter bot, which randomly highlights transactions posted to BuyReal."]

  return (
    <TextContainer id={'Implementation'} title={title} body={body}/>
  )
}
export default Implementation;