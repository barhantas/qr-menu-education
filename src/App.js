import React from "react";
import "./App.css";

import ProfileCard from "./components/ProfileCard/ProfileCard";
import Menu from "./components/Menu/Menu";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ProfileCard />
        <Menu />
      </header>
    </div>
  );
}

export default App;
