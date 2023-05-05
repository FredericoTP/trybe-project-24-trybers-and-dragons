import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter, { SimpleFighter } from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;

  constructor(name: string) {
    const randomDexterity = getRandomInt(1, 10);
    const elf = new Elf(name, randomDexterity);
    const mage = new Mage('Mage');

    this._dexterity = randomDexterity;
    this._race = elf;
    this._archetype = mage;
    this._maxLifePoints = elf.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._energy = { type_: mage.energyType, amount: getRandomInt(1, 10) };
  }

  public get race(): Race {
    return this._race;
  }

  public get archetype(): Archetype {
    return this._archetype;
  }

  public get lifePoints(): number {
    return this._lifePoints;
  }

  public get strength(): number {
    return this._strength;
  }

  public get defense(): number {
    return this._defense;
  }

  public get dexterity(): number {
    return this._dexterity;
  }

  public get energy(): Energy {
    return { ...this._energy };
  }

  public receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this.defense;

    if (damage > 0) {
      this._lifePoints -= damage;
    } else {
      this._lifePoints -= 1;
    }

    if (this._lifePoints <= 0) {
      this._lifePoints = -1;
    }

    return this._lifePoints;
  }

  public attack(enemy: Fighter | SimpleFighter): void {
    enemy.receiveDamage(this._strength);
  }

  public levelUp(): void {
    this._maxLifePoints = this.increaseMaxLifePoints();
    this._strength += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    this._energy.amount = 10;
    this._lifePoints = this._maxLifePoints;
  }

  public special(enemy: Fighter): void {
    enemy.receiveDamage(this._strength + getRandomInt(1, 5));
  }

  private increaseMaxLifePoints(): number {
    const newMaxLife = this._maxLifePoints + getRandomInt(1, 10);

    if (newMaxLife > this._race.maxLifePoints) {
      return this._race.maxLifePoints;
    }

    return newMaxLife;
  }
}

export default Character;