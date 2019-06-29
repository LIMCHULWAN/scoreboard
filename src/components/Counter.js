import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {changeScore} from "../redux/actions";

class Counter extends React.Component{

    constructor(){
        super();
        // this.state = {
        //     score:0,
        //     time:10
        // };
        // this.incrementScore = this.incrementScore.bind(this);
    }

    // 애로우펑션안의 this는 lexical this로써 자기자신을 가리킨다.
    // handleScore = (delta) =>{
    //     console.log('increment:', this);
    //
    //     // this.state.score += 1;
    //     // setState를 호출해야한 UI 렌더링이 된다.
    //     this.setState({score: this.state.score + delta});
    //     this.setState(prevState =>{
    //         return {score:prevState.score}
    //     })
    // }

    render(){
        return (
            <div className="counter">
                <button className="counter-action decrement" onClick={() => this.props.changeScore(this.props.id, -1)}> - </button>
                <span className="counter-score">{this.props.score}</span>
                <button className="counter-action increment" onClick={() => this.props.changeScore(this.props.id, 1)}> + </button>
            </div>
        )
    }
}

Counter.propTypes = {
    id: PropTypes.number,
    score: PropTypes.number,
    changeScore: PropTypes.func
}


// 액션을 디스패치하는 펑션을 props로 매핑
const mapActionToProps = (dispatch) => ({
    changeScore:(id, delta) => dispatch(changeScore(id, delta))
})

// 커링 펑션, HoC
export default connect(null, mapActionToProps)(Counter);
