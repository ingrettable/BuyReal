import React, { useState, useEffect, useCallback } from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Grid from '@mui/material/Unstable_Grid2';
import TextContainer from "../TextContainer";
import TransactionCard from "./TransactionCard";

function Feed({ data, loading }) {
  const title="Feed"
  const body=["Here is where you can watch our user's transactions live!"]
  console.log(data)
  return (
    <>
      <TextContainer title={title} body={body}/>
      <Grid padding={2} container spacing={2}>
      {!loading &&
        data != null &&
        data.map((entry) => ( 
          <Grid xs={6}>
           <TransactionCard data={entry[1]} img={'assets/' + entry[1].img_name} alt="certificate"/>
          </Grid>
        ))
      }
      </Grid>
    </>
  )
}
export default Feed;