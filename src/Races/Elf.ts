import Race from './Race';

class Elf extends Race {
  private static _elfCount = 0;

  constructor(
    name: string, 
    dexterity: number, 
    private _maxLifePoints = 99,
  ) {
    super(name, dexterity);
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public static createdRacesInstances():number {
    Elf._elfCount += 1;
    return Elf._elfCount;
  }
}

export default Elf;