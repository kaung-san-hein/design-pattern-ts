export interface MusicIterator {
    hasNext(): boolean;
    next(): string; // Returns the next song
}