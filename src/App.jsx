import './App.css';

function App() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}> 🚀 Build Your Own Satellite</h1>
      <p style={styles.paragraph}>
        Welcome, young space explorer! Today you will learn how to build your very own Satellite
      </p>
      <button style={styles.button} onClick={() => alert('Lesson will start soon!')}>
        Start Lesson
      </button>
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
    color: '#333'
  },
  paragraph: {
    fontSize: '1.2rem',
    marginBottom: '30px',
    color: '#555'
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