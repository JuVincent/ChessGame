export interface IChessPiece {
  name: string
  color: string
  picture: string

  getMoves(coordinate: ChessCoordinate): ChessCoordinate[]
}

export abstract class ChessPiece implements IChessPiece {
  color: string
  name = ''
  picture = ''

  constructor(color: string, name: string) {
    this.name = name
    this.color = color
    this.picture = `/${this.color[0]}${this.name}.svg`
  }

  getMoves(coordinate: ChessCoordinate): ChessCoordinate[] {
    return []
  }
}

export class ChessCoordinate {
  x: String
  y: number

  constructor(x: String, y: number) {
    this.x = x
    this.y = y
  }
}

export class Position {
  coordinate: ChessCoordinate
  piece: IChessPiece

  constructor(coordinate: ChessCoordinate, piece: IChessPiece) {
    this.coordinate = coordinate
    this.piece = piece
  }
}

export class Pawn extends ChessPiece {
  pristine: Boolean = true
  constructor(color: string) {
    super(color, 'pawn')
  }

  getMoves(coordinate: ChessCoordinate): ChessCoordinate[] {
    const result: ChessCoordinate[] = []
    result.push(new ChessCoordinate(coordinate.x, coordinate.y + 1))
    return result
  }
}

export class Tower extends ChessPiece {
  constructor(color: string) {
    super(color, 'tower')
  }
}

export class Knight extends ChessPiece {
  constructor(color: string) {
    super(color, 'knight')
  }
}

export class Bishop extends ChessPiece {
  constructor(color: string) {
    super(color, 'bishop')
  }
}

export class Queen extends ChessPiece {
  constructor(color: string) {
    super(color, 'queen')
  }
}

export class King extends ChessPiece {
  constructor(color: string) {
    super(color, 'king')
  }
}
