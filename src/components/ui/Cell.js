import './styles/Cell.css';
import { useSelector, useDispatch } from 'react-redux';
import { receiveAttack, placeShip } from '../../redux/player.js';
import { nextShip } from '../../redux/gameStatus.js';
const Cell = (props) => {
  const dispatch = useDispatch();
  const isInSetup = useSelector((state) => state.gameStatus.setup);
  const currentShip = useSelector((state) => state.gameStatus.currentShip);
  const attacksReceived = useSelector((state) => state.player.attacksReceived);

  const place = () => {
    dispatch(
      placeShip({
        name: currentShip,
        startingPos: props.index,
        direction: 'e',
      })
    );
    dispatch(nextShip());
  };

  if (isInSetup) {
    return (
      <div className="cell" onClick={place}>
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
