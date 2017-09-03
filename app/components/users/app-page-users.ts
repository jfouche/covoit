/// <reference path="../../typings/webcomponents.d.ts" />

declare function require(filename: string): string;

let html = require("./app-page-users.html");

class AppUsersPageElement extends HTMLDivElement {

    createdCallback() {
        this.innerHTML = html;
    }
}

export function registerAppUsersPageElement() {
    document.registerElement("app-user-page", AppUsersPageElement);
}
