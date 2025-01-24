import React, { useState, useEffect } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const App = () => {
  const [listening, setListening] = useState(false);
  const { transcript, resetTranscript, browserSupportsSpeechRecognition } = useSpeechRecognition({
    continuous: true
  });

  useEffect(() => {
    console.log("Transcript updated:", transcript);
  }, [transcript]);

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  const startListening = () => {
    setListening(true);
    SpeechRecognition.startListening();
  };

  const stopListening = () => {
    setListening(false);
    SpeechRecognition.stopListening();
  };

  return (
    <div>
      <p>Microphone: {listening ? 'on' : 'off'}</p>
      <button onClick={startListening}>Start</button>
      <button onClick={stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>
      <p style={{ whiteSpace: 'pre-wrap' }}>{transcript}</p>
    </div>
  );
};

export default App;