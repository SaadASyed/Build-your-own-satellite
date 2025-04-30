import React, { useRef, useEffect } from 'react';

const WebcamFeed = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const startWebcam = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error('Webcam access denied or error:', error);
      }
    };

    startWebcam();
  }, []);

  return (
    <div style={styles.container}>
      <h3 style={styles.label}>🛰️ Mission Control: Live Video Feed</h3>
      <video ref={videoRef} autoPlay playsInline style={styles.video} />
    </div>
  );
};

const styles = {
  container: {
    marginTop: '40px',
    textAlign: 'center',
  },
  label: {
    fontSize: '1.1rem',
    marginBottom: '10px',
    color: '#333',
  },
  video: {
    width: '320px',
    height: '240px',
    border: '3px solid #0066ff',
    borderRadius: '12px',
  },
};

export default WebcamFeed;
