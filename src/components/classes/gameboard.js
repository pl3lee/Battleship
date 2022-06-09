import Ship from './ship';
import Position from './position';
class Gameboard {
  constructor() {
    this.board = [];
    this.attacksReceived = [];
    for (let i = 0; i < 10; i++) {
      let tempArray = [];
      for (let j = 0; j < 10; j++) {
        tempArray.push(null);
      }
      this.board.push(tempArray);
    }
  }

  placeShip(pos, len, direction) {
    let ship = new Ship(len, direction);
    // checks if board positions are clear
    if (direction === 'n') {
      if (pos.row - len < -1) return false;
      for (let i = len - 1; i >= 0; i--) {
        if (this.board[pos.row - i][pos.col] != null) return false;
      }
      for (let i = len - 1; i >= 0; i--) {
        this.board[pos.row - i][pos.col] = ship;
      }
    } else if (direction === 'e') {
      if (pos.col + len > 10) return false;
      for (let i = len - 1; i >= 0; i--) {
        if (this.board[pos.row][pos.col + i] != null) return false;
      }
      for (let i = len - 1; i >= 0; i--) {
        this.board[pos.row][pos.col + i] = ship;
      }
    } else if (direction === 's') {
      if (pos.row + len > 10) return false;
      for (let i = len - 1; i >= 0; i--) {
        if (this.board[pos.row + i][pos.col] != null) return false;
      }
      for (let i = len - 1; i >= 0; i--) {
        this.board[pos.row + i][pos.col] = ship;
      }
    } else if (direction === 'w') {
      if (pos.col - len < -1) return false;
      for (let i = len - 1; i >= 0; i--) {
        if (this.board[pos.row][pos.col - i] != null) return false;
      }
      for (let i = len - 1; i >= 0; i--) {
        this.board[pos.row][pos.col - i] = ship;
      }
    }
    return true;
  }
  beenHitBefore(pos) {}
  receiveAttack(pos) {
    if (
      this.board[pos.row][pos.col] != null &&
      !this.board[pos.row][pos.col].isSunk()
    ) {
      this.board[pos.row][pos.col].hit();
    }
  }
}
