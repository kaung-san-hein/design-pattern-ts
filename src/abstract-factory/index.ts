import { RealmFactory } from "./abstract-interface/realm-factory";
import { AirRealmFactory } from "./concrete-factory/air-realm";
import { FireRealmFactory } from "./concrete-factory/fire-realm";
import { IceRealmFactory } from "./concrete-factory/ice-realm";
import { Monster } from "./interfaces/monster";
import { Weapon } from "./interfaces/weapon";

class GameWorld {
    private monster: Monster;
    private weapon: Weapon;

    constructor(factory: RealmFactory) {
        this.monster = factory.createMonster();
        this.weapon = factory.createWeapon();
    }

    encounter(): void {
        console.log("An encounter begins!");
        this.monster.attack();
        this.weapon.use();
    }
}

console.log("Welcome to the Ice Realm:");
const iceWorld = new GameWorld(new IceRealmFactory());
iceWorld.encounter();

console.log("\nWelcome to the Fire Realm:");
const fireWorld = new GameWorld(new FireRealmFactory());
fireWorld.encounter();

console.log("\nWelcome to the Air Realm:");
const airWorld = new GameWorld(new AirRealmFactory());
airWorld.encounter();