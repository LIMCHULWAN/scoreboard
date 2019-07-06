import React from 'react';
import {addPlayer} from "../redux/actions";
import {connect} from "react-redux";

import styles from '../pages/scoreboard/Scoreboard.module.css';


export class AddPlayerForm extends React.Component {
    textInput = React.createRef();

    handleSubmit = (e) => {
        // 기본이벤트(페이지 재로딩) 막기
        e.preventDefault();

        this.props.addPlayer(this.textInput.current.value);
    }

    render() {
        return (
            <form className={styles.form} onSubmit={this.handleSubmit}>
                <input type="text" className={styles.input} placeholder="enter a player's name"
                       ref={this.textInput}></input>
                <input type="submit" className={styles.input} value="Add Player"></input>
            </form>
        );
    }
}

// 액션을 디스패치하는 펑션을 props로 매핑
const mapActionToProps = (dispatch) => ({
    addPlayer:(name) => dispatch(addPlayer(name))
})

// 커링 펑션, HoC
export default connect(null, mapActionToProps)(AddPlayerForm);
