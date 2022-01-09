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
            ['上原歩夢', 50],
            ['優木せつ菜', 50]
        ]
    },
    donut: {
        title: 'アイドルは誰が好き？'
    }
});

setTimeout(() => {
    chart.load({
        columns: [
        ['上原歩夢', 30],
        ['優木せつ菜', 30],
        ['宮下愛', 30]
    ]
    });
}, 3000);
setTimeout(() => {
    chart.unload({
        ids: '優木せつ菜'
    });
}, 5000);