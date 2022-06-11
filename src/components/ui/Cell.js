import './styles/Cell.css';
import { useSelector, useDispatch } from 'react-redux';
import { receiveAttack, placeShip } from '../../redux/player.js';
import { nextShip } from '../../redux/gameStatus.js';
const Cell = (props) => {
  const dispatch = useDispatch();
  const isInSetup = useSelector((state) => state.gameStatus.setup);
  const currentShip = useSelector((state) => state.gameStatus.currentShip);
  const attacksReceived = useSelector((state) => state.player.attacksReceived);
  const currentOrientation = useSelector(
    (state) => state.gameStatus.currentOrientation
  );
  const placedSuccessfully = useSelector(
    (state) => state.player.placedSuccessfully
  );
  function MouseOver(event) {
    event.target.style.background = 'red';
  }
  function MouseOut(event) {
    event.target.style.background = '';
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
      } else if (currentOrientation === 'w') {
        let oldTensPlace = Math.floor(props.index / 10);
        let newPos = props.index - i;
        let newTensPlace = Math.floor(newPos / 10);
        if (oldTensPlace !== newTensPlace) {
          return;
        }
      } else if (currentOrientation === 'n') {
        let newPos = props.index - 10 * i;
        if (newPos < 0) {
          return;
        }
      } else {
        let newPos = props.index + 10 * i;
        if (newPos > 99) {
          return;
        }
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

  if (isInSetup) {
    return (
      <div
        className="cell"
        onClick={place}
        onMouseOver={MouseOver}
        onMouseOut={MouseOut}
      >
        {props.type}
      </div>
    );
  } else {
    if (attacksReceived.includes(props.index)) {
      var attacked = true;
    }
    return (
      <div
        className="cell"
        onClick={() => dispatch(receiveAttack(props.index))}
      >
        {attacked ? 'shot' : props.type}
      </div>
    );
  }
};

export default Cell;
