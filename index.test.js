import TicTacToe from './index'

describe('TicTacToe', () => {
  it('has a default board', () => {
    const game = new TicTacToe()
    const expected = [[null, null, null],[null, null, null],[null, null, null]]
    const result = game.getBoard()
    expect(result).toEqual(expected)
  })

  describe('validMove', () => {
    it('returns false for row out of upper bounds', () => {
      const game = new TicTacToe()
      const result = game.validMove(4, 0, 'X')
      expect(result).toBe(false)
    })

    it('returns false for row out of lower bounds', () => {
      const game = new TicTacToe()
      const result = game.validMove(-1, 0, 'X')
      expect(result).toBe(false)
    })

    it('returns false for col out of upper bounds', () => {
      const game = new TicTacToe()
      const result = game.validMove(0, 3, 'X')
      expect(result).toBe(false)
    })

    it('returns false for col out of lower bounds', () => {
      const game = new TicTacToe()
      const result = game.validMove(0, -1, 'X')
      expect(result).toBe(false)
    })

    it('returns false if marker is not valid', () => {
      const game = new TicTacToe()
      const result = game.validMove(0, 0, 'A')
      expect(result).toBe(false)
    })

    it('returns true if marker is valid', () => {
      const game = new TicTacToe()
      const result = game.validMove(0, 0, 'X')
      expect(result).toBe(true)
    })
  })

  it('does not place an invalid marker', () => {
    const game = new TicTacToe()
    const expected = [[null, null, null],[null, null, null],[null, null, null]]
    game.mark(0, 0, 1)
    const result = game.getBoard()
    expect(result).toEqual(expected)
  })

  it('places an X', () => {
    const game = new TicTacToe()
    const expected = [[null, null, 'X'],[null, null, null],[null, null, null]]
    game.mark(0, 2, 'X')
    const result = game.getBoard()
    expect(result).toEqual(expected)
  })

  describe('winning conditions', () => {
    it('knows if there is a row win', () => {
      const game = new TicTacToe()
      game.board = [['X', 'X', 'X'],[null, null, null],[null, null, null]]
      const expected = 'Game over. X wins!'
      const result = game.status()
      expect(result).toEqual(expected)
    })

    it('knows if there is a diff row win', () => {
      const game = new TicTacToe()
      game.board = [[null, null, null],['O', 'O', 'O'],[null, null, null]]
      const expected = 'Game over. O wins!'
      const result = game.status()
      expect(result).toEqual(expected)
    })

    it('knows if there is a column win', () => {
      const game = new TicTacToe()
      game.board = [['X', null, null],['X', null, null],['X', null, null]]
      const expected = 'Game over. X wins!'
      const result = game.status()
      expect(result).toEqual(expected)
    })

    it('knows if there is another column win', () => {
      const game = new TicTacToe()
      game.board = [[null, 'O', null],[null, 'O', null],[null, 'O', null]]
      const expected = 'Game over. O wins!'
      const result = game.status()
      expect(result).toEqual(expected)
    })
  })
})
