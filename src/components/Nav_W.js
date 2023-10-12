import {Link} from "react-router-dom";
function Navi(){
    return(
        <div class="navbar bg-danger px-4">
            <Link to="/" class="navbar-brand">Flipkart</Link>
            <div class="nav ms-auto">
                <Link class="nav-link" to="/">Home</Link>
                <Link class="nav-link" to="/About">About</Link>
                <Link class="nav-link" to="/ContactUs">ContactUs</Link>
                <Link class="nav-link" to="/Projects">Projects</Link>
            </div>
            <button class="btn btn-outline-primary bg-dark">Order now</button>
        </div>
    )
}
export default Navi;