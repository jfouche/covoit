/// <reference path="../../typings/webcomponents.d.ts" />

declare function require(filename: string): string;

let html = require("./app-user-list-element.html");

class AppUserListElement extends HTMLDivElement {

    createdCallback() {
        this.innerHTML = html;
    }
}

export function registerAppUserListElement() {
    document.registerElement("app-user-list-element", AppUserListElement);
}
