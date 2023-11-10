// CoinDetails.js
import React, { useState, useEffect } from 'react';

function CoinDetails({ coinId }) {
  const [coinDetails, setCoinDetails] = useState({});
  const [loading, setLoading] = useState(true);

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
          <p>Description: {coinDetails.description?.en || 'N/A'}</p>
          <p>Market Cap: ${coinDetails.market_data?.marketcap?.usd || 'N/A'}</p>
          {/* Add more details as needed */}
        </div>
      )}
    </div>
  );
}

export default CoinDetails;
