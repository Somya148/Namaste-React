//This is a functional based component which is a new way of writing componenets

import { useState } from "react";

//A Functional based component is a function that return some piece of JSX.
const User = (props) => {
    const [count0] = useState(0);
    const [count1] = useState(1);
    return (
        <div className="user-card">
            <h2>Count0={count0}</h2>
            <h2>Count1={count1}</h2>
            <h2>Name : {props.name}</h2>
            <h2>Location : Dehradun</h2>
            <h2>Contact : @akshaymarch7</h2>

        </div>);
};
export default User;