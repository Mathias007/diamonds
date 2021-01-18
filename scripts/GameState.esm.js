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
        let _gameBoard = diamonds.map((diamond) => new Diamond(...diamond));
        this._pointsToWin = pointsToWin;
        this._level = level;

        this.getLeftMovement = () => _letfMovement;
        this.decreasePointsMovement = () => _letfMovement--;
        this.increasePointsMovement = () => _letfMovement++;
        this.getPlayerPoints = () => _playerScores;
        this.increasePlayerPoints = (points) => (_playerScores += points);

        this.isPlayerWinner = () => _playerScores >= this._pointsToWin;
    }

    get level() {
        return this._level;
    }

    get pointsToWin() {
        return this._pointsToWin;
    }
}
