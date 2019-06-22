import React from 'react';
import {Header} from './components/Header';
import './App.css';
import {Player} from "./components/Player";


class App extends React.Component{
  state = {
    players: [
      {name:'LDK', score: 30, id: 1 },
      {name:'HONG', score: 30, id: 2},
      {name:'KIM', score: 30, id: 3},
      {name:'PARK', score: 30, id: 4},
    ]
  }

  handleRemovePlayer = (id) => {
    console.log('remove player: '+id);

    this.setState(prevState => {
      this.setState(prevState => ({
        players: prevState.players.filter(item => item.id !== id)
      }))
    })
  }

  render() {
    return(
        <div className="scoreboard">
          <Header title="My Scoreboard" totalPlayers={11}/>
          {
            this.state.players.map(player =>(
                <Player name={player.name} id={player.id} key={player.id}
                        removePlayer={this.handleRemovePlayer}/>
            ))
          }
        </div>
    )
  }
}

export default App;
