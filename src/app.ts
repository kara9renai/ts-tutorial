import {Item} from './item';
const elem = document.getElementById('output');
const aBook = new Item('Introduction to TypeScript', 2080);
aBook.say(elem);