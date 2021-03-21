import React from "react";
import { observer, useLocalStore, useObserver } from "mobx-react";
import axios from "axios";
import { Button } from "antd";

//styles
import "./App.css";
import "antd/dist/antd.css";

// const webApiUrl = "https://api.spacexdata.com/v3/launches";

const handleClick = (e) => {
  console.log("Getting mission list");
};

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="app-title">Space X Mission List</h1>
        <div>
          <Button type="primary" onClick={handleClick}>
            Fetch
          </Button>
        </div>
      </header>
    </div>
  );
};

export default App;
