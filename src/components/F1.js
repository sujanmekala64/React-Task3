import Axios from "axios";
import {useEffect, useState} from "react";
function F1(){
    //HTTP request we need to place inside the lifecycle methds
    //But as we are working with the functional components there is lifecycle methods
    //INstead we called the concept of hooks which helps us to handle the HTTPS request
    //useEffect() is used to handle side effects
    const [data,setData] = useState([]);
    useEffect(()=>{
        Axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res)=>{
            if(res.status===200){
                setData(res.data)  //Not printing entire thing in url print only res data in that url
            }
            else{
               Promise.reject();
            }
        })
        .catch((err)=>alert(err));
    },[])
    const ListNames = () => {
        return data.map((val)=>{
                return <h1>{val.name}</h1>
        })  
    }
    return(
        <div>
            <h1>Hello</h1>
            {ListNames}
        </div>
    )
}
export default F1;