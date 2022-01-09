import {Item} from './item';
import * as c3 from 'c3';

const elem = document.getElementById('output');
const aBook = new Item('Introduction to TypeScript', 2080);
aBook.say(elem);

let chart = c3.generate({
    bindto: '#chart',
    data: {
        type: 'donut',
        columns: [
            ['BD', 50],
            ['SP', 50]
        ]
    },
    donut: {
        title: 'ポケモンどっち？'
    }
});