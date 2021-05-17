import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { PostContainer } from "./dashboard/containers";
import { nPostContainer } from "./createpage/containers";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Route path="/" component={PostContainer} exact></Route>
          <Route path="/newContainer" component={nPostContainer} exact></Route>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
