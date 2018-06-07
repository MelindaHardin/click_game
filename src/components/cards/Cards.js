import React from "react";

const styles = {
  body: {
    
    float: "left"
  }
}

const Cards = props => (

  <div style={styles.body}>
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      
    </div>

  </div>


);

export default Cards;