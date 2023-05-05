import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  private static _mageCount = 0;
  private _energyType: EnergyType = 'mana';

  public static createdArchetypeInstances(): number {
    Mage._mageCount += 1;
    return Mage._mageCount;
  }

  public get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Mage;