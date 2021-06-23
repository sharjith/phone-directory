import React, { Component } from "react";
import Header from './Header'
import "./Header.css"
import "./App.css"

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="component-body-container">
          <button className="custom-btn add-btn">Add</button>
          <div className="grid-container heading-container">
            <span className="grid-item name-heading">Name</span>
            <span className="grid-item phone-heading">Phone</span>
            <span className="grid-item action-btn-container">
              <button className="custom-btn delete-btn">Delete</button>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
