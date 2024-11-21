import { RealmFactory } from "../abstract-interface/realm-factory";
import { AirMonster, AirWeapon } from "../concrete-classes/air";
import { Monster } from "../interfaces/monster";
import { Weapon } from "../interfaces/weapon";

export class AirRealmFactory implements RealmFactory {
    createMonster(): Monster {
        return new AirMonster();
    }
    createWeapon(): Weapon {
        return new AirWeapon();
    }
}