import { Monster } from "../interfaces/monster";
import { Weapon } from "../interfaces/weapon";

export class FireMonster implements Monster {
    attack(): void {
        console.log("FireMonster attacks with flames!");
    }
}

export class FireWeapon implements Weapon {
    use(): void {
        console.log("FireWeapon burns the enemy!");
    }
}