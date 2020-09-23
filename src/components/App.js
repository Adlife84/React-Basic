import React, { Component } from 'react';
import Header from './Header';
import Player from './Player';
import AddPlayerForm from './AddPlayerForm';


class App extends Component {

    state = {
        players: [
            {
                name: "Andrei",
                score: 0,
                id: 1
            },
            {
                name: "Marta",
                score: 0,
                id: 2
            },
            {
                name: "Alex",
                score: 0,
                id: 3
            },
            {
                name: "Treasure",
                score: 0,
                id: 4
            }
        ]
    };

    idPlayer = this.state.players.length;

    handleAddPlayer = (name) => {
        if (name === '') {
            console.log('empty')
        } else {
            let newPlayer = {
                name: name,
                score: 0,
                id: this.idPlayer += 1
            };

            this.setState(prevState => ({
                players: prevState.players.concat(newPlayer)
            }));
        }
    }

    handleScoreChange = (index, delta) => {
        this.setState(prevState => ({
            score: prevState.players[index].score += delta
        }));
        // console.log('Index: ' + index, 'Delta: ' + delta); //Check the index of player
    }

    handleRemovePlayer = (id) => {
        this.setState(prevState => {
            return {
                players: prevState.players.filter(p => p.id !== id)
            };

        });
    }

    getHighScore = () => {
        const scores = this.state.players.map(player => player.score);
        const highScore = Math.max(...scores);
        console.log(scores, highScore);
        if (highScore) {
            return highScore;
        }
        return null;
    }

    render() {
        const highScore = this.getHighScore();
         return (
            <div className="scoreboard">

                <Header
                    title="Scoreboard"
                    players={this.state.players}
                />

                {/* Players list  */}
                {this.state.players.map((player, index) =>

                    <Player
                        score={player.score}
                        id={player.id}
                        index={index}
                        name={player.name}
                        key={player.id.toString()}
                        removePlayer={this.handleRemovePlayer}
                        changeScore={this.handleScoreChange}
                        isHighScore={highScore === player.score}
                    />
                )}

                <AddPlayerForm addPlayer={this.handleAddPlayer} />
            </div>

        );
    }

}

export default App;