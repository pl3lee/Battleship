import { configureStore } from '@reduxjs/toolkit';
import playerReducer from './player';
import gameStatusReducer from './gameStatus';

export const store = configureStore(
  {
    reducer: {
      player: playerReducer,
      gameStatus: gameStatusReducer,
    },
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
