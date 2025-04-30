import React from "react";

const LessonSpeech = () => {
    const speakLesson = () => {
        const lessonText = `
        Hellp young space explorers!! I'm your rocket guide!
        TOday we will build a satellite that help us do special
        things like send messages and monitor weather conditions
        `;

        const speech = new SpeechSynthesisUtterance(lessonText);
        speech.lang = 'en-US';
        speech.pitch = 1;
        speech.rate = 1;
        window.speechSynthesis.speak(speech);
    };

    return (
        <button style={styles.button} onClick={speakLesson}>
            🔊 Play Lesson
        </button>
    );
};

const styles = {
    button: {
        marginTop: '20px',
        fontSize: '1rem',
        padding: '10px 16px',
        backgroundColor: '#ff6600',
        color: '#fff',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
    }
};

export default LessonSpeech;