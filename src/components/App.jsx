import React, { Component } from 'react';


// const App = props => {
//     console.log(props.heading);
//         return(
//             <div>
//                 <h1>{props.heading}</h1>
//             </div>
//         );
// }

class App extends Component {
    state = { text: 'hello from React', 
    placeHolder: 'enter some text',
    inputValue: null,
    hasLoaded: false };

    componentDidMount(){
        this.buttonToggle();
    }

    buttonToggle = () => 
    { 
        setTimeout(() => {
            this.setState({ hasLoaded: !this.state.hasLoaded});
        }, 2000);
        //it delays for 2 sec and re-render andupdate the state
        
    }
    render(){
        return(
            <div>
                <h1>{this.props.heading}</h1>
                {
                    this.state.hasLoaded ? (
                        <div>
                        <p>{this.state.text}</p>
                        <input placeholder={this.state.placeHolder}
                         onChange={
                        (event) => {
                        this.setState({
                            inputValue: event.target.value
                        });
                             }
                        }
                        />
                        <button onClick={this.buttonToggle}>Go Back</button>
                        </div>
                    ): (
                        <div>
                        <h3>Loading....</h3>
                        <button onClick={this.buttonToggle}>Click Me</button>
                        </div>
                    )
                }
            </div>
        );
    }
}

export default App;
