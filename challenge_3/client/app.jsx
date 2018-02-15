import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameCount: 0,
      one: false,
      two: false,
      three: false,
      four: false,
      five: false,
      six: false,
      seven: false,
      eight: false,
      nine: false,
      ten: false,
      eleven: false,
      twelve: false,
      thirteen: false,
      fourteen: false,
      fifteen: false,
      sixteen: false
    }
  }

winner() {
  let spot = this.state;
  if(spot.four === 1 && spot.eight === 1 && spot.twelve === 1 && spot.sixteen === 1) {
    let item = document.getElementsByClassName('title')
    console.log(item)
    item[0].innerHTML = '🔵BLUE WINS🔵'
  } else if (spot.four === 0 && spot.eight === 0 && spot.twelve === 0 && spot.sixteen === 0) {
    let item = document.getElementsByClassName('title')
    console.log(item)
    item[0].innerHTML = '🔴RED WINS🔴'
  } else if(spot.three === 1 && spot.seven === 1 && spot.eleven === 1 && spot.fifteen === 1) {
    let item = document.getElementsByClassName('title')
    console.log(item)
    item[0].innerHTML = '🔵BLUE WINS🔵'
  } else if (spot.three === 0 && spot.seven === 0 && spot.eleven === 0 && spot.fifteen === 0) {
    let item = document.getElementsByClassName('title')
    console.log(item)
    item[0].innerHTML = '🔴RED WINS🔴'
  } else if(spot.two === 1 && spot.six === 1 && spot.ten === 1 && spot.fourteen === 1) {
    let item = document.getElementsByClassName('title')
    console.log(item)
    item[0].innerHTML = '🔵BLUE WINS🔵'
  } else if (spot.two === 0 && spot.six === 0 && spot.ten === 0 && spot.fourteen === 0) {
    let item = document.getElementsByClassName('title')
    console.log(item)
    item[0].innerHTML = '🔴RED WINS🔴'
  } else if(spot.one === 1 && spot.five === 1 && spot.nine === 1 && spot.thirteen === 1) {
    let item = document.getElementsByClassName('title')
    console.log(item)
    item[0].innerHTML = '🔵BLUE WINS🔵'
  } else if (spot.one === 0 && spot.five === 0 && spot.nine === 0 && spot.thirteen === 0) {
    let item = document.getElementsByClassName('title')
    console.log(item)
    item[0].innerHTML = '🔴RED WINS🔴'
  } else if(spot.one === 1 && spot.two === 1 && spot.three === 1 && spot.four === 1) {
    let item = document.getElementsByClassName('title')
    console.log(item)
    item[0].innerHTML = '🔵BLUE WINS🔵'
  } else if (spot.one === 0 && spot.two === 0 && spot.three === 0 && spot.four === 0) {
    let item = document.getElementsByClassName('title')
    console.log(item)
    item[0].innerHTML = '🔴RED WINS🔴'
  } else if(spot.five === 1 && spot.six === 1 && spot.seven === 1 && spot.eight === 1) {
    let item = document.getElementsByClassName('title')
    console.log(item)
    item[0].innerHTML = '🔵BLUE WINS🔵'
  } else if (spot.five === 0 && spot.six === 0 && spot.seven === 0 && spot.eight === 0) {
    let item = document.getElementsByClassName('title')
    console.log(item)
    item[0].innerHTML = '🔴RED WINS🔴'
  } else if(spot.nine === 1 && spot.ten === 1 && spot.eleven === 1 && spot.twelve === 1) {
    let item = document.getElementsByClassName('title')
    console.log(item)
    item[0].innerHTML = '🔵BLUE WINS🔵'
  } else if (spot.nine === 0 && spot.ten === 0 && spot.eleven === 0 && spot.twelve === 0) {
    let item = document.getElementsByClassName('title')
    console.log(item)
    item[0].innerHTML = '🔴RED WINS🔴'
  } else if(spot.thirteen === 1 && spot.fourteen === 1 && spot.fifteen === 1 && spot.sixteen === 1) {
    let item = document.getElementsByClassName('title')
    console.log(item)
    item[0].innerHTML = '🔵BLUE WINS🔵'
  } else if (spot.thirteen === 0 && spot.fourteen === 0 && spot.fifteen === 0 && spot.sixteen === 0) {
    let item = document.getElementsByClassName('title')
    console.log(item)
    item[0].innerHTML = '🔴RED WINS🔴'
  } else if(spot.one === 1 && spot.six === 1 && spot.eleven === 1 && spot.sixteen === 1) {
    let item = document.getElementsByClassName('title')
    console.log(item)
    item[0].innerHTML = '🔵BLUE WINS🔵'
  } else if (spot.one === 0 && spot.six === 0 && spot.eleven === 0 && spot.sixteen === 0) {
    let item = document.getElementsByClassName('title')
    console.log(item)
    item[0].innerHTML = '🔴RED WINS🔴'
  } else if(spot.thirteen === 1 && spot.ten === 1 && spot.seven === 1 && spot.four === 1) {
    let item = document.getElementsByClassName('title')
    console.log(item)
    item[0].innerHTML = '🔵BLUE WINS🔵'
  } else if (spot.thirteen === 0 && spot.ten === 0 && spot.seven === 0 && spot.four === 0) {
    let item = document.getElementsByClassName('title')
    console.log(item)
    item[0].innerHTML = '🔴RED WINS🔴'
  }
}


