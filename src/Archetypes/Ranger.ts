import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  private static _rangerCount = 0;
  private _energyType: EnergyType = 'stamina';

  public static createdArchetypeInstances(): number {
    Ranger._rangerCount += 1;
    return Ranger._rangerCount;
  }

  public get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Ranger;