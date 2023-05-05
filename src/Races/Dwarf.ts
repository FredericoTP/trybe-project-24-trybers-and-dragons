import Race from './Race';

class Dwarf extends Race {
  private static _dwarfCount = 0;
  private _maxLifePoints: number;

  constructor(
    name: string, 
    dexterity: number,
  ) {
    super(name, dexterity);
    this._maxLifePoints = 80;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public static createdRacesInstances():number {
    Dwarf._dwarfCount += 1;
    return Dwarf._dwarfCount;
  }
}

export default Dwarf;