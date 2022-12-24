import { defineStore } from 'pinia'
import type { IChessPiece } from '~/model/chesspiece'
import { Bishop, ChessCoordinate, King, Knight, Pawn, Position, Queen, Tower } from '~/model/chesspiece'

export const useChessGameStore = defineStore('chessGame', {
  state: () => ({
    isWhiteTurn: true,
    board: [
      new Position(new ChessCoordinate('a', 1), new Tower('white')),
      new Position(new ChessCoordinate('b', 1), new Knight('white')),
      new Position(new ChessCoordinate('c', 1), new Bishop('white')),
      new Position(new ChessCoordinate('d', 1), new Queen('white')),
      new Position(new ChessCoordinate('e', 1), new King('white')),
      new Position(new ChessCoordinate('f', 1), new Bishop('white')),
      new Position(new ChessCoordinate('g', 1), new Knight('white')),
      new Position(new ChessCoordinate('h', 1), new Tower('white')),
      new Position(new ChessCoordinate('a', 2), new Pawn('white')),
      new Position(new ChessCoordinate('b', 2), new Pawn('white')),
      new Position(new ChessCoordinate('c', 2), new Pawn('white')),
      new Position(new ChessCoordinate('d', 2), new Pawn('white')),
      new Position(new ChessCoordinate('e', 2), new Pawn('white')),
      new Position(new ChessCoordinate('f', 2), new Pawn('white')),
      new Position(new ChessCoordinate('g', 2), new Pawn('white')),
      new Position(new ChessCoordinate('h', 2), new Pawn('white')),
      new Position(new ChessCoordinate('a', 8), new Tower('black')),
      new Position(new ChessCoordinate('b', 8), new Knight('black')),
      new Position(new ChessCoordinate('c', 8), new Bishop('black')),
      new Position(new ChessCoordinate('d', 8), new Queen('black')),
      new Position(new ChessCoordinate('e', 8), new King('black')),
      new Position(new ChessCoordinate('f', 8), new Bishop('black')),
      new Position(new ChessCoordinate('g', 8), new Knight('black')),
      new Position(new ChessCoordinate('h', 8), new Tower('black')),
      new Position(new ChessCoordinate('a', 7), new Pawn('black')),
      new Position(new ChessCoordinate('b', 7), new Pawn('black')),
      new Position(new ChessCoordinate('c', 7), new Pawn('black')),
      new Position(new ChessCoordinate('d', 7), new Pawn('black')),
      new Position(new ChessCoordinate('e', 7), new Pawn('black')),
      new Position(new ChessCoordinate('f', 7), new Pawn('black')),
      new Position(new ChessCoordinate('g', 7), new Pawn('black')),
      new Position(new ChessCoordinate('h', 7), new Pawn('black')),
    ],
  }),
  getters: {
    getRows: () => [1, 2, 3, 4, 5, 6, 7, 8],
    getColumns: () => ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'],
    getPiece: (state) => {
      return (coordinate: ChessCoordinate): IChessPiece | undefined => {
        return state.board.find((el: Position) => el.coordinate.x === coordinate.x && el.coordinate.y === coordinate.y)?.piece as IChessPiece
      }
    },
    getColorTurn: (state): string => { return state.isWhiteTurn ? 'white' : 'black' },
  },
  actions: {
    play() {
      this.isWhiteTurn = !this.isWhiteTurn
    },
  },
})

