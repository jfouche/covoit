/// <reference path="../../typings/webcomponents.d.ts" />

import { theAppController, User } from "../../app-controller"
import { registerAppUserListElement } from "./app-user-list-element"

declare function require(filename: string): string;

let html = require("./app-user-list.html");

class AppListUser extends HTMLDivElement {

    createdCallback(): void {
        this.innerHTML = html;
    }

    attachedCallback(): void {
        theAppController.user.on((user:User) => {
            this.addUser(user);
        })
    }

    private addUser(user: User) {
        let userElem = document.createElement("app-user-list-element");
        userElem.setAttribute("name", user.name);
        this.children[0].appendChild(userElem);
    }
}

export function registerAppListUserElement() {
    registerAppUserListElement();
    document.registerElement("app-user-list", AppListUser);
}
