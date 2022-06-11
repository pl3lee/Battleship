import Header from './Header';
import Status from './Status';
import PlayArea from './PlayArea';
import { useSelector, useDispatch } from 'react-redux';
import { placeShip } from '../../redux/computer.js';
import './styles/Game.css';
import React, { useState, useEffect } from 'react';

const Game = () => {
  const dispatch = useDispatch();
  const carrierPosPlayer = useSelector((state) => state.player.ships.carrier);
  const battleshipPosPlayer = useSelector(
    (state) => state.player.ships.battleship
  );
  const destroyerPosPlayer = useSelector(
    (state) => state.player.ships.destroyer
  );
  const submarinePosPlayer = useSelector(
    (state) => state.player.ships.submarine
  );
  const patrolPosPlayer = useSelector((state) => state.player.ships.patrol);
  const attacksReceivedPlayer = useSelector(
    (state) => state.player.attacksReceived
  );

  const carrierPosComputer = useSelector(
    (state) => state.computer.ships.carrier
  );
  const battleshipPosComputer = useSelector(
    (state) => state.computer.ships.battleship
  );
  const destroyerPosComputer = useSelector(
    (state) => state.computer.ships.destroyer
  );
  const submarinePosComputer = useSelector(
    (state) => state.computer.ships.submarine
  );
  const patrolPosComputer = useSelector((state) => state.computer.ships.patrol);
  const attacksReceivedComputer = useSelector(
    (state) => state.computer.attacksReceived
  );
  const checkPlayerWin = () => {
    let playerWon;
    let allComputerShipsPos = [
      ...carrierPosComputer,
      ...battleshipPosComputer,
      ...destroyerPosComputer,
      ...submarinePosComputer,
      ...patrolPosComputer,
    ];
    if (
      allComputerShipsPos.every((pos) => {
        return attacksReceivedComputer.includes(pos);
      })
    ) {
      playerWon = true;
    }
    if (playerWon) {
      return true;
    }
    return false;
  };
  const checkComputerWin = () => {
    let computerWon;
    let allPlayerShipsPos = [
      ...carrierPosPlayer,
      ...battleshipPosPlayer,
      ...destroyerPosPlayer,
      ...submarinePosPlayer,
      ...patrolPosPlayer,
    ];
    if (
      allPlayerShipsPos.every((pos) => {
        return attacksReceivedPlayer.includes(pos);
      })
    ) {
      computerWon = true;
    }
    if (computerWon) {
      return true;
    }
    return false;
  };
  let playerWon = checkPlayerWin();
  let computerWon = checkComputerWin();
  if (playerWon) {
    return <div className="win-screen">Player won!</div>;
  }
  if (computerWon) {
    return <div className="win-screen">Computer won!</div>;
  }
  return (
    <div className="game">
      <Header />
      <Status status="test status" />
      <PlayArea />
    </div>
  );
};

export default Game;
