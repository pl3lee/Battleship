class Ship {
  constructor(len, direction) {
    this.length = len;
    this.timesHit = 0;
    this.direction = direction;
    for (let i = 0; i < len; i++) {
      // false means that position is not hit, true means hit
      this.pos.push(false);
    }
  }
  hit() {
    this.timesHit += 1;
  }
  isSunk() {
    return this.timesHit === this.len;
  }
}

export default Ship;
