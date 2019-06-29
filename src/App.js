import React from 'react';
import Header from './components/Header';
import './App.css';
import Player from "./components/Player";
import AddPlayerForm from "./components/AddPlayerForm";
import {connect} from "react-redux";
import {playerReducer} from "./redux/reducers/player";


class App extends React.Component{

  render() {
    return(
        <div className="scoreboard">
          <Header title="My Scoreboard" players={this.props.players}/>
          {
            this.props.players.map(player =>(
                <Player name={player.name} id={player.id} key={player.id} score={player.score}/>
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
