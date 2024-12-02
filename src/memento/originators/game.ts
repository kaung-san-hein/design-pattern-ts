import { GameStateMemento } from "../memento-classes/game-state-memento";

export class Game {
    private state: string = "Start";

    setState(state: string): void {
        this.state = state;
        console.log(`Game state updated to: ${this.state}`);
    }

    getState(): string {
        return this.state;
    }

    save(): GameStateMemento {
        console.log(`Saving game state: ${this.state}`);
        return new GameStateMemento(this.state);
    }

    restore(memento: GameStateMemento): void {
        this.state = memento.getState();
        console.log(`Game state restored to: ${this.state}`);
    }
}