import { Observer } from "../interfaces/observer";

export class Analytics implements Observer {
    update(score: number): void {
        console.log(`Analytics: Tracking new score ${score}`);
    }
}