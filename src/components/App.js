import React from 'react';
import randomColor from 'randomcolor';
import '../styles/App.css';
import Action from './Action';
import Footer from './Footer';
import Statement from './Statement';
import Reasons from '../api'

class App extends React.Component {

state = {
    reasons: Reasons,
    selectedReason: {
      fact: 'O veganismo é uma forma de viver que busca excluir, na medida do possível e do praticável, todas as formas de exploração e de crueldade contra animais, seja para a alimentação, para o vestuário ou para qualquer outra finalidade.',
      source: 'The Vegan Society'
    },
    gradientColorOne: '#0c8989',
    gradientColorTwo: '#97fcba'
  }

  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.reasons.length);
    const reason = this.state.reasons[randomNum];
    const gradientColorOne = randomColor({ luminosity: 'dark'});
    const gradientColorTwo = randomColor({ luminosity: 'light'});
    this.setState(() => ({
      selectedReason: {
        fact: reason.fact,
        source: reason.source
      } ,
      gradientColorOne,
      gradientColorTwo
    }));
  }
 
  render() {
    return (
      <div className="hero is-bold is-fullheight" style={{ background: '-webkit-linear-gradient(141deg, ' + this.state.gradientColorOne + ',' + this.state.gradientColorTwo + ')' }}>
       <div className="hero-body">
        <div className="container">
          <Statement 
            fact={this.state.selectedReason.fact}
            source={this.state.selectedReason.source}
            />
          <Action 
            backgroundColor={this.state.gradientColorOne}
            handlePick={this.handlePick}
          />
        </div>
       </div>
       <Footer/>
      </div>    
    );
  }
}

export default App;
