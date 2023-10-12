import {Component} from "react";
import C3 from "./c3"

class C2 extends Component{
    constructor(){
        super();
        console.log("Iam constructor");
        this.state = {brand:"nike",toggle:true}
    }
    static getDerivedStateFromProps(){
        console.log("Iam getDerivedStateFromProps method");
        return null;
    }
    componentDidMount(){
        console.log("Iam componentDidMount method");
    }
    shouldComponentUpdate(){
        console.log("Iam shouldComponentUpdate method");
        return true; //this is by default true if we define it or not; if u give false the update will stop
    }
    getSnapshotBeforeUpdate(){
        console.log("Iam getSnapShotBeforeUpdate");
        return null;
    }
    componentDidUpdate(){
        console.log("Iam componentDidUpdate");
    }

    render(){
        console.log("Iam render method");
        return(
            <div>
                <h1>Lifecycle methods</h1>
                <p>{this.state.brand}</p>
                <button onClick={()=>{this.setState({brand:"adidas"})}}>click</button>  
                {
                    (this.state.toggle)?<C3/>:null
                }
                <button onClick={()=>{this.setState({toggle:false})}}>Unmount</button>
            </div>
        )
    }
}
export default C2;
//for updatring that nike to adidas it should be gone through those 5 process