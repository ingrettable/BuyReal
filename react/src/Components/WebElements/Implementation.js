import React, { useState, useEffect, useCallback } from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import TextContainer from "../TextContainer";

function Implementation({}) {
  const title="Implementation"
  const body=["In order to collect credit card transaction information in our backend, we used Flask/Python with integrated plaid API. This information was organized using Mongo. The website, BuyReal.tech was created using React and Material UI, with the interactive feature of linking your account. The project is hosted on Google Cloud."]

  return (
    <TextContainer id={'Implementation'} title={title} body={body}/>
  )
}
export default Implementation;