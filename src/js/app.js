export default class GameBoard {
  constructor(size) {
    this.size = size ** 2;
    this.nextIndex = 0;
    this.lastIndex = 0;
  }

  draw() {
    const board = document.getElementsByClassName('board')[0];
    for (let i = 0; i < this.size; i += 1) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cell.id = `cell${i}`;
      board.appendChild(cell);
    }
    setInterval(() => {
      while (this.nextIndex === this.lastIndex) {
        this.nextIndex = Math.floor(Math.random() * this.size);
      }

      const lastCell = document.getElementById(`cell${this.lastIndex}`);
      lastCell.innerHTML = '';
      const nextCell = document.getElementById(`cell${this.nextIndex}`);
      nextCell.innerHTML = '<img src = "../src/img/goblin.png">';
      this.lastIndex = this.nextIndex;
    }, 500);
  }
}

// eslint-disable-next-line no-unused-vars
const gameBoard = new GameBoard(4);
gameBoard.draw();
