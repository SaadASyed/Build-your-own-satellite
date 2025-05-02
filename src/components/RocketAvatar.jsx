import React, { useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import rocket from '../assets/rocket.json';

const RocketAvatar = () => {
  const [scrollOffset, setScrollOffset] = useState(0);
  const [scrolledDown, setScrolledDown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrollOffset(Math.min(y / 3, 200));
      setScrolledDown(y > 20); // if user scrolls down even a bit, move left
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const containerStyle = {
    position: 'fixed',
    top: '180px',
    left: scrolledDown ? '35px' : '50%',
    transform: `translateX(${scrolledDown ? '0' : '-50%'}) translateY(${scrollOffset}px)`,
    transition: 'transform 0.4s ease-out, left 0.4s ease-out',
    zIndex: 1000,
  };

  return (
    <div style={containerStyle}>
      <Lottie animationData={rocket} style={styles.animation} loop={true} />
    </div>
  );
};

const styles = {
  animation: {
    width: '300px',
    height: '300px',
  },
};

export default RocketAvatar;
