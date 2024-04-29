import User from "./User";
import Userclass from "./Userclass";
import { Component } from "react";

class About extends Component {
    constructor(props) {
        super(props);
        console.log("Parent Constructor");
    }
    componentDidMount() {
        console.log("parent mounted");
    }

    render() {
        console.log("Parent render");
        return (
            <div>
                <h1 className="text-center text-2xl font-semibold mt-20">This is Namaste React Webseries 🙏</h1>
                {/* <User name={"Akshay (Function Prop)"} />
                <Userclass name={"Akshay (Class Prop)"} /> */}
            </div>
        );
    }
}



export default About;