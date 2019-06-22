import React from 'react';
import {Stats} from "./Stats";

export const Header = (props) => {
    // console.log(props);
    const {title, totalPlayers, players} = props;    // destruct assignment
    return (
        <header className="header">
            <Stats players={players}/>
            <h1 className="h1">{title}</h1>
        </header>
    )
}