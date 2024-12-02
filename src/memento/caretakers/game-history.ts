import { GameStateMemento } from "../memento-classes/game-state-memento";

export class GameHistory {
    private mementos: GameStateMemento[] = [];

    addMemento(memento: GameStateMemento): void {
        this.mementos.push(memento);
        console.log(`Game state saved to history.`);
    }

    getMemento(index: number): GameStateMemento {
        return this.mementos[index];
    }
}