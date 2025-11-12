import React, { useState } from 'react';
import './AWSChecker.css';

interface CheckResult {
  instanceId: string;
  status: 'available' | 'unavailable' | 'checking';
  region: string;
  timestamp: string;
}

const AWSChecker: React.FC = () => {
  const [instanceId, setInstanceId] = useState('');
  const [region, setRegion] = useState('us-east-1');
  const [result, setResult] = useState<CheckResult | null>(null);
  const [loading, setLoading] = useState(false);

  const regions = [
    'us-east-1',
    'us-west-1',
    'us-west-2',
    'eu-west-1',
    'eu-central-1',
    'ap-southeast-1',
    'ap-northeast-1',
  ];

  const handleCheck = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!instanceId) {
      return;
    }

    setLoading(true);
    setResult({
      instanceId,
      region,
      status: 'checking',
      timestamp: new Date().toISOString(),
    });

    // Simulate API call
    setTimeout(() => {
      // Mock response - randomly determine availability
      const isAvailable = Math.random() > 0.3;
      
      setResult({
        instanceId,
        region,
        status: isAvailable ? 'available' : 'unavailable',
        timestamp: new Date().toISOString(),
      });
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="feature-container">
      <h1>AWS Instance Availability Checker</h1>
      <p className="feature-description">
        Check if a specific AWS EC2 instance is available in your selected region.
        This feature requires authentication to access.
      </p>

      <div className="checker-card">
        <form onSubmit={handleCheck}>
          <div className="form-group">
            <label htmlFor="instanceId">Instance ID</label>
            <input
              type="text"
              id="instanceId"
              value={instanceId}
              onChange={(e) => setInstanceId(e.target.value)}
              placeholder="e.g., i-1234567890abcdef0"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="region">AWS Region</label>
            <select
              id="region"
              value={region}
              onChange={(e) => setRegion(e.target.value)}
            >
              {regions.map((r) => (
                <option key={r} value={r}>
                  {r}
                </option>
              ))}
            </select>
          </div>

          <button type="submit" className="check-btn" disabled={loading}>
            {loading ? 'Checking...' : 'Check Availability'}
          </button>
        </form>

        {result && (
          <div className={`result-card ${result.status}`}>
            <h3>Result</h3>
            <div className="result-details">
              <div className="result-row">
                <span className="label">Instance ID:</span>
                <span className="value">{result.instanceId}</span>
              </div>
              <div className="result-row">
                <span className="label">Region:</span>
                <span className="value">{result.region}</span>
              </div>
              <div className="result-row">
                <span className="label">Status:</span>
                <span className={`status-badge ${result.status}`}>
                  {result.status === 'checking' && '⏳ Checking...'}
                  {result.status === 'available' && '✅ Available'}
                  {result.status === 'unavailable' && '❌ Unavailable'}
                </span>
              </div>
              <div className="result-row">
                <span className="label">Checked at:</span>
                <span className="value">
                  {new Date(result.timestamp).toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        )}

        <div className="info-box">
          <strong>Note:</strong> This is a demo implementation. In production, this would 
          connect to AWS API to check real instance availability using proper credentials 
          and IAM roles.
        </div>
      </div>
    </div>
  );
};

export default AWSChecker;
