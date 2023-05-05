import Battle from './Battle';
import Fighter from '../Fighter';

class PVP extends Battle {
  private _playerTwo: Fighter;

  constructor(player: Fighter, playerTwo: Fighter) {
    super(player);
    this._playerTwo = playerTwo;
  }

  fight(): number {
    while (this.player.lifePoints !== -1 
      && this._playerTwo.lifePoints !== -1) {
      this.player.attack(this._playerTwo);
      this._playerTwo.attack(this.player);
    }

    return this.player.lifePoints === -1 ? -1 : 1;
  }
}

export default PVP;