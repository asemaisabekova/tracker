import React from 'react';
import CryptoAccordion from './CryptoAccordion';
import '../styles/CryptoList.css';

function CryptoList({ cryptoData }) {
  return (
    <div className="crypto-list">
      {cryptoData.map((crypto) => (
        <CryptoAccordion key={crypto.id} crypto={crypto} />
      ))}
    </div>
  );
}

export default CryptoList;