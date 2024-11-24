import { BasicCharacter } from "./concrete-components/basic-character";
import { AttackBoostDecorator } from "./concrete-decorators/attack-boost-decorator";
import { HealthBoostDecorator } from "./concrete-decorators/health-boost-decorator";
import { SpeedBoostDecorator } from "./concrete-decorators/speed-boost-decorator";
import { GameCharacter } from "./interfaces/game-character";

// Create a basic character
let character: GameCharacter = new BasicCharacter();
console.log(character.getDescription());
console.log(`Speed: ${character.getSpeed()}, Attack: ${character.getAttack()}, Health: ${character.getHealth()}`);

// Add speed boost
character = new SpeedBoostDecorator(character);
console.log(character.getDescription());
console.log(`Speed: ${character.getSpeed()}, Attack: ${character.getAttack()}, Health: ${character.getHealth()}`);

// Add attack boost
character = new AttackBoostDecorator(character);
console.log(character.getDescription());
console.log(`Speed: ${character.getSpeed()}, Attack: ${character.getAttack()}, Health: ${character.getHealth()}`);

// Add health boost
character = new HealthBoostDecorator(character);
console.log(character.getDescription());
console.log(`Speed: ${character.getSpeed()}, Attack: ${character.getAttack()}, Health: ${character.getHealth()}`);
