import logo from './logo.svg';
import './App.css';

function App() {
  console.log(process.env.NODE_ENV);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          my first cicd project on github
        </p>
      </header>
    </div>
  );
}

export default App;
