import logo from "./fk.png";
function Foote(){
    return(
        <div class="row bg-info">
            <div class="col-sm-12 col-md-6 col-lg-3">
                <h1>Visit us on</h1>
                <ul>
                    <li><a href="https://www.instagram.com">Instagram</a></li>
                    <li><a href="https://www.facebook.com">Facebook</a></li>
                    <li><a href="https://www.whatsapp.com">Whatsapp</a></li>
                    <li><a href="https://www.twitter.com">Twitter</a></li>
                </ul>
            </div>
            <div class="col-sm-12 col-md-6 col-lg-3">
            <h1>Famous blogs</h1>
                <ul>
                    <li><a href="#">Blog1</a></li>
                    <li><a href="#">Blog2</a></li>
                    <li><a href="#">Blog3</a></li>
                    <li><a href="#">Blog4</a></li>
                </ul>
            </div>
            <div class="col-sm-12 col-md-6 col-lg-3">
            <h1>Topics</h1>
                <p>subtopics</p>
                <p>subtopics</p>
                <p>subtopics</p>
                <p>subtopics</p>
            </div>
            <div class="col-sm-12 col-md-6 col-lg-3">
                <a href="https://www.flipkart.com"> 
                    <img src={logo} height="200" width="200" alt=""></img>   {/**When you click on image it will take u to website */}
                </a>
            </div>
            <div class="col-sm-12 col-md-6 col-lg-3">
                
            </div>

        </div>
    )
}
export default Foote;