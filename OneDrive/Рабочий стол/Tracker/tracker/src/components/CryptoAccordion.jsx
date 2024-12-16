import React, { useState } from 'react';
import '../styles/CryptoAccordion.css';

function CryptoAccordion({ crypto }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="crypto-accordion">
      <div className="crypto-header" onClick={() => setExpanded(!expanded)}>
        <p>{crypto.symbol} - {crypto.name}</p>
      </div>
      {expanded && (
        <div className="crypto-details">
          <p>Price USD: ${crypto.price_usd}</p>
          <p>Price BTC: {crypto.price_btc}</p>
          <p>Market Cap USD: 
            <span className="tooltip">
              {crypto.market_cap_usd}
              <span className="tooltip-text">
                The market capitalization of a cryptocurrency is calculated by multiplying the number of coins in circulation by the current price.
              </span>
            </span>
          </p>
          <p className={crypto.percent_change_24h > 0 ? 'positive' : 'negative'}>
            Percent Change 24H: {crypto.percent_change_24h}%
          </p>
        </div>
      )}
    </div>
  );
}

export default CryptoAccordion;