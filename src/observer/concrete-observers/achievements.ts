import { Observer } from "../interfaces/observer";

export class Achievements implements Observer {
    update(score: number): void {
        if (score >= 100) {
            console.log('Achievements: Player reached 100 points!');
        }
    }
}