import * as React from "react";

export interface AppMenuProps {  }

export class AppMenu extends React.Component<AppMenuProps, undefined> {

    private onTrajet() {
        document.getElementById("app-trajet").style.display = "block";
        document.getElementById("app-history").style.display = "none";
        document.getElementById("app-users").style.display = "none";
    }

    private onHistory() {
        document.getElementById("app-trajet").style.display = "none";
        document.getElementById("app-history").style.display = "block";
        document.getElementById("app-users").style.display = "none";
    }

    private onUsers() {
        document.getElementById("app-trajet").style.display = "none";
        document.getElementById("app-history").style.display = "none";
        document.getElementById("app-users").style.display = "block";
    }

    render() {
        return <ul>
            <li><a onClick={() => this.onTrajet()}>trajets</a></li>
            <li><a onClick={() => this.onHistory()}>history</a></li>
            <li><a onClick={() => this.onUsers()}>users</a></li>
        </ul>
    }
}
