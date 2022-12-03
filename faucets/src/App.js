
import React, { Component } from "react";
import "./App.css";

const CHAINS = [
  { name: "Ethereum Goerli", id: "1" },
  { name: "Aztec Testnet", id: "2" },
  { name: "Moonbase Alpha", id: "3" },
  { name: "Poligon Mumbai", id: "4" }
];

class FaucetDisplay extends Component {
  constructor() {
    super()
    this.state = { faucetData: null }
  }
  componentDidMount() {
    const id = this.props.id
    const URL = 'https://jsonplaceholder.typicode.com/todos/'+id
    console.log(URL)
    fetch(URL)
      .then(res => res.json())
      .then(json => {
        this.setState({faucetData: json})
        console.log(json)
      })
  }
  render() {
    const faucetData = this.state.faucetData
    if (!faucetData) return <div>Loading...</div>
    return <div>{JSON.stringify(faucetData.title)}</div>
  }
}

class App extends Component {
  constructor() {
    super()
    this.state = { activeChain: 0 }
  }
  render() {
    const activeChain = this.state.activeChain
    return (
      <div className="App">
        {CHAINS.map((chain, index) => (
          <button
            key={index}
            onClick={() => {
              this.setState({activeChain: index})
              console.log(activeChain)
            }}
          >
            {chain.name}
          </button>
        ))}
        < FaucetDisplay key={CHAINS[activeChain].name} id={CHAINS[activeChain].id} />
      </div>
    );
  }
}

export default App;