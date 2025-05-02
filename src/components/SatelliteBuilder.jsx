import React, { useState } from 'react';

const SatelliteBuilder = () => {
  const [placedParts, setPlacedParts] = useState({
    solarPanel: false,
    antenna: false,
    thruster: false,
    wing: false,
    mainProcessor: false
  });

  const handlePlacePart = (partName) => {
    setPlacedParts((prev) => ({
      ...prev,
      [partName]: true
    }));
  };

  const allPartsPlaced = Object.values(placedParts).every(Boolean);

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>🛠️ Build Your Satellite</h2>
      <p style={styles.instructions}>
        Click each part to attach it to your satellite!
      </p>

      <div style={styles.partsPanel}>
        {!placedParts.solarPanel && (
          <button onClick={() => handlePlacePart('solarPanel')} style={styles.partButton}>
            ☀️ Solar Panel
          </button>
        )}
        {!placedParts.antenna && (
          <button onClick={() => handlePlacePart('antenna')} style={styles.partButton}>
            📡 Antenna
          </button>
        )}
        {!placedParts.thruster && (
          <button onClick={() => handlePlacePart('thruster')} style={styles.partButton}>
            🔥 Mini Thruster
          </button>
        )}
        {!placedParts.wing && (
          <button onClick={() => handlePlacePart('wing')} style={styles.partButton}>
            🪶 Wing
          </button>
        )}
        {!placedParts.mainProcessor && (
            <button onClick={() => handlePlacePart('mainProcessor')} style={styles.partButton}>
            💻 Main Processor
            </button>
        )}
      </div>

      <div style={styles.satelliteFrame}>
        <p>Satellite Frame:</p>
        <ul style={styles.partsList}>
          <li>🔲 Solar Panel: {placedParts.solarPanel ? '✅ Placed' : '❌ Missing'}</li>
          <li>🔲 Antenna: {placedParts.antenna ? '✅ Placed' : '❌ Missing'}</li>
          <li>🔲 Mini Thruster: {placedParts.thruster ? '✅ Placed' : '❌ Missing'}</li>
          <li>🔲 Wing: {placedParts.wing ? '✅ Placed' : '❌ Missing'}</li>
          <li>🔲 Main Processor {placedParts.mainProcessor ? '✅ Placed' : '❌ Missing'} </li>
        </ul>
      </div>

      {allPartsPlaced && (
        <div style={styles.successBox}>
          🛰️ Satellite Assembled! Great work, astronaut!
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    marginTop: '40px',
    padding: '20px',
    textAlign: 'center'
  },
  heading: {
    fontSize: '1.8rem',
    marginBottom: '10px',
    color: '#ffffff'
  },
  instructions: {
    fontSize: '1.1rem',
    marginBottom: '20px',
    color: '#ffffff'
  },
  partsPanel: {
    marginBottom: '30px'
  },
  partButton: {
    margin: '5px',
    padding: '10px 15px',
    fontSize: '1rem',
    backgroundColor: '#0099cc',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer'
  },
  satelliteFrame: {
    border: '2px dashed #aaa',
    padding: '15px',
    borderRadius: '10px',
    backgroundColor: '#f5f5f5'
  },
  partsList: {
    listStyleType: 'none',
    padding: 0,
    fontSize: '1.1rem'
  },
  successBox: {
    marginTop: '20px',
    padding: '10px',
    backgroundColor: '#d1ffd6',
    border: '2px solid green',
    borderRadius: '8px',
    fontSize: '1.2rem'
  }
};

export default SatelliteBuilder;
