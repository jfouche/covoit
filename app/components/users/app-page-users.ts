/// <reference path="../../typings/webcomponents.d.ts" />

import { registerAppFormUserElement } from "./app-user-form"
import { registerAppListUserElement } from "./app-user-list"

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
