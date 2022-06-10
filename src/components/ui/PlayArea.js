import './styles/PlayArea.css';
import Board from './Board';
const PlayArea = (props) => {
  let mainArea = props.setup ? (
    <div className="boards">
      <Board />
    </div>
  ) : (
    <div className="boards">
      <Board /> <Board />
    </div>
  );
  return <div className="play-area">{mainArea}</div>;
};

export default PlayArea;
