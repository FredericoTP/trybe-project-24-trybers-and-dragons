import Race from './Race';

class Halfling extends Race {
  private static _halflingCount = 0;

  constructor(
    name: string, 
    dexterity: number, 
    private _maxLifePoints = 60,
  ) {
    super(name, dexterity);
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public static createdRacesInstances():number {
    Halfling._halflingCount += 1;
    return Halfling._halflingCount;
  }
}

export default Halfling;