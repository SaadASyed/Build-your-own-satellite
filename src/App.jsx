import './App.css';
import RocketAvatar from './components/RocketAvatar';
import LessonSpeech from './components/LessonSpeech';
import WebcamFeed from './components/WebcamFeed';
import SatelliteBuilder from './components/SatelliteBuilder';
import Quiz from './components/quiz';
import SatellitePuzzle from './components/SatellitePuzzle';

function App() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}> 🚀 Build Your Own Satellite</h1>
      <div style={{ height: '300px' }} />
      <RocketAvatar />
      <p style={styles.paragraph}>
        Welcome, young space explorer! Today you will learn how to build your very own Satellite
      </p>
      <LessonSpeech />
      <WebcamFeed />
      <SatelliteBuilder />
      <SatellitePuzzle />
      <Quiz />
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
    padding: '20px',
    fontFamily: 'Arial, sans-serif'
  },
  heading: {
    fontSize: '2.5rem',
    color: '#ffffff'
  },
  paragraph: {
    fontSize: '1.2rem',
    marginBottom: '30px',
    color: '#ffffff'
  },
  button: {
    fontSize: '1.1rem',
    padding: '10px 20px',
    backgroundColor: '#0066ff',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer'
  }
};

export default App;