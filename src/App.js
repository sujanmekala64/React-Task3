import './App.css';
import Headd from "./components/Headd_W";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {Header,Footer} from "./components/Header";
import Navi from "./components/Nav_W"
import {HashRouter, Routes, Route} from "react-router-dom";
import {Home, About, ContactUs, Projects} from "./components/main";
import F1 from "./components/F1"
import Nav from "./components/navg"
import C1 from "./components/prop"
import C2 from "./components/c2"
import C4 from "./components/c4"
import Foote from "./components/Foot_W"

function App() {
  return (
    <div>
      <center>
        <header>
          <Header name="Sujan">
          {/* <h1>Hello world</h1> */}
          </Header>
          <Nav age="20" />
          <Nav age="30" />
          <Nav age="40" />
          <C1 gift="watch">
            
          </C1>   
          <C2/>
          <HashRouter>
          <Headd>

          </Headd>
          <Navi>
            

          </Navi>

          
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/About" element={<About />} />
              <Route path="/ContactUs" element={<ContactUs />} />
              <Route path="/Projects" element={<Projects />} />
            </Routes>
            <Foote>
 
          </Foote>
          </HashRouter>

        <F1>

        </F1>
          
          <Footer brand="instagram">
          {/* <h4>This is MEKALA SUJAN</h4> */}
          </Footer>
          <C4 />
        </header>
      </center>
    </div>
  )
}
export default App;
