import React, { useState } from 'react';
import './App.css';

const customDictionary = {
  teh: 'the',
  wrok: 'work',
  fot: 'for',
  exampl: 'example',
};

function App() {
  const [text, setText] = useState('');
  const [suggestion, setSuggestion] = useState('');

  const handleChange = (e) => {
    const inputText = e.target.value;
    setText(inputText);

    const words = inputText.split(' ');
    for (let word of words) {
      const lowerCaseWord = word.toLowerCase();
      if (customDictionary[lowerCaseWord]) {
        setSuggestion(customDictionary[lowerCaseWord]);
        return;
      }
    }
    setSuggestion('');
  };

  return (
    <div className="App">
      <h1>Spell Check and Auto-Correction</h1>
      <textarea
        value={text}
        onChange={handleChange}
        placeholder="Enter here..."
        rows="10"
        cols="50"
      />
      {suggestion && (
        <p>
          Did you mean: <span className="highlight">{suggestion}</span>?
        </p>
      )}
    </div>
  );
}

export default App;
