"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Item = void 0;
class Item {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    say(elem) {
        if (elem) {
            elem.innerHTML = '書名:' + this.name + '価格:' + this.price + '円';
        }
    }
}
exports.Item = Item;
