import './styles/Board.css';
import Cell from './Cell';
import uniqid from 'uniqid';
import { useSelector, useDispatch } from 'react-redux';
const Board = (props) => {
  const carrierPos = useSelector((state) => state.player.ships.carrier);
  const battleshipPos = useSelector((state) => state.player.ships.battleship);
  const destroyerPos = useSelector((state) => state.player.ships.destroyer);
  const submarinePos = useSelector((state) => state.player.ships.submarine);
  const patrolPos = useSelector((state) => state.player.ships.patrol);
  const attacksReceived = useSelector((state) => state.player.attacksReceived);

  let cells = [];
  for (let i = 0; i < 100; i++) {
    let type;
    if (carrierPos.includes(i)) type = 'c';
    if (battleshipPos.includes(i)) type = 'b';
    if (destroyerPos.includes(i)) type = 'd';
    if (submarinePos.includes(i)) type = 's';
    if (patrolPos.includes(i)) type = 'p';
    cells.push(<Cell className="cell" key={uniqid()} type={type} index={i} />);
  }
  return <div className="board">{cells}</div>;
};

export default Board;
