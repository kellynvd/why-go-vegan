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
      fact: 'Veganism is a way of living which seeks to exclude, as far as is possible and practicable, all forms of exploitation of, and cruelty to, animals for food, clothing or any other purpose.',
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
