import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  private static _necromancerCount = 0;
  private _energyType: EnergyType = 'mana';

  public static createdArchetypeInstances(): number {
    Necromancer._necromancerCount += 1;
    return Necromancer._necromancerCount;
  }

  public get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Necromancer;