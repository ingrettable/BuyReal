import React, { useState, useEffect, useCallback } from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import TextContainer from "../TextContainer";

function Next({}) {
  const title="Next"
  const body=[""]

  return (
    <TextContainer title={title} body={body}/>
  )
}
export default Next;