import React from "react";
import "./Navbar.css";

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-light" >
        <a className="navbar-brand home" href="/">Click Game!</a>
        <p className ="title">Click an image to begin!</p>
        <p className ="score">Score: {this.props.score}   | Top Score: {this.props.topScore}</p>
      </nav>
    );     
  } 
}
  

export default Navbar;