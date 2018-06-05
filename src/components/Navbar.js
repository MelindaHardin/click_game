import React from "react";

const styles = {
  top: {
    backgroundColor: "yellow",
    height: 75, 
    textAlign: "center"
  },

  home: {
    fontFamily: "Impact, Charcoal, sans-serif",
    fontWeight: 50,
    fontSize: 20

  }

}


const Navbar = () => (
  <nav class="navbar navbar-light bg-light" style={styles.top}>
    <a class="navbar-brand" href="/" style={styles.home}>Click Game!</a>
    <p class ="title">Click an image to begin!</p>
    <p class ="score">Score: 0 | Top Score: 0 </p>
  </nav>
);

export default Navbar;