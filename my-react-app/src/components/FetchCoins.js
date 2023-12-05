import React, {useState, useEffect} from 'react';
import { Link, Route, Routes, useParams, useMatch } from 'react-router-dom';
import '../fetchCoins.css';


function FetchCoins() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      // Fetch data from an API
      fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100')
        .then((response) => response.json())
        .then((data) => {
          setData(data);
          setLoading(false);
          // console.log(JSON.stringify(data));
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
          setLoading(false);
        });
    }, []); // The empty array means this effect runs once, similar to componentDidMount
  
    // const { path, url } = useMatch();

    return (
      <div>
        <h2>Data from API</h2>
        {loading ? (
          <p>Loading...</p>
        ) : (
        <><table>
          <thead>
            <tr>
              <th>&nbsp;</th>
              <th>Rank</th>
              <th>Name</th>
              <th>Symbol</th>
              <th>Price</th>
              <th>24h Change</th>
              <th>24h Volume</th>
              <th>Mkt Cap</th>
            </tr>
          </thead>
          <tbody>
            {data.map((coin) => (
              <tr key={coin.id}>
                <td>
                  <img src={coin.image} alt={coin.name} style={{ width: '32px', height: '32px' }} />
                </td>
                <td>{coin.market_cap_rank}</td>
                <td>
                  <Link to={`/coin/${coin.id}`} style={{ textDecoration: 'underline' }}>
                    {coin.name}
                  </Link>
                </td>
                <td>{coin.symbol}</td>
                <td>${coin.current_price}</td>
                <td>{coin.price_change_percentage_24h}%</td>
                <td>${coin.total_volume}</td>
                <td>${coin.market_cap}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <Routes>
          {/* <Route path={"/coin/:coinId"} element={<CoinDetails />}>
            // <CoinDetails />
          </Route> */}
        </Routes></>
          
        )}
      </div>
    );
  }
  
  export default FetchCoins;