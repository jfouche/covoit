/// <reference path="../../typings/webcomponents.d.ts" />

declare function require(filename: string): string;
declare function datepicker(selector: string): string;

let html = require("./app-page-trajets.html");

class AppPageTrajetsElement extends HTMLDivElement {

    createdCallback() {
        this.innerHTML = html;
        const picker = datepicker('#date-trajet');
    }
}

export function registerAppPageTrajetsElement() {
    document.registerElement("app-trajets-page", AppPageTrajetsElement);
}
