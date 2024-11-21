import { Monster } from "../interfaces/monster";
import { Weapon } from "../interfaces/weapon";

export interface RealmFactory {
    createMonster(): Monster;
    createWeapon(): Weapon;
}