import { Playlist } from "./iterator-classes/play-list";

const playlist = new Playlist();
playlist.addSong('Song A');
playlist.addSong('Song C');
playlist.addSong('Song B');

console.log('Simple Order:');
const simpleIterator = playlist.createIterator('simple');
while (simpleIterator.hasNext()) {
    console.log(simpleIterator.next());
}

console.log('Random Order:');
const randomIterator = playlist.createIterator('random');
while (randomIterator.hasNext()) {
    console.log(randomIterator.next());
}

console.log('Name Order:');
const nameOrderIterator = playlist.createIterator('nameOrder');
while (nameOrderIterator.hasNext()) {
    console.log(nameOrderIterator.next());
}
