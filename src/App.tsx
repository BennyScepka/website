import { useState, useEffect } from 'react';
import { useAuth } from './AuthContext';
import Sidebar from './components/Sidebar';
import Login from './components/Login';
import MeetingCalculator from './components/MeetingCalculator';
import AWSChecker from './components/AWSChecker';
import type { FeatureType } from './types';
import './App.css';

function App() {
  const { user } = useAuth();
  const [selectedFeature, setSelectedFeature] = useState<FeatureType>('meeting-calculator');
  const [showLogin, setShowLogin] = useState(false);
  const [pendingFeature, setPendingFeature] = useState<FeatureType | null>(null);

  // When user logs in, navigate to pending feature if any
  useEffect(() => {
    if (user && pendingFeature) {
      setSelectedFeature(pendingFeature);
      setPendingFeature(null);
      setShowLogin(false);
    }
  }, [user, pendingFeature]);

  const handleFeatureSelect = (feature: FeatureType) => {
    // If selecting a private feature and not logged in, show login
    if (feature === 'aws-checker' && !user) {
      setPendingFeature(feature);
      setShowLogin(true);
      return;
    }
    setSelectedFeature(feature);
    setShowLogin(false);
  };

  const handleLoginClick = () => {
    setShowLogin(true);
  };

  const renderFeature = () => {
    if (showLogin) {
      return <Login />;
    }

    switch (selectedFeature) {
      case 'meeting-calculator':
        return <MeetingCalculator />;
      case 'aws-checker':
        return user ? <AWSChecker /> : <Login />;
      default:
        return <MeetingCalculator />;
    }
  };

  return (
    <div className="app">
      <Sidebar 
        selectedFeature={selectedFeature} 
        onFeatureSelect={handleFeatureSelect}
        onLoginClick={handleLoginClick}
      />
      <main className="main-content">
        {renderFeature()}
      </main>
    </div>
  );
}

export default App;
