import logo from './logo.svg';
import './App.css';
const firstname = 'Codeyoung';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
            <h3>Let's now learn about Javascript XML: JSX</h3>
            <ul>
              <li>JSX stands for JavaScript XML.</li>
              <li>JSX allows us to write HTML in React.</li>
              <li>JSX makes it easier to write and add HTML in React.</li>
            </ul>

            <h3>Simple Example of JSX</h3>                                
            <p>Hello, I am {firstname}</p>
      
      </header>
    </div>   
  );
}

export default App;