import React from 'react';


class Counter extends React.Component {

    state = {
        score: 0
    };

    incrementScore() {
        // console.log('Hi from inside incrementScore!');
        this.setState( prevState => ({
            score: prevState.score + 1
        }));
    }

    decrementScore() {
        // console.log('Hi from inside decremaasdentScore!');
        this.setState( prevState => ({
            score: prevState.score - 1 
        }));
    }


    render() {
        return (
            <div className="counter">
                <button className="counter-action decrement" onClick={ () => this.decrementScore() }> - </button>
                <span className="counter-score">{ this.state.score }</span>
                <button className="counter-action decrement" onClick={ () => this.incrementScore() }> + </button>
            </div>
        );
    } 
}

export default Counter;