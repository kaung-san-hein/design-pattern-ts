import { Monster } from "../interfaces/monster";
import { Weapon } from "../interfaces/weapon";

export class AirMonster implements Monster {
    attack(): void {
        console.log("AirMonster attacks with wind blades!");
    }
}

export class AirWeapon implements Weapon {
    use(): void {
        console.log("AirWeapon slashes with high-speed air!");
    }
}