import React from 'react';
import type { FeatureType } from '../types';
import { useAuth } from '../AuthContext';
import './Sidebar.css';

interface SidebarProps {
  selectedFeature: FeatureType;
  onFeatureSelect: (feature: FeatureType) => void;
  onLoginClick: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ selectedFeature, onFeatureSelect, onLoginClick }) => {
  const { user, logout } = useAuth();

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>Features</h2>
        {user ? (
          <div className="user-info">
            <span className="username">{user.username}</span>
            <button onClick={logout} className="logout-btn">
              Logout
            </button>
          </div>
        ) : (
          <button onClick={onLoginClick} className="login-btn">
            Login
          </button>
        )}
      </div>

      <nav className="sidebar-nav">
        <h3>Public</h3>
        <button
          className={`nav-item ${selectedFeature === 'meeting-calculator' ? 'active' : ''}`}
          onClick={() => onFeatureSelect('meeting-calculator')}
        >
          Meeting Cost Calculator
        </button>

        <h3>Private</h3>
        <button
          className={`nav-item ${selectedFeature === 'aws-checker' ? 'active' : ''} ${!user ? 'disabled' : ''}`}
          onClick={() => user && onFeatureSelect('aws-checker')}
          disabled={!user}
        >
          AWS Instance Checker
          {!user && <span className="lock-icon"> 🔒</span>}
        </button>
      </nav>
    </div>
  );
};

export default Sidebar;
