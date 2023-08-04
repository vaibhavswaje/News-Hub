import "./App.css";
import React, { Component } from "react";
import Navbar from "./component/Navbar";
import News from "./component/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {
  apiKey=process.env.api
  render() {
    return (
      <div>
        <Router>
          <Navbar />

          <Routes>
            <Route
              exact
              path="/"
              element={<News key="111" country={"in"} category={"Sports"} apiKey={this.apiKey}/>}
            />
            <Route
              exact
              path="/business"
              element={<News key="112" country={"in"} category={"Business"} apiKey={this.apiKey}/>}
            />
            <Route
              exact
              path="/general"
              element={<News key="113" country={"in"} category={"General"} apiKey={this.apiKey}/>}
            />
            <Route
              exact
              path="/health"
              element={<News key="114" country={"in"} category={"Health"} apiKey={this.apiKey}/>}
            />
            <Route
              exact
              path="/science"
              element={<News key="115" country={"in"} category={"Science"} apiKey={this.apiKey}/>}
            />
            <Route
              exact
              path="/sports"
              element={<News key="116" country={"in"} category={"Sports"} apiKey={this.apiKey}/>}
            />
            <Route
              exact
              path="/technology"
              element={
                <News key="117" country={"in"} category={"Technology"} apiKey={this.apiKey}/>
              }
            />
            <Route
              exact
              path="/entertainment"
              element={<News key="115" country={"in"} category={"Entertainment"} apiKey={this.apiKey}/>}
            />
          </Routes>
        </Router>
      </div>
    );
  }
}
