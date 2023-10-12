import { Component } from "react";
class C1 extends Component{
    constructor(props){
        super(props);
        this.state = {role:"Engineer",name:"",bool:true}
    }
    handleClick = () => {
        this.setState({
            role:"Doctor"
        })
    }
    handleChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    handleSignal = () => {
            this.setState({
                bool: !this.state.bool
            })
    }
    render(){
        return(
            <div>
                <h1>props value is: {this.props.gift}</h1>
                <h1>state value is: {this.state.role}</h1>
                <button onClick={this.handleClick}>Change state</button> <br/>
                <input placeholder="Enter your name" onChange={this.handleChange}></input> 
                <p>Your name is:{this.state.name}</p> 
                <button onClick={this.handleSignal}>Signal</button>
                {(this.state.bool)?<h1 style={{color: "green"}}>Go</h1>:<h1 style={{color: "red"}}>Stop</h1>}
            </div>
        )
    }
}
/*when we click onClick button this it will change role of engineer to doctor 
 state is mutable and the props are immutable */
 /**semicolons are strictly restricted in the code*/
export default C1;