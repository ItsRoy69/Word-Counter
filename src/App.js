import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';

function App() {
  return (
    <>      
      <Navbar about="About"/>
      <div className="container">
        {/* <TextForm heading="Enter text to analyze"/>    */}
        <About/>      
      </div>   
        
    </>
  );
}

export default App;
