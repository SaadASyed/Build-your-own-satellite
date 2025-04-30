import React from 'react';
import Lottie from 'lottie-react';
import rocket from '../assets/rocket.json'

const RocketAvatar = () => {
    return(
        <div style={styles.container}>
            <Lottie animationData={rocket} style={styles.animation} loop={true} />
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '40px',
    },
    animation: {
        width: '300px',
        height: '300px',
    },
};

export default RocketAvatar;

