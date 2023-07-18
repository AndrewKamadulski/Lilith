import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import { Home } from "./layouts/Home";
import { Landing } from "./layouts/Landing";
import { About } from "./layouts/About";
import { GalleriesPage } from './layouts/GalleriesPage';
import { Contact } from './layouts/Contact';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { SingleGalleryPage } from './layouts/SingleGalleryPage';
import { useState } from 'react';
function App() {

  const [currentGallery, setCurrentGallery] = useState("");  
 
  return (
    <>    
    <Router> 
    <Navbar />    
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
               element={<GalleriesPage currentGallery={currentGallery} setCurrentGallery = {setCurrentGallery}/>}

            />     
            <Route
                path="/Galleries/:currentGallery"
                element={<SingleGalleryPage/>}
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
