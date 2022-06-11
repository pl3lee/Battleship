import { createSlice } from '@reduxjs/toolkit';
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

const initialState = {
  ships: {
    // carrier: [-1, -1, -1, -1, -1],
    // battleship: [-1, -1, -1, -1],
    // destroyer: [-1, -1, -1],
    // submarine: [-1, -1, -1],
    // patrol: [-1, -1],
    carrier: [21, 22, 23, 24, 25],
    battleship: [80, 81, 82, 83],
    destroyer: [77, 87, 97],
    submarine: [13, 14, 15],
    patrol: [98, 99],
  },
  attacksReceived: [],
};

export const computerSlice = createSlice({
  name: 'computer',
  initialState,
  reducers: {
    attackComputer: (state, action) => {
      if (!state.attacksReceived.includes(action.payload)) {
        state.attacksReceived.push(action.payload);
      }
    },
    initiateRandom: (state) => {
      let len = 4;
      let directions = ['n', 'e', 's', 'w'];
      let randomStartingPos = getRandomInt(0, 100);
      let randomDirection = directions[getRandomInt(0, 4)];
      let valid = false;
    },

    // placeShip: (state, action) => {
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
    //   for (let i = 0; i < len; i++) {
    //     if (action.payload.direction === 'e') {
    //       targettingShip[i] = action.payload.startingPos + i;
    //     } else if (action.payload.direction === 'w') {
    //       targettingShip[i] = action.payload.startingPos - i;
    //     } else if (action.payload.direction === 'n') {
    //       targettingShip[i] = action.payload.startingPos - 10 * i;
    //     } else {
    //       targettingShip[i] = action.payload.startingPos + 10 * i;
    //     }
    //   }
    // },
  },
});

// Action creators are generated for each case reducer function
export const { attackComputer } = computerSlice.actions;

export default computerSlice.reducer;
