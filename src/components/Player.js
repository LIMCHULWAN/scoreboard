import React from 'react';
import Counter from "./Counter";
import {connect} from "react-redux";
import {removePlayer} from "../redux/actions";

class Player extends React.Component{
    render(){
        console.log(this.props.name, ' rendered');
        const {removePlayer,id,name,score,changeScore} = this.props;
        return(
            <div className="player">
        <span className="player-name">
            <button className="remove-player" onClick={() => removePlayer(id)}>X</button>
            {name}
        </span>
                <Counter score={score} id={id} />
            </div>
        )
    }

    componentWillReceiveProps(nextProps, nextContext) {
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log(nextProps, nextState);
        return nextProps.score != this.props.score;
    }
}


// 액션을 디스패치하는 펑션을 props로 매핑
const mapActionToProps = (dispatch) => ({
    removePlayer:(id) => dispatch(removePlayer(id))
})

// 커링 펑션, HoC
export default connect(null, mapActionToProps)(Player);
