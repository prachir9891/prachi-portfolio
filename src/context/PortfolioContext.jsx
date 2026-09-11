import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// Configure Axios to use the live backend URL if it is provided by Vercel environment variables.
if (import.meta.env.VITE_API_URL) {
  axios.defaults.baseURL = import.meta.env.VITE_API_URL;
}

export const PortfolioContext = createContext();

export const PortfolioProvider = ({ children }) => {
  const [portfolioData, setPortfolioData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPortfolio = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get('/api/portfolio'); // Will proxy to backend or use full URL if set
      setPortfolioData(res.data);
      setError(null);
    } catch (err) {
      console.error('Error fetching portfolio data', err);
      setError('Failed to fetch portfolio data.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPortfolio();
  }, []);

  return (
    <PortfolioContext.Provider value={{ portfolioData, isLoading, error, fetchPortfolio }}>
      {children}
    </PortfolioContext.Provider>
  );
};
