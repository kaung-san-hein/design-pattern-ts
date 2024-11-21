import { RealmFactory } from "../abstract-interface/realm-factory";
import { IceMonster, IceWeapon } from "../concrete-classes/ice";
import { Monster } from "../interfaces/monster";
import { Weapon } from "../interfaces/weapon";

export class IceRealmFactory implements RealmFactory {
    createMonster(): Monster {
        return new IceMonster();
    }
    createWeapon(): Weapon {
        return new IceWeapon();
    }
}