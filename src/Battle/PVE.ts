import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

class PVE extends Battle {
  private _environment: (Fighter | SimpleFighter)[];

  constructor(player: Fighter, environment: (Fighter | SimpleFighter)[]) {
    super(player);
    this._environment = environment;
  }

  fight(): number {
    const enemies = [...this._environment];

    while (this.player.lifePoints !== -1 
      && enemies.every((item) => item.lifePoints !== -1)) {
      enemies.forEach((enemy) => {
        this.playerVsEnemy(enemy);
      });
    }

    return this.player.lifePoints === -1 ? -1 : 1;
  }

  private playerVsEnemy(enemy: Fighter | SimpleFighter) {
    while (this.player.lifePoints !== -1 
      && enemy.lifePoints !== -1) {
      this.player.attack(enemy);
      enemy.attack(this.player);
    }
  }
}

export default PVE;