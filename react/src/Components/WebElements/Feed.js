import React, { useState, useEffect, useCallback } from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import TextContainer from "../TextContainer";

function Implementation({}) {
  const title="Feed"
  const body=["Here is where you can watch our user's transactions live!"]

  return (
    <TextContainer title={title} body={body}/>
  )
}
export default Implementation;