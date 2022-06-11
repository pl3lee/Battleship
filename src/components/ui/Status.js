import './styles/Status.css';
import { useSelector, useDispatch } from 'react-redux';
const Status = (props) => {
  const isInSetup = useSelector((state) => state.gameStatus.setup);
  const currentShip = useSelector((state) => state.gameStatus.currentShip);
  if (isInSetup) {
    return <div className="status">Place {currentShip} in the grid</div>;
  } else {
    return <div className="status">test</div>;
  }
};

export default Status;
