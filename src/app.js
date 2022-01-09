"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const item_1 = require("./item");
const c3 = __importStar(require("c3"));
const elem = document.getElementById('output');
const aBook = new item_1.Item('Introduction to TypeScript', 2080);
aBook.say(elem);
let chart = c3.generate({
    bindto: '#chart',
    data: {
        type: 'donut',
        columns: [
            ['上原亜衣', 50],
            ['みづなれい', 50]
        ]
    },
    donut: {
        title: 'AV女優は誰が好き？'
    }
});
setTimeout(() => {
    chart.load({
        columns: [
            ['上原亜衣', 30],
            ['みづなれい', 30],
            ['波多野結衣', 30]
        ]
    });
}, 3000);
setTimeout(() => {
    chart.unload({
        ids: '安斎らら'
    });
}, 5000);
