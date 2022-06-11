import { createSlice } from '@reduxjs/toolkit';

const shipNames = ['Carrier', 'Battleship', 'Destroyer', 'Submarine', 'Patrol'];

const initialState = {
  setup: true,
  currentShip: shipNames[0],
  currentOrientation: 'n',
  currentHover: [],
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
    cycleOrientation: (state) => {
      console.log('clicked');
      if (state.currentOrientation === 'n') {
        state.currentOrientation = 'e';
      } else if (state.currentOrientation === 'e') {
        state.currentOrientation = 's';
      } else if (state.currentOrientation === 's') {
        state.currentOrientation = 'w';
      } else if (state.currentOrientation === 'w') {
        state.currentOrientation = 'n';
      }
    },

    // placeHover: (state, action) => {
    //   let len;
    //   let targettingShip;
    //   if (action.payload.name === 'Carrier') {
    //     len = 5;
    //     targettingShip = state.ships.carrier;
    //   } else if (action.payload.name === 'Battleship') {
    //     len = 4;
    //     targettingShip = state.ships.battleship;
    //   } else if (
    //     action.payload.name === 'Destroyer' ||
    //     action.payload.name === 'Submarine'
    //   ) {
    //     len = 3;
    //     targettingShip =
    //       action.payload.name === 'Destroyer'
    //         ? state.ships.destroyer
    //         : state.ships.submarine;
    //   } else if (action.payload.name === 'Patrol') {
    //     len = 2;
    //     targettingShip = state.ships.patrol;
    //   }
    //   state.currentHover = [];
    //   for (let i = 0; i < len; i++) {
    //     if (action.payload.direction === 'e') {
    //       state.currentHover.push(action.payload.startingPos + i);
    //     } else if (action.payload.direction === 'w') {
    //       state.currentHover.push(action.payload.startingPos - i);
    //     } else if (action.payload.direction === 'n') {
    //       state.currentHover.push(action.payload.startingPos - 10 * i);
    //     } else {
    //       state.currentHover.push(action.payload.startingPos + 10 * i);
    //     }
    //   }
    // },
  },
});

// Action creators are generated for each case reducer function
export const { finishSetup, nextShip, cycleOrientation } =
  gameStatusSlice.actions;

export default gameStatusSlice.reducer;
