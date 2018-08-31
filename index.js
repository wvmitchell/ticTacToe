class TicTacToe {
  constructor() {
    this.board = [[null, null, null], [null, null, null], [null, null, null]]
  }

  validMove(row, col, mark) {
    if(row > 2 || row < 0) {
      return false
    } else if(col > 2 || col < 0) {
      return false
    } else if(!['X', 'O', 'x', 'o'].includes(mark)) {
      return false
    }
    return true
  }

  mark = (row, column, marker) => {
    if(this.validMove(row, column, marker)){
      this.board = this.board.map((r, index) => (
        r.map((cell, colIndex) => (
          (row === index && column === colIndex) ? marker : null
        ))
      ))
    }
  }

  status = () => {
    const rowWinner = this.checkRowWinner()
    const colWinner = this.checkColWinner()
    if(rowWinner || colWinner) {
      return `Game over. ${rowWinner || colWinner} wins!`
    }
  }

  checkRowWinner = () => {
    const xWins = this.board.some(row => row.every(cell => cell === 'X'))
    const oWins = this.board.some(row => row.every(cell => cell === 'O'))
    if(xWins) {
      return 'X'
    } else if(oWins) {
      return 'O'
    }
  }

  checkColWinner = () => {
    const xWins = [0, 1, 2].some(colIndex => this.board.every(row => row[colIndex] === 'X'))
    const oWins = [0, 1, 2].some(colIndex => this.board.every(row => row[colIndex] === 'O'))
    if(xWins) {
      return 'X'
    } else if(oWins) {
      return 'O'
    }
  }

  getBoard = () => {
    return this.board
  }
}

export default TicTacToe
