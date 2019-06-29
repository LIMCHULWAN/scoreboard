import React from 'react';
import Header from './components/Header';
import './App.css';
import {Player} from "./components/Player";
import AddPlayerForm from "./components/AddPlayerForm";
import {connect} from "react-redux";
import {playerReducer} from "./redux/reducers/player";


class App extends React.Component{
    maxId = 4;

  handleRemovePlayer = (id) => {
    console.log('remove player: '+id);

    this.setState(prevState => {
      this.setState(prevState => ({
        players: prevState.players.filter(item => item.id !== id)
      }))
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
          <Header title="My Scoreboard" players={this.props.players}/>
          {
            this.props.players.map(player =>(
                <Player name={player.name} id={player.id} key={player.id} score={player.score}
                        removePlayer={this.handleRemovePlayer}/>
            ))
          }

          <AddPlayerForm/>
        </div>
    )
  }
}

// store가 갖고 있는 state를 현재 컴포넌트의 Props로 subscribe한다.
const mapStateToProps = (state) => ({
    // 왼쪽은 props, 오른쪽은 state
    players: state.playerReducer.players,    
})

// 커링 펑션, HoC
export default connect(mapStateToProps, null)(App);
