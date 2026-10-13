import { Component } from 'react'; 

class Counter extends Component { 
    state = {count : 0};

    increment = () =>  {
        this.setState({ count : this.state.count + 1 }); 
    }; 

    decrement = () =>  {
        this.setState({ count : this.state.count - 1 }); 
    }


    render() { 
        return ( 
            <div> 
                <p>Count : {this.state.count}</p> 
                <button onClick={this.increment}> Incrémenter </button> 
                <br />
                <button onClick={this.decrement}> Décrémenter </button> 
            </div>  
    );
    }
 } 
export default Counter;
