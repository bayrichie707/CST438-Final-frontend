import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import CryptoList from './components/CryptoList';
import Home from './components/Home';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      <BrowserRouter>
        <div>
          <Link to="/">Home</Link>{' '}
          &nbsp;|&nbsp;&nbsp;
          <Link to="/cryptos">Cryptocurrency List</Link>{' '}
          &nbsp; |&nbsp;&nbsp;
          <Link to="/login">Login</Link>{' '}
          <Routes>
            <Route path="/" component={Home}/>
            <Route path="/cryptos" element={<CryptoList />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </BrowserRouter>
      {/* <div>
        <Login />
      </div> */}
    </div>

    

    

  );
}

export default App;
