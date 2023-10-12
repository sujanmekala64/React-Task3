export function Header(props){   //props is object here we sent sujan so it willl be name: sujan
    return(
        <div>
            <h3>Header:{props.name} </h3>   
        </div>
    )
}  //In the header we use props.name curly braces because in html code ur giving js code to represent the js code we use {}
export function Footer(props){
    return(
        <div>
           <h4>Footer:{props.brand}</h4>   
        </div>
    )
}
//since the header and footer are here they will be displayed in the app.js since it imported this file
// export default Header;    //By using default only 1 will exported for one file