 import "../../src/App.css";
 function Headd(){
    const myStyle = {
        color: "pink", backgroundColor: "red"
    }
    return(
        <div class="bg-dark text-center text-primary">  {/**After importing bootstrap in App.js we shhould give classes of BS */}
            <h1 style={{color:"red"}}>Shoppy Website</h1>   {/**Inline styling */}
            <h2 style={myStyle}>Low cost more products</h2> {/**Internal styling */}
            <p id="i1">Explore more various products</p>    {/**External styling  here that i1 is not working check once*/}
        </div>
    )
}
export default Headd;