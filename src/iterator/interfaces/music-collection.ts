import { MusicIterator } from "./music-iterator";

export interface MusicCollection {
    createIterator(type: string): MusicIterator;
    addSong(song: string): void;
}