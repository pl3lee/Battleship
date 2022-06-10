import './styles/Board.css';
import Cell from './Cell';
import uniqid from 'uniqid';
const Board = (props) => {
  let cells = [];
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      cells.push(<Cell className="cell" key={uniqid()} />);
    }
  }
  return <div className="board">{cells}</div>;
};

export default Board;
