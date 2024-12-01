import { MusicIterator } from "../interfaces/music-iterator";

export class RandomOrderIterator implements MusicIterator {
    private shuffled: string[];
    private index = 0;

    constructor(songs: string[]) {
        this.shuffled = [...songs].sort(() => Math.random() - 0.5);
    }

    hasNext(): boolean {
        return this.index < this.shuffled.length;
    }

    next(): string {
        return this.shuffled[this.index++];
    }
}
