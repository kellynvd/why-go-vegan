import React from 'react';
import randomColor from 'randomcolor';
import '../styles/App.css';
import Action from './Action';
import Statement from './Statement';
import Reasons from '../api'

class App extends React.Component {

state = {
    reasons: Reasons,
    selectedReason: {
      fact: 'O veganismo é uma forma de viver que busca excluir, na medida do possível e do praticável, todas as formas de exploração e de crueldade contra animais, seja para a alimentação, para o vestuário ou para qualquer outra finalidade.',
      source: 'Definição criada pela The Vegan Society, da Inglaterra, mais antiga entidade vegana do mundo'
    },
    backgroundColor: '#008c5f'
  }

  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.reasons.length);
    const reason = this.state.reasons[randomNum];
    const backgroundColor = randomColor({hue: 'green'});
    this.setState(() => ({
      selectedReason: {
        fact: reason.fact,
        source: reason.source
      } ,
      backgroundColor
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
        handlePick={this.handlePick}
       />
      </div>
       </div>
      </div>    
    );
  }
}

export default App;
