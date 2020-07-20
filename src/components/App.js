import React, { Component } from 'react';
import Header from './Header';
import Player from './Player';

class App extends Component {

    state = {
        players: [
            {
                name: "Andrei",
                score: 0,
                id: 1
              },
              {
                name: "Treasure",
                score: 0,
                id: 2
              },
              {
                name: "Ashley",
                score: 0,
                id: 3
              },
              {
                name: "James",
                score: 0,
                id: 4
              }
        ]
    };

    handleScoreChange = (index, delta) => {
        this.setState(prevState => ({
            score: prevState.players[index].score += delta
        }));
        console.log('Index: ' + index, 'Delta: ' + delta);
    }

    handleRemovePlayer = (id) => {
        this.setState( prevState => {
            return {
                players: prevState.players.filter( p => p.id !== id )
            };
            
        });
    }

    render() {
        return (
            <div className="scoreboard">
                <Header 
                    title="Scoreboard"
                    totalPlayers={this.state.players.length} />
    
                {/* Players list  */}
                {this.state.players.map( (player, index) => 
    
                <Player 
                    score={player.score}
                    id={player.id}
                    index={index}
                    name={player.name} 
                    key={player.id.toString()}
                    removePlayer={this.handleRemovePlayer}
                    changeScore={this.handleScoreChange}
                    />
                )}
            </div>
    
        );
    }
    
}

export default App;