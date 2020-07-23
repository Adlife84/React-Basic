import React, { PureComponent } from 'react';
import Counter from './Counter';

class Player extends PureComponent {
    render() {
        const {
            score,
            id,
            index,
            name,
            key,
            removePlayer,
            changeScore
        } = this.props;
        // console.log(this.props.name + ' rendered'); //show us which player
        return (
            <div className="player">
                <span className="player-name">
                <button className="remove-player" onClick={ () => removePlayer(id) } >
                x</button>
                    {name}
                </span>
                <Counter 
                    index={index}
                    score={score}
                    changeScore={changeScore}
                />
            </div>
        );
    }; 
}

export default Player;