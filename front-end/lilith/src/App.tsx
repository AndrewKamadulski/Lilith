import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import { Home } from "./layouts/Home";
import { Landing } from "./layouts/Landing";
import { About } from "./layouts/About";
import { GalleriesPage } from './layouts/Galleries';
import { Contact } from './layouts/Contact';
import { Navbar2 } from './components/Navbar2';
import { Footer } from './components/Footer';
function App() {
  return (
    <>    
    <Router> 
    <Navbar2 />    
    <Routes>
             <Route
              path="/"
               element={<Landing />}
            />
            <Route
              path="/Home"
               element={<Home />}
            />
             <Route
              path="/About"
               element={<About/>}
            />      
              <Route
              path="/Galleries"
               element={<GalleriesPage/>}
            />     
               <Route
              path="/Contact"
               element={<Contact/>}
            />     
             <Route
              path="*"
               element={<Home />}
            />
            

  </Routes>  
  <Footer />          
</Router>
</> 
  );
}

export default App;
