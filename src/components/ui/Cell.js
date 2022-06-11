import './styles/Cell.css';
import { useSelector, useDispatch } from 'react-redux';
import { placeShip, receiveRandomAttack } from '../../redux/player.js';
import { attackComputer } from '../../redux/computer.js';
import { nextShip } from '../../redux/gameStatus.js';
import React, { useEffect } from 'react';
const Cell = (props) => {
  const dispatch = useDispatch();
  const isInSetup = useSelector((state) => state.gameStatus.setup);
  const currentShip = useSelector((state) => state.gameStatus.currentShip);
  const attacksReceived = useSelector((state) => state.player.attacksReceived);
  const currentOrientation = useSelector(
    (state) => state.gameStatus.currentOrientation
  );
  const carrierPos = useSelector((state) => state.player.ships.carrier);
  const battleshipPos = useSelector((state) => state.player.ships.battleship);
  const destroyerPos = useSelector((state) => state.player.ships.destroyer);
  const submarinePos = useSelector((state) => state.player.ships.submarine);
  const patrolPos = useSelector((state) => state.player.ships.patrol);

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
  function MouseOver(event) {
    // event.target.style.background = 'red';
  }
  function MouseOut(event) {
    // event.target.style.background = '';
  }
  const place = () => {
    let len;
    if (currentShip === 'Carrier') len = 5;
    if (currentShip === 'Battleship') len = 4;
    if (currentShip === 'Destroyer') len = 3;
    if (currentShip === 'Submarine') len = 3;
    if (currentShip === 'Patrol') len = 2;
    for (let i = 0; i < len; i++) {
      if (currentOrientation === 'e') {
        let oldTensPlace = Math.floor(props.index / 10);
        let newPos = props.index + i;
        let newTensPlace = Math.floor(newPos / 10);
        if (oldTensPlace !== newTensPlace) {
          return;
        }
        if (carrierPos.includes(newPos)) return;
        if (battleshipPos.includes(newPos)) return;
        if (destroyerPos.includes(newPos)) return;
        if (submarinePos.includes(newPos)) return;
        if (patrolPos.includes(newPos)) return;
      } else if (currentOrientation === 'w') {
        let oldTensPlace = Math.floor(props.index / 10);
        let newPos = props.index - i;
        let newTensPlace = Math.floor(newPos / 10);
        if (oldTensPlace !== newTensPlace) {
          return;
        }
        if (carrierPos.includes(newPos)) return;
        if (battleshipPos.includes(newPos)) return;
        if (destroyerPos.includes(newPos)) return;
        if (submarinePos.includes(newPos)) return;
        if (patrolPos.includes(newPos)) return;
      } else if (currentOrientation === 'n') {
        let newPos = props.index - 10 * i;
        if (newPos < 0) {
          return;
        }
        if (carrierPos.includes(newPos)) return;
        if (battleshipPos.includes(newPos)) return;
        if (destroyerPos.includes(newPos)) return;
        if (submarinePos.includes(newPos)) return;
        if (patrolPos.includes(newPos)) return;
      } else {
        let newPos = props.index + 10 * i;
        if (newPos > 99) {
          return;
        }
        if (carrierPos.includes(newPos)) return;
        if (battleshipPos.includes(newPos)) return;
        if (destroyerPos.includes(newPos)) return;
        if (submarinePos.includes(newPos)) return;
        if (patrolPos.includes(newPos)) return;
      }
    }
    dispatch(
      placeShip({
        name: currentShip,
        startingPos: props.index,
        direction: currentOrientation,
      })
    );
    dispatch(nextShip());
  };

  const attack = () => {
    dispatch(attackComputer(props.index));

    dispatch(receiveRandomAttack());
  };

  if (isInSetup) {
    return (
      <div
        className="cell"
        onClick={place}
        onMouseOver={MouseOver} //for hovering effect
        onMouseOut={MouseOut}
      >
        {props.type}
      </div>
    );
  } else {
    if (props.cellFor === 'player') {
      if (attacksReceived.includes(props.index)) {
        var attacked = true;
      }
      return <div className="cell">{attacked ? 'shot' : props.type}</div>;
    } else {
      if (attacksReceivedComputer.includes(props.index)) {
        attacked = true;
      }
      return (
        <div className="cell" onClick={attack}>
          {attacked ? 'shot' : props.type}
        </div>
      );
    }
  }
};

export default Cell;
