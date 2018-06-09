import React, { Component } from "react";
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
    clickedFriends: [],
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
  };



  render() {
    return (
      <Wrapper>
        <Navbar
          score={this.state.score}
        />
        <Header />
        {this.state.friends.map(cartoonFriend => (
          <Cards

            image={cartoonFriend.image}
            id={cartoonFriend.id}
            handleIncrement={this.handleIncrement}
          />

        ))}
        <Footer />
      </Wrapper>

    );
  }

}

export default App;



