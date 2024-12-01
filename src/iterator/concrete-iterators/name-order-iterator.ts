import { MusicIterator } from "../interfaces/music-iterator";

export class NameOrderIterator implements MusicIterator {
    private sorted: string[];
    private index = 0;

    constructor(songs: string[]) {
        this.sorted = [...songs].sort();
    }

    hasNext(): boolean {
        return this.index < this.sorted.length;
    }

    next(): string {
        return this.sorted[this.index++];
    }
}
