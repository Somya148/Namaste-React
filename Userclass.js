import React from 'react';
//This is a class based component which is a traditional way of writing components.

// A class based component is a class which extends React.Component and it has a render method that return some piece of JSX.
//reactcomponent is a class which we have to import from react . this class has a special funtion called render .

// **Loading a class based component maens-: creating a instance of a class**
class Userclass extends React.Component {
    constructor(props) {
        super(props);

        //we do not make another state for another value , this state is a large object which contains all the state variables

        //this is how we write multiple state variable in class hook:-
        this.state = {
            count: 0,
            count1: 1,
        };
        console.log("child constructor")
    }


    componentDidMount() {
        console.log("child mounted");
    }


    render() {
        console.log("child render");
        return (<div className="user-card">

            <h2>Count: {this.state.count}</h2>
            <button onClick={() => {

                //this is how we make changes in our state variable in class component
                //NEVER EVER UPDATE DIRECTLY IN THE STATE VARIABLE
                //always use this.set.State
                //just like we use set in function component for updating value 
                // here we use setState
                this.setState({
                    count: this.state.count + 1,
                })

            }}
            >Count Increase</button>
            <h2>Name : {this.props.name}</h2>
            <h2>Location : Dehradun</h2>
            <h2>Contact : @akshaymarch7</h2>

        </div>)


    };

};
export default Userclass;