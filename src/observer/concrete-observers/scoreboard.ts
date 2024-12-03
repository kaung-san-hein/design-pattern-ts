import { Observer } from "../interfaces/observer";

export class Scoreboard implements Observer {
    update(score: number): void {
        console.log(`Scoreboard: Updated score to ${score}`);
    }
}