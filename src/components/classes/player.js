import Gameboard from './gameboard';
import Position from './position';
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
class Player {
  constructor(opponentGameboard) {
    this.opponentGameboard = opponentGameboard;
  }

  attack(pos) {
    this.opponentGameboard.receiveAttack(pos);
  }

  attackRandom() {
    while (true) {
      let row = getRandomInt(0, 10);
      let col = getRandomInt(0, 10);
      let success = this.opponentGameboard.receiveAttack(
        new Position(row, col)
      );
      if (success) break;
    }
  }
}
