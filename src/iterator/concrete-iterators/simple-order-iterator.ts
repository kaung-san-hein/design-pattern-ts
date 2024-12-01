import { MusicIterator } from "../interfaces/music-iterator";

export class SimpleOrderIterator implements MusicIterator {
    private index = 0;

    constructor(private songs: string[]) { }

    hasNext(): boolean {
        return this.index < this.songs.length;
    }

    next(): string {
        return this.songs[this.index++];
    }
}
