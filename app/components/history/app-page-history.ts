/// <reference path="../../typings/webcomponents.d.ts" />

declare function require(filename: string): string;

let html = require("./app-page-history.html");

class AppPageHistoryElement extends HTMLDivElement {

    createdCallback() {
        this.innerHTML = html;
    }
}

export function registerAppPageHistoryElement() {
    document.registerElement("app-history-page", AppPageHistoryElement);
}
