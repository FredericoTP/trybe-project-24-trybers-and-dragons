import Race from './Race';

class Orc extends Race {
  private static _orcCount = 0;
  private _maxLifePoints: number;

  constructor(
    name: string, 
    dexterity: number,
  ) {
    super(name, dexterity);
    this._maxLifePoints = 74;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public static createdRacesInstances():number {
    Orc._orcCount += 1;
    return Orc._orcCount;
  }
}

export default Orc;