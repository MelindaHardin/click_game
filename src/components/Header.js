import React from "react";

const styles = {
   jumbo: {
     height: 300,
     backgroundColor: "yellow"
  }, 

  head: {
    fontFamily: "Impact, Charcoal, sans-serif",
    fontWeight: 50,
    fontSize: 50
  },

  sub: {
    fontFamily: "Impact, Charcoal, sans-serif",
    fontSize: 15, 
    fontWeight: 20
  }
}
const Header = () => (
  <div class="bootstrapJumbo" >

    <div class="jumbotron jumbotron-fluid" style = {styles.jumbo}>
      <div class="container text-center">
        <h1 class="display-4" style={styles.head} >Click Game!</h1>
        <p class="lead" style={styles.sub}>Click on an image to earn points, but don't click on any more than once!</p>
      </div>
    </div>

  </div>
);

export default Header;