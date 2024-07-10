import React from "react";
import "./App.css";
import DeveloperPage from "./components/DeveloperPage";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <DeveloperPage />
      </>
    );
  }
}

export default App;
