import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Cards from "./components/cards/Cards";
import friends from "./friends.json";
import Footer from "./components/Footer";

const App = () => (
  <div>
    <Navbar />
    <Header />

    <Cards
      image={friends[0].image}
    />

    <Cards
      image={friends[1].image}
    />

    <Cards
      image={friends[2].image}
    />

    <Cards
      image={friends[3].image}
    />

    <Cards
      image={friends[4].image}
    />

    <Cards
      image={friends[5].image}
    />

    <Cards
      image={friends[6].image}
    />

    <Cards
      image={friends[7].image}
    />

    <Cards
      image={friends[8].image}
    />

    <Cards
      image={friends[9].image}
    />

    <Cards
      image={friends[10].image}
    />

    <Cards
      image={friends[11].image}
    />

  

    <Footer />
  </div>
);

export default App;



