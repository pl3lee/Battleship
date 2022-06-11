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
  let cells = [];
  if (props.type === 'player') {
    for (let i = 0; i < 100; i++) {
      let type;
      if (carrierPos.includes(i)) type = 'c';
      if (battleshipPos.includes(i)) type = 'b';
      if (destroyerPos.includes(i)) type = 'd';
      if (submarinePos.includes(i)) type = 's';
      if (patrolPos.includes(i)) type = 'p';
      cells.push(
        <Cell
          className="cell"
          key={uniqid()}
          type={type}
          index={i}
          cellFor="player"
        />
      );
    }
  } else {
    for (let i = 0; i < 100; i++) {
      let type;
      if (carrierPosComputer.includes(i)) type = 'c';
      if (battleshipPosComputer.includes(i)) type = 'b';
      if (destroyerPosComputer.includes(i)) type = 'd';
      if (submarinePosComputer.includes(i)) type = 's';
      if (patrolPosComputer.includes(i)) type = 'p';
      cells.push(
        <Cell
          className="cell"
          key={uniqid()}
          type={type}
          index={i}
          cellFor="computer"
        />
      );
    }
  }

  return <div className="board">{cells}</div>;
};

export default Board;
