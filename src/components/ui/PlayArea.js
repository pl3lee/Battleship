import './styles/PlayArea.css';
import Board from './Board';
import { useSelector, useDispatch } from 'react-redux';
import { finishSetup } from '../../redux/gameStatus.js';
const PlayArea = (props) => {
  const dispatch = useDispatch();
  const isInSetup = useSelector((state) => state.gameStatus.setup);
  let mainArea = isInSetup ? (
    <div className="setup">
      <Board />
      <div className="change-orientation">
        <span className="material-symbols-outlined">autorenew</span> Change
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
