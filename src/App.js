
// main app cmponent 
import logo from './logo.svg';
import './App.css';
import CrudApp from './components/curd/CrudApp.js';

function App() {

  return (

    <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className='author'>
            <p>React Project</p>
            <p>Merci4dev</p>
          </div>
        </header>

        <div className='main__container'>
          <CrudApp/>
        </div>
          
    </div>

  );
}

export default App;
