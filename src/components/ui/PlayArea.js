import './styles/PlayArea.css';
import Board from './Board';
import { useSelector, useDispatch } from 'react-redux';
import { cycleOrientation } from '../../redux/gameStatus.js';
import { current } from '@reduxjs/toolkit';
const PlayArea = (props) => {
  const dispatch = useDispatch();
  const isInSetup = useSelector((state) => state.gameStatus.setup);
  const currentOrientation = useSelector(
    (state) => state.gameStatus.currentOrientation
  );
  const directions = {
    n: 'North',
    e: 'East',
    s: 'South',
    w: 'West',
  };

  let mainArea = isInSetup ? (
    <div className="setup">
      <Board type="player" />
      <div
        className="change-orientation"
        onClick={() => dispatch(cycleOrientation())}
      >
        <span className="material-symbols-outlined">autorenew</span> Current
        Orientation: {directions[currentOrientation]}
      </div>
    </div>
  ) : (
    <div className="boards">
      <Board type="player" /> <Board type="computer" />
    </div>
  );
  return <div className="play-area">{mainArea}</div>;
};

export default PlayArea;
