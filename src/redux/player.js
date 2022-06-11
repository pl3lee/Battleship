import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  ships: {
    carrier: [0, 1, 2, 3],
    battleship: [80, 81, 82, 83],
    destroyer: [77, 87, 97],
    submarine: [13, 14, 15],
    patrol: [98, 99],
    // carrier: [-1, -1, -1, -1],
    // battleship: [-1, -1, -1, -1],
    // destroyer: [-1, -1, -1],
    // submarine: [-1, -1, -1],
    // patrol: [-1, -1],
  },
  attacksReceived: [],
};

export const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    receiveAttack: (state, action) => {
      if (!state.attacksReceived.includes(action.payload)) {
        state.attacksReceived.push(action.payload);
      }
    },
    // placeShip: (state, action) => {
    //   let len;
    //   if (action.payload.name === 'Carrier') {
    //     len = 5;
    //   } else if (action.payload.name === 'Battleship') {
    //     len = 4;
    //   } else if (
    //     action.payload.name === 'Destroyer' ||
    //     action.payload.name === 'Submarine'
    //   ) {
    //     len = 3;
    //   } else if (action.payload.name === 'Patrol') {
    //     len = 2;
    //   }

    // },
  },
});

// Action creators are generated for each case reducer function
export const { receiveAttack } = playerSlice.actions;

export default playerSlice.reducer;