spotClick1() {
  if(this.state.gameCount % 2 === 0) {
    this.setState({
      one: 1,
      gameCount: this.state.gameCount + 1
    })
    let item = document.getElementsByClassName('one')
    item[0].innerHTML = '🔵'
  } else {
    this.setState({
      one: 0,
      gameCount: this.state.gameCount + 1
    })
    let item = document.getElementsByClassName('one')
    item[0].innerHTML = '🔴'
    setTimeout(() => {
      this.winner();
    }, 1000);
  }
}

spotClick2() {
  if(this.state.gameCount % 2 === 0) {
    this.setState({
      two: 1,
      gameCount: this.state.gameCount + 1
    })
    let item = document.getElementsByClassName('two')
    item[0].innerHTML = '🔵'
  } else {
    this.setState({
      two: 0,
      gameCount: this.state.gameCount + 1
    })
    let item = document.getElementsByClassName('two')
    item[0].innerHTML = '🔴'
    setTimeout(() => {
      this.winner();
    }, 1000);
  }
}

spotClick3() {
  if(this.state.gameCount % 2 === 0) {
    this.setState({
      three: 1,
      gameCount: this.state.gameCount + 1
    })
    let item = document.getElementsByClassName('three')
    item[0].innerHTML = '🔵'
  } else {
    this.setState({
      three: 0,
      gameCount: this.state.gameCount + 1
    })
    let item = document.getElementsByClassName('three')
    item[0].innerHTML = '🔴'
    setTimeout(() => {
      this.winner();
    }, 1000);
  }
}

