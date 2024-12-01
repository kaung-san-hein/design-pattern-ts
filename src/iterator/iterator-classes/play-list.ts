import { NameOrderIterator } from "../concrete-iterators/name-order-iterator";
import { RandomOrderIterator } from "../concrete-iterators/random-order-iterator";
import { SimpleOrderIterator } from "../concrete-iterators/simple-order-iterator";
import { MusicCollection } from "../interfaces/music-collection";
import { MusicIterator } from "../interfaces/music-iterator";

export class Playlist implements MusicCollection {
    private songs: string[] = [];

    addSong(song: string): void {
        this.songs.push(song);
    }

    createIterator(type: string): MusicIterator {
        switch (type) {
            case 'random':
                return new RandomOrderIterator(this.songs);
            case 'nameOrder':
                return new NameOrderIterator(this.songs);
            default:
                return new SimpleOrderIterator(this.songs);
        }
    }
}
