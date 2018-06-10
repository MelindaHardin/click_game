import React from "react";


const styles = {

    container: {
        width: "70%",
        alignContent: "center",
        textAlign: "center",
        display: "block"
    }

}
const Container = props => <div className="container" style={styles.container}> {props.children} </div>;

export default Container;