spotClick4() {
  if(this.state.gameCount % 2 === 0) {
    this.setState({
      four: 1,
      gameCount: this.state.gameCount + 1
    })
    let item = document.getElementsByClassName('four')
    item[0].innerHTML = '🔵'
  } else {
    this.setState({
      four: 0,
      gameCount: this.state.gameCount + 1
    })
    let item = document.getElementsByClassName('four')
    item[0].innerHTML = '🔴'
    setTimeout(() => {
      this.winner();
    }, 1000);
  }
}
spotClick5() {
  if(this.state.gameCount % 2 === 0) {
    this.setState({
      five: 1,
      gameCount: this.state.gameCount + 1
    })
    let item = document.getElementsByClassName('five')
    item[0].innerHTML = '🔵'
  } else {
    this.setState({
      five: 0,
      gameCount: this.state.gameCount + 1
    })
    let item = document.getElementsByClassName('five')
    item[0].innerHTML = '🔴'
    setTimeout(() => {
      this.winner();
    }, 1000);
  }
}
spotClick6() {
  if(this.state.gameCount % 2 === 0) {
    this.setState({
      six: 1,
      gameCount: this.state.gameCount + 1
    })
    let item = document.getElementsByClassName('six')
    item[0].innerHTML = '🔵'
  } else {
    this.setState({
      six: 0,
      gameCount: this.state.gameCount + 1
    })
    let item = document.getElementsByClassName('six')
    item[0].innerHTML = '🔴'
    setTimeout(() => {
      this.winner();
    }, 1000);
  }
}
spotClick7() {
  if(this.state.gameCount % 2 === 0) {
    this.setState({
      seven: 1,
      gameCount: this.state.gameCount + 1
    })
    let item = document.getElementsByClassName('seven')
    item[0].innerHTML = '🔵'
  } else {
    this.setState({
      seven: 0,
      gameCount: this.state.gameCount + 1
    })
    let item = document.getElementsByClassName('seven')
    item[0].innerHTML = '🔴'
    setTimeout(() => {
      this.winner();
    }, 1000);
  }
}
spotClick8() {
  if(this.state.gameCount % 2 === 0) {
    this.setState({
      eight: 1,
      gameCount: this.state.gameCount + 1
    })
    let item = document.getElementsByClassName('eight')
    item[0].innerHTML = '🔵'
  } else {
    this.setState({
      eight: 0,
      gameCount: this.state.gameCount + 1
    })
    let item = document.getElementsByClassName('eight')
    item[0].innerHTML = '🔴'
    setTimeout(() => {
      this.winner();
    }, 1000);
  }
}
spotClick9() {
  if(this.state.gameCount % 2 === 0) {
    this.setState({
      nine: 1,
      gameCount: this.state.gameCount + 1
    })
    let item = document.getElementsByClassName('nine')
    item[0].innerHTML = '🔵'
  } else {
    this.setState({
      nine: 0,
      gameCount: this.state.gameCount + 1
    })
    let item = document.getElementsByClassName('nine')
    item[0].innerHTML = '🔴'
    setTimeout(() => {
      this.winner();
    }, 1000);
  }

}
spotClick10() {
  if(this.state.gameCount % 2 === 0) {
    this.setState({
      ten: 1,
      gameCount: this.state.gameCount + 1
    })
    let item = document.getElementsByClassName('ten')
    item[0].innerHTML = '🔵'
  } else {
    this.setState({
      ten: 0,
      gameCount: this.state.gameCount + 1
    })
    let item = document.getElementsByClassName('ten')
    item[0].innerHTML = '🔴'
    setTimeout(() => {
      this.winner();
    }, 1000);
  }

}
spotClick11() {
  if(this.state.gameCount % 2 === 0) {
    this.setState({
      eleven: 1,
      gameCount: this.state.gameCount + 1
    })
    let item = document.getElementsByClassName('eleven')
    item[0].innerHTML = '🔵'
  } else {
    this.setState({
      eleven: 0,
      gameCount: this.state.gameCount + 1
    })
    let item = document.getElementsByClassName('eleven')
    item[0].innerHTML = '🔴'
    setTimeout(() => {
      this.winner();
    }, 1000);
  }

}
spotClick12() {
  if(this.state.gameCount % 2 === 0) {
    this.setState({
      twelve: 1,
      gameCount: this.state.gameCount + 1
    })
    let item = document.getElementsByClassName('twelve')
    item[0].innerHTML = '🔵'
  } else {
    this.setState({
      twelve: 0,
      gameCount: this.state.gameCount + 1
    })
    let item = document.getElementsByClassName('twelve')
    item[0].innerHTML = '🔴'
    setTimeout(() => {
      this.winner();
    }, 1000);
  }

}
spotClick13() {
  if(this.state.gameCount % 2 === 0) {
    this.setState({
      thirteen: 1,
      gameCount: this.state.gameCount + 1
    })
    let item = document.getElementsByClassName('thirteen')
    item[0].innerHTML = '🔵'
  } else {
    this.setState({
      thirteen: 0,
      gameCount: this.state.gameCount + 1
    })
    let item = document.getElementsByClassName('thirteen')
    item[0].innerHTML = '🔴'
    setTimeout(() => {
      this.winner();
    }, 1000);
  }

}
spotClick14() {
  if(this.state.gameCount % 2 === 0) {
    this.setState({
      fourteen: 1,
      gameCount: this.state.gameCount + 1
    })
    let item = document.getElementsByClassName('fourteen')
    item[0].innerHTML = '🔵'
  } else {
    this.setState({
      fourteen: 0,
      gameCount: this.state.gameCount + 1
    })
    let item = document.getElementsByClassName('fourteen')
    item[0].innerHTML = '🔴'
    setTimeout(() => {
      this.winner();
    }, 1000);
  }

}
spotClick15() {
  if(this.state.gameCount % 2 === 0) {
    this.setState({
      fifteen: 1,
      gameCount: this.state.gameCount + 1
    })
    let item = document.getElementsByClassName('fifteen')
    item[0].innerHTML = '🔵'
  } else {
    this.setState({
      fifteen: 0,
      gameCount: this.state.gameCount + 1
    })
    let item = document.getElementsByClassName('fifteen')
    item[0].innerHTML = '🔴'
    setTimeout(() => {
      this.winner();
    }, 1000);
  }

}
spotClick16() {
  if(this.state.gameCount % 2 === 0) {
    this.setState({
      sixteen: 1,
      gameCount: this.state.gameCount + 1
    })
    let item = document.getElementsByClassName('sixteen')
    item[0].innerHTML = '🔵'
  } else {
    this.setState({
      sixteen: 0,
      gameCount: this.state.gameCount + 1
    })
    let item = document.getElementsByClassName('sixteen')
    item[0].innerHTML = '🔴'
    setTimeout(() => {
      this.winner();
    }, 1000);
  }

}
  render() {
    return (
      <div>
        <h1 className="title">Connect 4</h1>
        <div className="wrapper">
          <div onClick={() => this.spotClick1()} className="one">   </div>
          <div onClick={() => this.spotClick2()} className="two">   </div>
          <div onClick={() => this.spotClick3()} className="three">   </div>
          <div onClick={() => this.spotClick4()} className="four">   </div>
          <div onClick={() => this.spotClick5()} className="five">   </div>
          <div onClick={() => this.spotClick6()} className="six">   </div>
          <div onClick={() => this.spotClick7()} className="seven">   </div>
          <div onClick={() => this.spotClick8()} className="eight">   </div>
          <div onClick={() => this.spotClick9()} className="nine">   </div>
          <div onClick={() => this.spotClick10()} className="ten">   </div>
          <div onClick={() => this.spotClick11()} className="eleven">   </div>
          <div onClick={() => this.spotClick12()} className="twelve">   </div>
          <div onClick={() => this.spotClick13()} className="thirteen">   </div>
          <div onClick={() => this.spotClick14()} className="fourteen">   </div>
          <div onClick={() => this.spotClick15()} className="fifteen">   </div>
          <div onClick={() => this.spotClick16()} className="sixteen">   </div>
        </div>
    </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'))
