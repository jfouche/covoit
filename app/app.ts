/// <reference path="./typings/webcomponents.d.ts" />

import { registerAppMenuElement } from "./components/app-menu"
import { registerAppPageTrajetsElement } from "./components/trajets/app-page-trajets"
import { registerAppPageHistoryElement } from "./components/history/app-page-history"
import { registerAppPageUsersElement } from "./components/users/app-page-users"

declare function require(filename: string): string;

let html = require("./app.html");

class AppElement extends HTMLDivElement {

    createdCallback() {
        this.innerHTML = html;
    }
}

function registerAppElement() {
    document.registerElement("app-main", AppElement);
}


registerAppMenuElement();
registerAppPageUsersElement();
registerAppPageHistoryElement();
registerAppPageTrajetsElement();
registerAppElement();
