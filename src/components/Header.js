import React from 'react';
import {Stats} from "./Stats";
import {Stopwatch} from "./Stopwatch";
import PropTypes from 'prop-types';

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