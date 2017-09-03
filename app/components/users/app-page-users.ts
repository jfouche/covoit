/// <reference path="../../typings/webcomponents.d.ts" />

import { registerAppFormUserElement } from "./app-form-user"

declare function require(filename: string): string;

let html = require("./app-page-users.html");

class AppPageUsersElement extends HTMLDivElement {

    createdCallback() {
        this.innerHTML = html;
    }
}

export function registerAppPageUsersElement() {
    registerAppFormUserElement();
    document.registerElement("app-users-page", AppPageUsersElement);
}
