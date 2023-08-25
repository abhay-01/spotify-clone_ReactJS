import React, { useState, useEffect } from 'react';

const VoiceAssistant = () => {
  const [speechRecognition, setSpeechRecognition] = useState(null);
  const [transcript, setTranscript] = useState('');

  useEffect(() => {
    // Initialize speech recognition object
    const recognition = new window.webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = 'en-US';

    // Event listener for speech recognition result
    recognition.onresult = (event) => {
      const { transcript } = event.results[0][0];
      setTranscript(transcript);
    };

    // Start speech recognition
    const startRecognition = () => {
      recognition.start();
    };

    // Stop speech recognition
    const stopRecognition = () => {
      recognition.stop();
    };

    // Assign speech recognition object to state
    setSpeechRecognition({
      start: startRecognition,
      stop: stopRecognition,
    });

    // Clean up on component unmount
    return () => {
      recognition.stop();
    };
  }, []);

  const handleStart = () => {
    speechRecognition.start();
  };

  const handleStop = () => {
    speechRecognition.stop();
  };

  return (
    <div>
      <h2>Voice Assistant</h2>
      <button onClick={handleStart}>Start Listening</button>
      <button onClick={handleStop}>Stop Listening</button>
      <p>Transcript: {transcript}</p>
    </div>
  );
};

export default VoiceAssistant;
