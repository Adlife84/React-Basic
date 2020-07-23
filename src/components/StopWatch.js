import React, { Component } from 'react';

class StopWatch extends Component {

    state = {
        isRunning: false, 
        elapsedTime: 0,
        previousTime: 0
    };

    componentDidMount() {
        // console.log('Hi');
        this.intervalID = setInterval(() => this.tick(), 100);
    }

    componentWillUnmount() {
        clearInterval(this.intervalID);
    }

    
    tick = () => {
        // console.log('ticking...') //chack that tick function is working
        if(this.state.isRunning){ //if this.state.isRunning is true that do bottom
            const now =  Date.now(); //make const now and passing it now data.
            this.setState( prevState => ({ //put this object into this.state every time when thick function executing
                previousTime: now,
                elapsedTime: prevState.elapsedTime + (now - this.state.previousTime)
            }));
        }
    }

    // Start/Stop button
    handleStopwatch = () => {
        this.setState(prevState => ({
            isRunning: !prevState.isRunning
        }));

        //If this.state.isRunning is false than do this
        if(!this.state.isRunning){  
            this.setState({ previousTime: Date.now()} ); 
        }
    }

    //Reset button setState elapsedTime to 0
    handleReset = () => {
        this.setState({ elapsedTime: 0 });
    }

    render(){
        const seconds = Math.floor(this.state.elapsedTime / 1000);

        return(
            <div className="stopwatch">
                <h2>Stop Watch</h2>
                <span className="stopwatch-time">
                    {seconds}
                </span>
                <button onClick={this.handleStopwatch}>{ this.state.isRunning ? 'Stop' : 'Start' }</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        ); 
    }
}

export default StopWatch;