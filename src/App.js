import React, { Component } from "react";
import Container from "./Container";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import Cards from "./components/Cards";
import friends from "./friends.json";
import Footer from "./components/Footer";


class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    score: 0,
    topScore: 0,
    clicked:[]
  };


  handleClicked = id => {
    if(this.state.clicked.indexOf(id) === -1){
      this.handleIncrement();
      this.setState({clicked: this.state.clicked.concat(id)});
    }else{
      this.handleLoss();
    }
  };

  // handleIncrement increases this.state.score by 1
  handleIncrement = () => {

    // We always use the setState method to update a component's state
    this.setState({ score: this.state.score + 1 });

    this.state.friends.sort(() => {
      return 0.5 - Math.random();
    });
  
  };


  // handleLoss sets score to 0
  handleLoss = () => {
    // We always use the setState method to update a component's state
    this.setState({ score: 0 });
    alert ("GAME OVER");
    
  };

  render() {
    return (
      <Wrapper>
        <Navbar
          score={this.state.score} topScore= {this.state.topScore}
        />
        <Header />
        <Container>
        {this.state.friends.map(Friend => (
          <Cards
            image={Friend.image}
            id={Friend.id}
            handleClicked={this.handleClicked}
            handleIncrement={this.handleIncrement}
            handleLoss={this.handleLoss}
            
          />
        ))}
        </Container>
        <Footer /> 
      </Wrapper>

    );
  }

}

export default App;



