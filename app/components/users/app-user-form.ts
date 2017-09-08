/// <reference path="../../typings/webcomponents.d.ts" />

import { theAppController } from "../../app-controller"

declare function require(filename: string): string;

let html = require("./app-user-form.html");

class AppFormUser extends HTMLDivElement {

    private userInput: HTMLInputElement;
    private submitBtn: Element

    createdCallback(): void {
        this.innerHTML = html;
        
        this.userInput = this.querySelector("input");
        this.submitBtn = this.querySelector("button");
    }

    attachedCallback(): void {
        this.submitBtn.addEventListener("click", (e) => {
            this.onAddUser();
        });
    }

    private onAddUser() {
        let userName = this.userInput.value;
        this.userInput.value = "";
        theAppController.addUser(userName);
    }
}

export function registerAppFormUserElement() {
    document.registerElement("app-user-form", AppFormUser);
}
