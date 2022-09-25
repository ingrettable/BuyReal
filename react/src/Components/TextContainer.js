import React, { useState, useEffect, useCallback } from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";

function TextContainer({title, body}) {

  return (
    <Box padding={2} >
      <Typography variant="h2"> {title} </Typography>
      {body.map(paragraph => <Typography variant="h6" gutterBottom >{paragraph}</Typography>)}
      
    </Box>
  )
}
export default TextContainer;