import React, { useState, useEffect, useCallback } from "react";
import { usePlaidLink } from "react-plaid-link";
import "./App.scss";
import ResponsiveAppBar from "./Components/ResponsiveAppBar";
import AboutUs from "./Components/WebElements/AboutUs";
import Implementation from "./Components/WebElements/Implementation";
import Next from "./Components/WebElements/Next";
import { Button } from "@mui/material";
import Problem from "./Components/WebElements/Problem";

function App(props) {
  const [token, setToken] = useState(null);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const onSuccess = useCallback(async (publicToken) => {
    setLoading(true);
    await fetch("/api/set_access_token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
      body: `public_token=${publicToken}`,
    });
    const response = await fetch("/api/transactions", {});
    await getTransactions();
  }, []);

  // Creates a Link token
  const createLinkToken = React.useCallback(async () => {
    // For OAuth, use previously generated Link token
    if (window.location.href.includes("?oauth_state_id=")) {
      const linkToken = localStorage.getItem('link_token');
      setToken(linkToken);
    } else {
      const response = await fetch("/api/create_link_token", {});
      const data = await response.json();
      setToken(data.link_token);
      localStorage.setItem("link_token", data.link_token);
    }
  }, [setToken]);

  // Fetch transaction data
  const getTransactions = React.useCallback(async () => {
    setLoading(true);
    const response = await fetch("/api/transactions", {});
    let data = await response.json();

    data = Object.entries(data['latest_transactions']).filter(entry => entry[1].amount > 0 );
    
    let names = ["Brice",
      "Nate",
      "Rudy",
      "Easton",
      "Killian",
      "Casey",
      "Aaron",
      "Devyn",
      "Joaquin",
      "Raymond",
      "Bryce",
      "Dalton"
    ]

    data.map(async (entry, i) => {
      let response = await fetch("/api/certificate", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "name": names[Math.floor(Math.random() * 12)],
          "spent": String(entry[1].amount),
          "merchant": (entry[1].merchant === null ? entry[1].merchant : "Somewhere") ,
          "location": (entry[1].location === null ? entry[1].location.city : "Somewhere") 
        })
      })
      let json = await response.json();
      console.log(json);
    });
    console.log(data);
    //setData(data);
    //setLoading(false);
  }, [setData, setLoading]);

  let isOauth = false;

  const config = {
    token,
    onSuccess,
  };

  // For OAuth, configure the received redirect URI
  if (window.location.href.includes("?oauth_state_id=")) {
    config.receivedRedirectUri = window.location.href;
    isOauth = true;
  }
  const { open, ready } = usePlaidLink(config);

  useEffect(() => {
    if (token == null) {
      createLinkToken();
    }
    if (isOauth && ready) {
      open();
    }
  }, [token, isOauth, ready, open]);

  const linkAccount = <Button onClick={() => open()
  } disabled={!ready}>
    <strong>Link account</strong>
  </Button>

  return (
    <div>
      <ResponsiveAppBar linkAccount={ linkAccount }/>
      {/* <PlaidButtonGroup buttons={buttonList} /> */}
      {/* Login with Plaid */}
      <AboutUs />
      <Problem/>
      <Implementation />
      <Next />
      {!loading &&
        data != null &&
        data.map((entry, i) => (
          <li key={i}>
            {entry}
          </li>
        )
        )}
    </div>
  );
}

export default App;
