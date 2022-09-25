import React, { useState, useEffect, useCallback } from "react";
import { usePlaidLink } from "react-plaid-link";
import "./App.scss";
import ResponsiveAppBar from "./Components/ResponsiveAppBar";
import AboutUs from "./Components/WebElements/AboutUs";
import Implementation from "./Components/WebElements/Implementation";
import Feed from "./Components/WebElements/Feed";
import Problem from "./Components/WebElements/Problem"
import Next from "./Components/WebElements/Next";
import { Button } from "@mui/material";

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

    data = await Object.entries(data['latest_transactions']).filter(entry => entry[1].amount > 0 );
    
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

    for (let entry of data) {
      // Get location
      let merchant = entry[1].merchant_name;
      if (merchant === null) {
        merchant = "Somewhere";
      }
      let location = entry[1].location;
      if (location === null) {
        location = "Somewhere";
      } else {
        location = location.city;
        if (location === null) {
          location = "Somewhere";
        }
      }
      let response = await fetch("/api/certificate", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "name": names[Math.floor(Math.random() * 12)],
          "spent": String(entry[1].amount),
          "merchant": merchant,
          "location": location
        })
      })
      let json = await response.json();
      entry[1].img_name = json.img_name;
    }
    console.log(data);
    setData(data);
    setLoading(false);
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
      <button onClick={getTransactions}>Get Transactions</button>
      <ResponsiveAppBar linkAccount={ linkAccount }/>
      {/* <PlaidButtonGroup buttons={buttonList} /> */}
      {/* Login with Plaid */}
      <AboutUs />
      <Problem/>
      <Implementation />
      <Feed />
      <Next />
      {!loading &&
        data != null &&
        data.map((entry, i) => (
          <li key={i}>
            <img src={"assets/" + entry[1].img_name} alt="certificate" 
              style = {{
                width: "100%",
                height: "auto"
              }}
            />
          </li>
        )
        )}
    </div>
  );
}

export default App;
