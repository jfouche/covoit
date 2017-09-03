/// <reference path="../typings/webcomponents.d.ts" />

import { theAppController } from "../app-controller"

declare function require(filename: string): string;

let html = require("./app-menu.html");

class AppMenuElement extends HTMLDivElement {

    btnTrajets: HTMLElement;
    btnHistory: HTMLElement;
    btnUsers: HTMLElement;
    
    createdCallback() {
        this.innerHTML = html;

        this.btnTrajets = document.getElementById("app-menu-trajets");
        this.btnHistory = document.getElementById("app-menu-history");
        this.btnUsers = document.getElementById("app-menu-users");
    }

    attachedCallback() {
        this.btnTrajets.addEventListener("click", (e) => {
            theAppController.showPage("trajets");
        });
        this.btnHistory.addEventListener("click", (e) => {
            theAppController.showPage("history");
        });
        this.btnUsers.addEventListener("click", (e) => {
            theAppController.showPage("users");
        });
    }
}

export function registerAppMenuElement() {
    document.registerElement("app-menu", AppMenuElement);
}
