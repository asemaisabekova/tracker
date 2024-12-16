import React, { useState, useEffect } from 'react';
import CryptoList from '../components/CryptoList';
import SearchBar from '../components/SearchBar';
import '../styles/Main.css';

function Main() {
  const [cryptoData, setCryptoData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchResults, setSearchResults] = useState([]);

  const fetchCryptoData = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://api.coinlore.net/api/tickers/');
      const data = await response.json();
      setCryptoData(data.data);
      setSearchResults(data.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCryptoData();
  }, []);

  const handleSearch = (query) => {
    const results = cryptoData.filter(
      (crypto) =>
        crypto.name.toLowerCase().includes(query.toLowerCase()) ||
        crypto.symbol.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <div className="main">
      <div className="top-bar">
        <button onClick={fetchCryptoData} className="update-button">Update</button>
        <SearchBar onSearch={handleSearch} />
      </div>
      {loading ? <p>Loading...</p> : <CryptoList cryptoData={searchResults} />}
    </div>
  );
}

export default Main;