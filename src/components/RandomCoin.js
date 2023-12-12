// RandomCoin.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RandomCoin = () => {
  const [cryptoData, setCryptoData] = useState(null);

  useEffect(() => {
    const fetchRandomCrypto = async () => {
      try {
        // Fetch the list of cryptocurrencies
        const response = await axios.get(
          'https://api.coingecko.com/api/v3/coins/markets',
          {
            params: {
              vs_currency: 'usd',
              order: 'market_cap_desc',
              per_page: 100,
              page: 1,
              sparkline: false,
            },
          }
        );

        // Randomly select a cryptocurrency from the list
        const randomIndex = Math.floor(
          Math.random() * response.data.length
        );
        const randomCryptoId = response.data[randomIndex]?.id;

        // Fetch information about the randomly selected cryptocurrency
        if (randomCryptoId) {
          const cryptoResponse = await axios.get(
            `https://api.coingecko.com/api/v3/coins/${randomCryptoId}`
          );
          setCryptoData(cryptoResponse.data);
        }
      } catch (error) {
        console.error('Error fetching crypto data:', error);
      }
    };

    fetchRandomCrypto();
  }, []);

  return (
    <div>
      <h1>Random Coin Information</h1>
      {cryptoData && (
        <div>
          <h2>{cryptoData.name} ({cryptoData.symbol})</h2>
          <p>{cryptoData.description?.en}</p>
          <p>Current Price: ${cryptoData.market_data.current_price.usd}</p>
          {/* Add more information as needed */}
        </div>
      )}
    </div>
  );
};

export default RandomCoin;
