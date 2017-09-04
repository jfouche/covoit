/// <reference path="../../typings/webcomponents.d.ts" />

declare function require(filename: string): string;

let html = require("./app-user-list.html");

class AppListUser extends HTMLDivElement {

    createdCallback(): void {
        this.innerHTML = html;
    }

    attachedCallback(): void {
    }
}

export function registerAppListUserElement() {
    document.registerElement("app-user-list", AppListUser);
}
