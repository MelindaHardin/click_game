import React from "react";

const styles = {
   bottom: {
    height: 30,
    backgroundColor: "orange", 
    fontFamily: "Impact, Charcoal, sans-serif",
    fontSize: 20
  }
}
const Footer = () => (

    <footer>
        <p class="footer" style = {styles.bottom} >
        Click Game!
        </p>
    </footer>
);

export default Footer;