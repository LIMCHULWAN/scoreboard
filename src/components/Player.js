import React from 'react';
import {Counter} from "./Counter";

export class Player extends React.PureComponent{
    render(){
        console.log(this.props.name, ' rendered');
        return(
            <div className="player">
        <span className="player-name">
            <button className="remove-player" onClick={() => this.props.removePlayer(this.props.id)}>X</button>
            {this.props.name}
        </span>
                <Counter score={this.props.score} id={this.props.id} changeScore={this.props.changeScore} />
            </div>
        )
    }
}

// export const Player = (props) => {
//     console.log(this.props.name, ' rendered');
//
//     return(
//         <div className="player">
//         <span className="player-name">
//             <button className="remove-player" onClick={() => this.props.removePlayer(this.props.id)}>X</button>
//             {this.props.name}
//         </span>
//             <Counter score={this.props.score} id={this.props.id} changeScore={this.props.changeScore} />
//         </div>
//     )
// }