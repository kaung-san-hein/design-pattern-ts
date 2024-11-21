import { Monster } from "../interfaces/monster";
import { Weapon } from "../interfaces/weapon";

export class IceMonster implements Monster {
    attack(): void {
        console.log("IceMonster attacks with frost!");
    }
}

export class IceWeapon implements Weapon {
    use(): void {
        console.log("IceWeapon freezes the enemy!");
    }
}