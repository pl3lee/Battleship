import Header from './Header';
import Status from './Status';
import PlayArea from './PlayArea';
import React, { useState } from 'react';
import './styles/Game.css';
const Game = () => {
  const [setup, setSetup] = useState(true);
  return (
    <div className="game">
      <Header />
      <Status status="test status" />
      <PlayArea setup={setup} />
    </div>
  );
};

export default Game;
