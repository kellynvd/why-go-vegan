import React from 'react';
import '../styles/App.css';
import Reasons from '../api'
import Action from './Action';
import InitialStatement from './InitialStatement';
import randomColor from 'randomcolor';

class App extends React.Component {

state = {
    reasons: Reasons,
    selectedReason: {
      fact: undefined,
      source: undefined
    },
    backgroundColor: '#0f967d'
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
      <div className="app-initial-statement" style={{ background: this.state.backgroundColor }}>
       <InitialStatement hasReasons={this.state.selectedReason.fact}/>
        <p>{this.state.selectedReason.fact}</p>
        <small>{this.state.selectedReason.source}</small>
        <Action handlePick={this.handlePick}/>
      </div>
    );
  }
}

export default App;
