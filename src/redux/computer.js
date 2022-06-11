import { createSlice } from '@reduxjs/toolkit';
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function startingPosValid(startingPos, direction, len, ships) {
  if (direction === 'n') {
    for (let i = 0; i < len; i++) {
      let newPos = startingPos - 10 * i;
      if (newPos < 0) return false;
      if (posIsOccupied(newPos, ships)) return false;
    }
  } else if (direction === 's') {
    for (let i = 0; i < len; i++) {
      let newPos = startingPos + 10 * i;
      if (newPos > 99) return false;
      if (posIsOccupied(newPos, ships)) return false;
    }
  } else if (direction === 'e') {
    for (let i = 0; i < len; i++) {
      let newPos = startingPos + i;
      let oldTensPlace = Math.floor(startingPos / 10);
      let newTensPlace = Math.floor(newPos / 10);
      if (oldTensPlace !== newTensPlace) return false;
      if (posIsOccupied(newPos, ships)) return false;
    }
  } else if (direction === 'w') {
    for (let i = 0; i < len; i++) {
      let newPos = startingPos - i;
      let oldTensPlace = Math.floor(startingPos / 10);
      let newTensPlace = Math.floor(newPos / 10);
      if (oldTensPlace !== newTensPlace) return false;
      if (posIsOccupied(newPos, ships)) return false;
    }
  }
  return true;
}

function posIsOccupied(pos, ships) {
  if (ships.carrier.includes(pos)) return true;
  if (ships.battleship.includes(pos)) return true;
  if (ships.destroyer.includes(pos)) return true;
  if (ships.submarine.includes(pos)) return true;
  if (ships.patrol.includes(pos)) return true;
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
      let directions = ['n', 'e', 's', 'w'];
      let len;
      let randomStartingPos;
      let randomDirection;
      // carrier
      len = 5;
      randomStartingPos = getRandomInt(0, 100);
      randomDirection = directions[getRandomInt(0, 4)];
      while (
        !startingPosValid(randomStartingPos, randomDirection, len, state.ships)
      ) {
        randomStartingPos = getRandomInt(0, 100);
        randomDirection = directions[getRandomInt(0, 4)];
      }
      for (let i = 0; i < len; i++) {
        if (randomDirection === 'e') {
          state.ships.carrier[i] = randomStartingPos + i;
        } else if (randomDirection === 'w') {
          state.ships.carrier[i] = randomStartingPos - i;
        } else if (randomDirection === 'n') {
          state.ships.carrier[i] = randomStartingPos - 10 * i;
        } else {
          state.ships.carrier[i] = randomStartingPos + 10 * i;
        }
      }

      //battleship
      len = 4;
      randomStartingPos = getRandomInt(0, 100);
      randomDirection = directions[getRandomInt(0, 4)];
      while (
        !startingPosValid(randomStartingPos, randomDirection, len, state.ships)
      ) {
        randomStartingPos = getRandomInt(0, 100);
        randomDirection = directions[getRandomInt(0, 4)];
      }
      for (let i = 0; i < len; i++) {
        if (randomDirection === 'e') {
          state.ships.battleship[i] = randomStartingPos + i;
        } else if (randomDirection === 'w') {
          state.ships.battleship[i] = randomStartingPos - i;
        } else if (randomDirection === 'n') {
          state.ships.battleship[i] = randomStartingPos - 10 * i;
        } else {
          state.ships.battleship[i] = randomStartingPos + 10 * i;
        }
      }

      // destroyer
      len = 3;
      randomStartingPos = getRandomInt(0, 100);
      randomDirection = directions[getRandomInt(0, 4)];
      while (
        !startingPosValid(randomStartingPos, randomDirection, len, state.ships)
      ) {
        randomStartingPos = getRandomInt(0, 100);
        randomDirection = directions[getRandomInt(0, 4)];
      }
      for (let i = 0; i < len; i++) {
        if (randomDirection === 'e') {
          state.ships.destroyer[i] = randomStartingPos + i;
        } else if (randomDirection === 'w') {
          state.ships.destroyer[i] = randomStartingPos - i;
        } else if (randomDirection === 'n') {
          state.ships.destroyer[i] = randomStartingPos - 10 * i;
        } else {
          state.ships.destroyer[i] = randomStartingPos + 10 * i;
        }
      }

      // submarine
      len = 3;
      randomStartingPos = getRandomInt(0, 100);
      randomDirection = directions[getRandomInt(0, 4)];
      while (
        !startingPosValid(randomStartingPos, randomDirection, len, state.ships)
      ) {
        randomStartingPos = getRandomInt(0, 100);
        randomDirection = directions[getRandomInt(0, 4)];
      }
      for (let i = 0; i < len; i++) {
        if (randomDirection === 'e') {
          state.ships.submarine[i] = randomStartingPos + i;
        } else if (randomDirection === 'w') {
          state.ships.submarine[i] = randomStartingPos - i;
        } else if (randomDirection === 'n') {
          state.ships.submarine[i] = randomStartingPos - 10 * i;
        } else {
          state.ships.submarine[i] = randomStartingPos + 10 * i;
        }
      }

      // patrol
      len = 2;
      randomStartingPos = getRandomInt(0, 100);
      randomDirection = directions[getRandomInt(0, 4)];
      while (
        !startingPosValid(randomStartingPos, randomDirection, len, state.ships)
      ) {
        randomStartingPos = getRandomInt(0, 100);
        randomDirection = directions[getRandomInt(0, 4)];
      }
      for (let i = 0; i < len; i++) {
        if (randomDirection === 'e') {
          state.ships.patrol[i] = randomStartingPos + i;
        } else if (randomDirection === 'w') {
          state.ships.patrol[i] = randomStartingPos - i;
        } else if (randomDirection === 'n') {
          state.ships.patrol[i] = randomStartingPos - 10 * i;
        } else {
          state.ships.patrol[i] = randomStartingPos + 10 * i;
        }
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { attackComputer, initiateRandom } = computerSlice.actions;

export default computerSlice.reducer;
