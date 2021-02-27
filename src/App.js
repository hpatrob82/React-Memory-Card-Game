import React, { Component } from 'react';
import MemoryCard from "./components/MemoryCard";
import './App.css';



function generateDeck() {
  const symbols = ['∆', 'ß', '£', '§', '•', '$', '+', 'ø'];
  const deck = []
  for (let i = 0; i < 16; i++) {
      deck.push({
          isFlipped: false,
          symbol: symbols[i % 8]
      });
  }
  shuffle(deck);
  return deck;
}
function shuffle(a) {
  let j, x, i;
      for (i = a.length - 1; i > 0; i--) {
          j = Math.floor(Math.random() * (i + 1));
          x = a[i];
          a[i] = a[j];
          a[j] = x;
      }
      return a;
  }

class App extends Component {
  constructor(props) {
    super(props);
  this.state = {
    deck: generateDeck(),
    pickedCards: [],
  };
}
  
  pickCard(cardIndex) { 

    const { deck } = this.state;
    if (this.state.deck[cardIndex].isFlipped === true) {
      return;
    }
    const cardToFlip = { ...this.state.deck[cardIndex] };
    cardToFlip.isFlipped = true;

    let newDeck = deck.map((card,index) => {
      if (cardIndex === index) {
        return cardToFlip;
      }
      return card;
    });

    let newPickedCards = this.state.pickedCards.concat(cardIndex);
    if (newPickedCards.length === 2) {
      const card1Index = newPickedCards[0];
      const card2Index = newPickedCards[1];
      const firstCard = newDeck[card1Index];
      const secondCard = newDeck[card2Index];

      if (firstCard.symbol !== secondCard.symbol) {
        console.log("There is no match!");
        setTimeout(() => {
          this.unFlipCards(card1Index, card2Index);
        }, 1000);
      }
      newPickedCards = [];
    }

    this.setState({
      deck: newDeck,
      pickedCards: newPickedCards
    });
  };

unFlipCards = (card1Index, card2Index) => {
  const { deck } = this.state;
  const newDeck = deck.map(card => {
    return { ...card };
  });
   newDeck[card1Index].isFlipped = false;
   newDeck[card2Index].isFlipped = false;

   this.setState({
     deck: newDeck
   });
};


render() {
    const { deck } = this.state;
    const cardsJSX = deck.map((card, index) => {
<MemoryCard 
key={`MemoryCard${index}`}
symbol={card.symbol}
isFlipped={card.isFlipped}
pickedCards={() => this.pickedCards(index)}

/>
  
    });
    return (
    <div className="App">
      <header className="App-header">
       <h1>Memory Game</h1>
       <div className="App-subtitle">
       <p>Match Cards to Win</p>
       </div>
      
      </header>
     
      <div>{cardsJSX.slice(0,4)} </div>
      <div>{cardsJSX.slice(4,8)}</div>
      <div>{cardsJSX.slice(8,12)}</div>
      <div>{cardsJSX.slice(12,16)}</div>
     
      
    </div>
      
     
  
    
  );
}
}


export default App;
