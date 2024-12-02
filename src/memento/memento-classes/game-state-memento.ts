export class GameStateMemento {
    constructor(private readonly state: string) { }

    getState(): string {
        return this.state;
    }
}