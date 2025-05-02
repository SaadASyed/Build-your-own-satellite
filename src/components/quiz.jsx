import React, { useState } from 'react';

const savedProgress = JSON.parse(localStorage.getItem('spaceyProgress'));

const questions = [
  {
    question: 'What do satellites use to get power?',
    options: ['Batteries', 'Solar Panels', 'Engines'],
    answer: 'Solar Panels'
  },
  {
    question: 'What is the purpose of an antenna on a satellite?',
    options: ['Make it spin', 'Receive signals', 'Launch it'],
    answer: 'Receive signals'
  },
  {
    question: 'Where do satellites orbit?',
    options: ['The Moon', 'The Sun', 'The Earth'],
    answer: 'The Earth'
  },
  {
    question: 'What helps control the position of a satellite in space?',
    options: ['Parachutes', 'Mini Thrusters', 'Wings'],
    answer: 'Mini Thrusters'
  },
  {
    question: 'Which part helps balance a satellite?',
    options: ['Wing', 'Camera', 'Antenna'],
    answer: 'Wing'
  }
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (option) => {
    const isCorrect = option === questions[currentQuestion].answer;
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
    if (nextQuestion >= questions.length) {
        const resultData = {
          score: isCorrect ? score + 1 : score,
          badge: getBadge(isCorrect ? score + 1 : score),
          completed: true
        };
        localStorage.setItem('spaceyProgress', JSON.stringify(resultData));
        setShowResult(true);
      }      
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
  };

  const getFeedback = (score) => {
    if (score === 5) return '🌟 Outstanding work, Commander!';
    if (score >= 3) return '🚀 Great job, Space Explorer!';
    if (score >= 1) return '🛰️ You’re learning fast!';
    return '🔄 Let’s try again!';
  };
  
  const getBadge = (score) => {
    if (score === 5) return '🏆 Gold Badge';
    if (score >= 3) return '🥈 Silver Badge';
    if (score >= 1) return '🥉 Bronze Badge';
    return '🧪 Retry Badge';
  };  

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>🧠 Space Quiz</h2>
      {savedProgress && savedProgress.completed && (
        <div style={styles.savedBox}>
          🌟 Welcome back, Commander! You previously scored {savedProgress.score} and earned a {savedProgress.badge}.
        </div>
      )}
      {!showResult ? (
        <div>
          <p style={styles.question}>
            {questions[currentQuestion].question}
          </p>
          <div style={styles.optionsContainer}>
            {questions[currentQuestion].options.map((option, idx) => (
              <button key={idx} style={styles.optionButton} onClick={() => handleAnswer(option)}>
                {option}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div style={styles.resultBox}>
          <h3>🎉 Quiz Complete!</h3>
          <p>You scored {score} out of {questions.length}.</p>
          <p style={{ fontSize: '1.1rem', marginTop: '10px' }}>
            {getFeedback(score)}
          </p>
          <p style={{ fontSize: '2rem', marginTop: '10px' }}>
            {getBadge(score)}
          </p>
          <button style={styles.retryButton} onClick={resetQuiz}>
            🔁 Try Again
          </button>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    marginTop: '50px',
    padding: '20px',
    textAlign: 'center'
  },
  title: {
    fontSize: '1.8rem',
    marginBottom: '15px'
  },
  question: {
    fontSize: '1.2rem',
    marginBottom: '20px'
  },
  optionsContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    alignItems: 'center'
  },
  optionButton: {
    padding: '10px 20px',
    fontSize: '1rem',
    backgroundColor: '#0099cc',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer'
  },
  resultBox: {
    backgroundColor: '#f0f8ff',
    padding: '20px',
    border: '2px solid #0066ff',
    borderRadius: '10px'
  },
  retryButton: {
    marginTop: '15px',
    padding: '8px 16px',
    fontSize: '1rem',
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer'
  },
  savedBox: {
    backgroundColor: '#eaf7ff',
    border: '1px solid #0077cc',
    padding: '10px',
    borderRadius: '10px',
    marginBottom: '15px',
    fontSize: '1rem',
  }  
};

export default Quiz;
