let playersData = [
    {
        name: "Guil",
        score: 50
      },
      {
        name: "Treasure",
        score: 85
      },
      {
        name: "Ashley",
        score: 95
      },
      {
        name: "James",
        score: 80
      }
];


const Header = () => {
    return (
        <header>
            <h1>Scoreboard</h1>
            <span className="stats">Players: 1</span>
        </header>

    );
}


const Counter = (props) => {
    return (
        <div className="counter">
            <button className="counter-action decrement"> - </button>
            <span className="counter-score">{props.score}</span>
            <button className="counter-action decrement"> + </button>
        </div>
    );
}


const Player = (props) => {
    return (
        <div className="player">
            <span className="player-name">
                {props.name}
            </span>
            <Counter score={props.score}/>
        </div>
    );
}

const App = (props) => {
    return (
        <div className="scoreboard">
            <Header counterPlayers={props.initialPlayers} />

            {/* Players list  */}
            {props.initialPlayers.map( player => 

            <Player 
                name={player.name} 
                score={player.score}
                />
            )}
        </div>

    );
}





ReactDOM.render(
    <App initialPlayers={playersData} />,

    document.getElementById('root')
);
