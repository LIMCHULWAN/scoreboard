import React from 'react';
import {Header} from './components/Header';
import './App.css';
import {Player} from "./components/Player";
import {AddPlayerForm} from "./components/AddPlayerForm";


class App extends React.Component{
    maxId = 4;

  state = {
    players: [
      {name:'LDK', id: 1, score:0 },
      {name:'HONG', id: 2, score:0},
      {name:'KIM', id: 3, score:0},
      {name:'PARK', id: 4, score:0},
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

    /**
     * 스코어를 변경시키는 함수
     * @param id : 플레이어 아이디
     * @param delta : 증가면 1 감소면 2
     */
  handleChangeScore = (id, delta) => {
      console.log('change score', id, delta);

      this.setState(prevState => {
          prevState.players.forEach(player => {
              if(player.id === id){
                  player.score += delta;
              }
          })
          return {players:[...prevState.players]}
      })
  }

  handleAddPlayer = (name) => {
      console.log('add player name: ', name);
      this.setState(prevState => {
          prevState.players.push({
              name,
              id: ++this.maxId,
              score: 0
          });
          return{
              player: [...prevState.players]
          }

      })
  }

  handleSubmit = (e) => {
      //기본이벤트(페이지 재로딩) 막기
      e.pereventDefault();
      this.props.addPlayer();

  }

  render() {
    return(
        <div className="scoreboard">
          <Header title="My Scoreboard" players={this.state.players}/>
          {
            this.state.players.map(player =>(
                <Player name={player.name} id={player.id} key={player.id} score={player.score}
                        removePlayer={this.handleRemovePlayer}
                        changeScore={this.handleChangeScore}/>
            ))
          }

          <AddPlayerForm addPlayer={this.handleAddPlayer}/>
        </div>
    )
  }
}

export default App;
