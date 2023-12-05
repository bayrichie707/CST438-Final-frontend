// CoinDetails.js
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import '../CoinDetails.css';

function CoinDetails() {
  const [coinDetails, setCoinDetails] = useState({});
  const [loading, setLoading] = useState(true);

  const { coinId } = useParams();
  

  useEffect(() => {
    // Fetch detailed data for the selected coin
    fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`)
      .then((response) => response.json())
      .then((data) => {
        setCoinDetails(data);
        setLoading(false);
        console.log(JSON.stringify(data));
      })
      .catch((error) => {
        console.error('Error fetching coin details:', error);
        setLoading(false);
      });
  }, [coinId]);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h2>{coinDetails.name} ({coinDetails.symbol})</h2>
          <p className="description">Description: {coinDetails.description?.en || 'N/A'}</p>
          <p><strong>Market Cap:</strong> ${coinDetails.market_data?.market_cap?.usd || 'N/A'}</p>
          <p><strong>All Time High:</strong> ${coinDetails.market_data?.ath?.usd}</p>
          <p><strong>Homepage:</strong> <Link to={coinDetails.links?.homepage}>{coinDetails.links?.homepage}</Link></p>
          {/* Add more details as needed */}
        </div>
      )}
    </div>
  );
}

export default CoinDetails;
