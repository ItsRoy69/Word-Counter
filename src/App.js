import './App.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';

function App() {
  return (
    <>           
      <Router>
        <Navbar about="About"/>
          <div className="container">
            <Routes>          
              <Route path="/" element={<TextForm heading="Enter text to analyze"/>} />             
              <Route path="/about" element={<About/>} />
            </Routes> 
          </div>
      </Router>      
    </>
  );
}

export default App;
