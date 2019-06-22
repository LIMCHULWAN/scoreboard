import React from 'react';

export const Header = (props) => {
    // console.log(props);
    const {title, totalPlayers} = props;    // destruct assignment
    return (
        <header className="header">
            <h1 className="h1">{title}</h1>
            <span className="state">Players: {props.totalPlayers}</span>
        </header>
    )
}