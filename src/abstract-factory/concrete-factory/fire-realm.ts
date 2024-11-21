import { RealmFactory } from "../abstract-interface/realm-factory";
import { FireMonster, FireWeapon } from "../concrete-classes/fire";
import { Monster } from "../interfaces/monster";
import { Weapon } from "../interfaces/weapon";

export class FireRealmFactory implements RealmFactory {
    createMonster(): Monster {
        return new FireMonster();
    }
    createWeapon(): Weapon {
        return new FireWeapon();
    }
}