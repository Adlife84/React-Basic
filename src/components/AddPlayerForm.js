import React, {Component} from 'react';

class AddPlayerForm extends Component {
    state = {
        value: ''
    };

    handleValueChange = (e) => {
        this.setState({ value: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addPlayer(this.state.value);
        this.setState({ value: '' }); //Reset input after added it to state
    }

    render() {
        
        return(
            <form onSubmit={this.handleSubmit}>
                <input 
                 type="text"
                 value={this.state.value}
                 onChange={this.handleValueChange}
                 placeholder="Enter a players name"
                 />

                 <input 
                 type="submit"
                 value="Add player"
                 />
            </form>

        );
    }
}

export default AddPlayerForm;



// Use refs inside a functional component:

// const AddPlayerForm = ({ addPlayer }) => {

//   let playerInput = React.createRef();
//   let handleSubmit = (e) => {
//     e.preventDefault();
//     addPlayer(playerInput.current.value);
//     e.currentTarget.reset();
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <input 
//         type="text" 
//         ref={playerInput}
//         placeholder="Enter a player's name"
//       />

//       <input 
//         type="submit" 
//         value="Add Player" 
//       />
//     </form>
//   ); 
// }