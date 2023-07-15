import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import { ContactForm } from "./components/ContactForm";
import { Homepage } from "./layouts/Homepage";
import { Landing } from "./layouts/Landing";
import { About } from "./layouts/About";
function App() {
  return (
    <Router>     
    <Routes>
             <Route
              path="/"
               element={<Landing />}
            />
            <Route
              path="/Home"
               element={<Homepage />}
            />
             <Route
              path="/About"
               element={<About/>}
            />            
             <Route
              path="*"
               element={<Homepage />}
            />

  </Routes>            
</Router>
  );
}

export default App;
