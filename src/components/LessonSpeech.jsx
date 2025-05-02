import React from 'react';

const LessonSpeech = () => {
  const speakLesson = () => {
    const lessonText = `
        It may be said... that building a satellite is like putting together the ultimate space robot!

        Hello young space explorers! I’m your friendly rocket guide, and today we’re going to learn how to build a satellite, piece by piece. So buckle in — let’s launch into learning!

        First up — the solar panels!  
        These are the large flat wings that stick out from the sides of the satellite. But they're not just decoration — they soak up the Sun’s energy and turn it into power. Think of them as the satellite’s solar batteries! Without them, the satellite would run out of energy and stop working. So solar panels are absolutely essential for keeping everything powered while it floats in space.

        Next, let’s look at the antenna.  
        It kind of looks like a bowl or a dish — and that's because it is! The antenna helps the satellite send and receive signals. It's how it "talks" to Earth. For example, when you use GPS, a satellite antenna sends your location to your phone. Without the antenna, the satellite would be like a lost space puppy — unable to call home.

        Now, onto the main processing unit — the satellite’s brain.  
        This box-shaped piece is where all the decisions happen. It processes data, runs instructions, and controls all the parts like a little space computer. Every message, image, or reading from space goes through this unit. It’s smart, efficient, and incredibly important.

        Let’s fire up the mini thrusters next!  
        These are the little engines that can gently push or rotate the satellite. Satellites don’t have big rockets, but these mini thrusters help them adjust their position in space. Want the satellite to face Earth instead of the Moon? The thrusters can handle it! Even tiny movements are super useful when aiming at signals or taking pictures.

        And finally — we have the wings or arms.  
        These help hold the solar panels and antenna in place, and sometimes they balance the satellite. They may look simple, but without these structures, parts could float away or be wobbly. The wings keep everything stable and spaced out like a carefully built machine.

        So, when we put it all together — the solar panels, the antenna, the processor, the thrusters, and the wings — we get a real working satellite!  

        And now, it’s your turn to build one. Let’s see if you can place all the parts in the right place. Ready? Let’s build your very own satellite!

    `;

    const speech = new SpeechSynthesisUtterance(lessonText);
    speech.lang = 'en-US';
    speech.pitch = 1;
    speech.rate = 1;

    window.speechSynthesis.speak(speech);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <button style={styles.button} onClick={speakLesson}>
        🔊 Play Lesson
      </button>
    </div>
  );
};

const styles = {
  button: {
    padding: '10px 20px',
    fontSize: '1rem',
    backgroundColor: '#ff6600',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
  },
};

export default LessonSpeech;
