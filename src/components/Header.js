import React from 'react';
import {Stats} from "./Stats";
import {Stopwatch} from "./Stopwatch";
import PropTypes from 'prop-types';
import {connect} from "react-redux";

export const Header = ({title,players}) => {
    // console.log(props);
    // const {title, totalPlayers, players} = props;    // destruct assignment
    return (
        <header className="header">
            <Stats players={players}/>
            <h1 className="h1">{title}</h1>
            <Stopwatch/>
        </header>
    )
}

Header.propTypes = {
    title:PropTypes.string,
    players:PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        score: PropTypes.number,
        name: PropTypes.string
    }))
}

Header.defaultProps = {
    title:'Scoreboard'

}


// store가 갖고 있는 state를 현재 컴포넌트의 Props로 subscribe한다.
const mapStateToProps = (state) => ({
    // 왼쪽은 props, 오른쪽은 state
    title: state.playerReducer.title,
})

// 커링 펑션, HoC
export default connect(mapStateToProps, null)(Header);
