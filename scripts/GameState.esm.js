import { Diamond } from "./Diamond.esm.js";

export class GameState {
    constructor(
        level,
        leftMovement,
        pointsToWin,
        diamonds,
        diamondsSpriteImage
    ) {
        let _letfMovement = leftMovement;
        let _playerScores = 0;
        let _gameBoard = diamonds.map(
            ({ x, y, row, column, kind }) =>
                new Diamond(x, y, row, column, kind, diamondsSpriteImage)
        );
        let _isSwaping = false;
        let _isMoving = false;
        this._pointsToWin = pointsToWin;
        this._level = level;

        this.getLeftMovement = () => _letfMovement;
        this.decreasePointsMovement = () => _letfMovement--;
        this.increasePointsMovement = () => _letfMovement++;
        this.getPlayerPoints = () => _playerScores;
        this.increasePlayerPoints = (points) => (_playerScores += points);
        this.getIsSwaping = () => _isSwaping;
        this.setIsSwaping = (value) => (_isSwaping = value);
        this.getIsMoving = () => _isMoving;
        this.setIsMoving = (value) => (_isMoving = value);

        this.isPlayerWinner = () => _playerScores >= this._pointsToWin;
        this.getGameBoard = () => _gameBoard;
    }

    get level() {
        return this._level;
    }

    get pointsToWin() {
        return this._pointsToWin;
    }
}
