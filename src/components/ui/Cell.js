import './styles/Cell.css';
import { useSelector, useDispatch } from 'react-redux';
import { receiveAttack } from '../../redux/player.js';
const Cell = (props) => {
  const dispatch = useDispatch();
  const attacksReceived = useSelector((state) => state.player.attacksReceived);
  if (attacksReceived.includes(props.index)) {
    var attacked = true;
  }
  return (
    <div className="cell" onClick={() => dispatch(receiveAttack(props.index))}>
      {attacked ? 'shot' : props.type}
    </div>
  );
};

export default Cell;
