import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  private static _warriorCount = 0;
  private _energyType: EnergyType = 'stamina';

  public static createdArchetypeInstances(): number {
    Warrior._warriorCount += 1;
    return Warrior._warriorCount;
  }

  public get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Warrior;