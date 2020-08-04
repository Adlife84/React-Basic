import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Counter from './Counter';

class Player extends PureComponent {

    static propTypes = {
        changeScore: PropTypes.func,
        removePlayer: PropTypes.func,
        name: PropTypes.string.isRequired,
        score: PropTypes.number.isRequired,
        id: PropTypes.number,
        index: PropTypes.number
    }

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