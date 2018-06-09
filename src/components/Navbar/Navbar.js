import React from "react";

//import "./Navbar.css";

const styles = {
  top: {
    backgroundColor: "orange",
    height: "15%", 
    width: "100%",
    textAlign: "center",
    position: "fixed",
    zIndex: 1,
    marginTop: "0"
  },

  home: {
    fontFamily: "Impact, Charcoal, sans-serif",
    fontWeight: 50,
    fontSize: 20
  }

}

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-light" style={styles.top}>
        <a className="navbar-brand" href="/" style={styles.home}>Click Game!</a>
        <p className ="title">Click an image to begin!</p>
        <p className ="score">Score: {this.props.score}   | Top Score: 0</p>
      </nav>
    );     
  } 
}
  

export default Navbar;