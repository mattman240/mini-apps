import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rounds: [['?', '?'],['?', '?'],['?', '?'],['?', '?'],['?', '?'],['?', '?'],['?', '?'],['?', '?'],['?', '?'],['?', '?', '?']],
      turn: 0,
      half: 0,
      playNumber: 0,
      total: 0,
    }
  }

  buttonClick(e) {
    let num = +e.target.innerHTML;
    this.state.total += num
    let round = this.state.rounds;
    let turn = this.state.turn;
    let half = this.state.half;
    if(this.state.playNumber > 19) {
      console.log(this.state.playNumber)
      this.state.rounds[9][2] = num;
    }
    if(num === 10){
      round[turn][0] = 'strike';
      round[turn][1] = ''
      this.state.turn += 1
      this.state.playNumber += 1;
    } else {
      if(this.state.playNumber % 2 === 0){
        half = 0;
      } else {
        half = 1;
      }
      round[turn][half] = num;
      if(half === 1) {
        this.setState({
          turn: turn += 1,
        })
      }
    }
    this.setState({
      playNumber: this.state.playNumber += 1,
    })

  }

  buttons() {
    const buttons = [];
    for(var i = 0; i < 11; i++) {
      buttons.push(<button key={i} onClick={(e) => this.buttonClick(e)}>{i}</button>);
    }
    return <div>{buttons}</div>
  }

  boxes() {
    const boxes = [];
    for(var i = 0; i < this.state.rounds.length; i++) {
      boxes.push(<div key={i} id="boxes">{this.state.rounds[i]}</div> )
    }
    return <div>{boxes}</div>
  }

  totalBoxes() {
    const boxes = [];
    for(var i = 0; i < this.state.rounds.length; i++) {
      let middle = this.state.rounds[i][0] + this.state.rounds[i][1]
      if(middle >= 10) {
        middle = 'spare'
      }
      if(this.state.rounds[i][0] === 10) {
        middle = 'x'
      }
      boxes.push(<div key={i} id="boxes">{middle}</div> )
    }
    return <div>{boxes}</div>
  }

  render() {
    return (
      <div>
        <h1>Bowlling</h1>
        <p>How many pins?</p>
        <div>Total</div>
        <div id="boxes">{this.state.total}</div>
        <br></br>
        <br></br>
        {this.boxes()}
        <br></br>
        <br></br>
        {this.totalBoxes()}
        <br></br>
        <br></br>
        {this.buttons()}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
