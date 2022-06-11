import { createSlice } from '@reduxjs/toolkit';

const shipNames = ['Carrier', 'Battleship', 'Destroyer', 'Submarine', 'Patrol'];

const initialState = {
  setup: true,
  currentShip: shipNames[0],
};

export const gameStatusSlice = createSlice({
  name: 'gameStatus',
  initialState,
  reducers: {
    finishSetup: (state) => {
      state.setup = false;
    },
    nextShip: (state) => {
      if (state.currentShip === shipNames[0]) {
        state.currentShip = shipNames[1];
      } else if (state.currentShip === shipNames[1]) {
        state.currentShip = shipNames[2];
      } else if (state.currentShip === shipNames[2]) {
        state.currentShip = shipNames[3];
      } else if (state.currentShip === shipNames[3]) {
        state.currentShip = shipNames[4];
      } else {
        state.setup = false;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { finishSetup, nextShip } = gameStatusSlice.actions;

export default gameStatusSlice.reducer;
