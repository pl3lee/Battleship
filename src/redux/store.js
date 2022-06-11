import { configureStore } from '@reduxjs/toolkit';
import playerReducer from './player';
import gameStatusReducer from './gameStatus';

export const store = configureStore({
  reducer: {
    player: playerReducer,
    gameStatus: gameStatusReducer,
  },
});
