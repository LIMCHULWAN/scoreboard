import React from 'react';

export class AddPlayerForm extends React.Component {
    textInput = React.createRef();

    handleSubmit = (e) => {
        // 기본이벤트(페이지 재로딩) 막기
        e.preventDefault();

        this.props.addPlayer(this.textInput.current.value);
    }

    render() {
        return (
            <form className="form" onSubmit={this.handleSubmit}>
                <input type="text" className="input" placeholder="enter a player's name"
                       ref={this.textInput}></input>
                <input type="submit" className="input" value="Add Player"></input>
            </form>
        );
    }
}