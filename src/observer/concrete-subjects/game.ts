import { Observer } from "../interfaces/observer";
import { Subject } from "../interfaces/subject";

export class Game implements Subject {
    private observers: Observer[] = [];
    private score: number = 0;

    subscribe(observer: Observer): void {
        this.observers.push(observer);
    }

    unsubscribe(observer: Observer): void {
        this.observers = this.observers.filter((obs) => obs !== observer);
    }

    notify(): void {
        this.observers.forEach((observer) => observer.update(this.score));
    }

    setScore(newScore: number): void {
        this.score = newScore;
        console.log(`Game: Score updated to ${this.score}`);
        this.notify();
    }

    getScore(): number {
        return this.score;
    }
}