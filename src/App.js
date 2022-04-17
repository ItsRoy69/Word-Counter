import './App.css';

let name = 'World';
function App() {
  return (
    <>
      <nav>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </nav>
      <img src="" alt="" />
      <div className="container">
        <h1>Hello {name}</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
      </div>
    </>
  );
}

export default App;
