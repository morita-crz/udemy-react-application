import React, {Component} from 'react';

const App = () => (<Counter></Counter>)

class Counter extends Component {

  constructor(props) {
    super(props)
    this.state = {count:0}
  }

  handlePlusBtn = () => {
    this.setState({count: this.state.count + 1})
  }
  handleMinBtn = () => {
    this.setState({count: this.state.count - 1})
  }

  render() {
    return (
      <React.Fragment>

      <div>counter: {this.state.count}</div>
      <button onClick={this.handlePlusBtn}>+1</button>
      <button onClick={this.handleMinBtn}>-1</button>
      </React.Fragment>
    )
  }
}

export default App;
