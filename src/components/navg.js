import { Component } from "react";        //Here component module is inbuilt in react so we are importing it
class Nav extends Component{
    render(){
        return(
            <div>
                <h1>This is Naviagtion:{this.props.age}</h1> 
            </div>
        ) //for class component for giving props we shoild give this as keyword

    }
}
export default Nav;