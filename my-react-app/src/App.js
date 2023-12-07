import './App.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import CryptoList from './components/CryptoList';
import Home from './components/Home';
import Login from './components/Login';
import CoinDetails from './components/CoinDetails';
import NavBar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <NavBar></NavBar>
          {/* <Link to="/home">Home</Link>{' '}
          &nbsp;|&nbsp;&nbsp;
          <Link to="/cryptos">Cryptocurrency List</Link>{' '}
          &nbsp; |&nbsp;&nbsp;
          <Link to="/login">Login</Link>{' '} */}
          <Routes>
            <Route path="/home" element={<Home />}/>
            <Route path="/cryptos/*" element={<CryptoList />} />
            <Route path="/login" element={<Login />} />
            <Route path={"/coin/:coinId"} element={<CoinDetails />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>

  );
}

export default App;
