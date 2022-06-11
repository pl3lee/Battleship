import { configureStore } from '@reduxjs/toolkit';
import playerReducer from './player';
import gameStatusReducer from './gameStatus';
import computerReducer from './computer';
export const store = configureStore(
  {
    reducer: {
      player: playerReducer,
      computer: computerReducer,
      gameStatus: gameStatusReducer,
    },
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
