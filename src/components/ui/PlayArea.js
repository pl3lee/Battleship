import './styles/PlayArea.css';
import Board from './Board';
const PlayArea = (props) => {
  let mainArea = props.setup ? (
    <div className="setup">
      <Board />
      <div className="change-orientation">
        <span class="material-symbols-outlined">autorenew</span> Change
        Orientation
      </div>
    </div>
  ) : (
    <div className="boards">
      <Board /> <Board />
    </div>
  );
  return <div className="play-area">{mainArea}</div>;
};

export default PlayArea;
