import Header from './Header';
import Status from './Status';
import PlayArea from './PlayArea';
import React, { useState } from 'react';
import './styles/Game.css';
const Game = () => {
  return (
    <div className="game">
      <Header />
      <Status status="test status" />
      <PlayArea setup="test setup" />
    </div>
  );
};

export default Game;
