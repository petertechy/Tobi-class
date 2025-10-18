import { Component } from "react";
// const [first, setfirst] = useState(second)

class ClassReact extends Component {
    constructor(props) {
        super(props);
    }
    state = { myNumber:12 }
    // myNumber = 12
    increase=()=>{
        // console.log("hiiiiii")
        // this.myNumber = 60
        // console.log(this.myNumber)
        console.log(this.state.myNumber)
        this.setState({myNumber:this.state.myNumber+1})
    }
    componentDidMount(){
        console.log("I have mounted")
    }
    componentDidUpdate(){
        console.log("Component has updated")
    }
    componentWillUnmount(){
        console.log("component has unmounted")
    }
    render() { 
        console.log(this.props)
        return ( 
            <>
                <h1>Hello World {this.state.myNumber}</h1>
                <h1>{this.props.title}</h1>
                <button onClick={this.increase}>Increase</button>
            </>
         );
    }
}
 
export default ClassReact;