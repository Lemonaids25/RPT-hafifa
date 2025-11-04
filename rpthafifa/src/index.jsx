import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { PartsDegreeProvider } from './contexts/PartsDegreeContext.jsx';
import { PreviewDegreeProvider } from './contexts/PreviewDegreeContext.jsx';
import { APSProvider } from './contexts/APSContext.jsx';
import HomePage from './pages/HomePage.jsx';
import ThreatsInputPage from './pages/ThreatsInputPage.jsx';
import './index.css';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const navigateToThreats = () => {
    setCurrentPage('threats');
  };

  const navigateToHome = () => {
    setCurrentPage('home');
  };

  return (
    <PartsDegreeProvider>
      <PreviewDegreeProvider>
        <APSProvider>
          {currentPage === 'home' ? (
            <HomePage onNavigateToThreats={navigateToThreats} />
          ) : (
            <ThreatsInputPage onNavigateHome={navigateToHome} />
          )}
        </APSProvider>
      </PreviewDegreeProvider>
    </PartsDegreeProvider>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
