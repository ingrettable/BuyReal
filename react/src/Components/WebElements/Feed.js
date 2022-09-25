import React, { useState, useEffect, useCallback } from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import TextContainer from "../TextContainer";
import TransactionCard from "./TransactionCard";

function Feed({ data, loading }) {
  const title="Feed"
  const body=["Here is where you can watch our user's transactions live!"]
  console.log(data)
  return (
    <>
      <TextContainer title={title} body={body}/>
      {!loading &&
        data != null &&
        data.map((entry) => ( 
           <TransactionCard img={'assets/' + entry[1].img_name} alt="certificate"/>
        ))
      }
    </>
  )
}
export default Feed;