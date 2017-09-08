import * as evt from "./lite-event"

export class User {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

class AppController {
    private readonly onUser = new evt.LiteEvent<User>();

    model: AppModel = new AppModel();

    showPage(page: string) {
        switch (page) {
            case "trajets":
                document.getElementById("page-trajets").style.display = "block";
                document.getElementById("page-history").style.display = "none";
                document.getElementById("page-users").style.display = "none";
                break;

            case "history":
                document.getElementById("page-trajets").style.display = "none";
                document.getElementById("page-history").style.display = "block";
                document.getElementById("page-users").style.display = "none";
                break;

            case "users":
                document.getElementById("page-trajets").style.display = "none";
                document.getElementById("page-history").style.display = "none";
                document.getElementById("page-users").style.display = "block";
                break;

            default:
                break;
        }
    }

    addUser(name: string) {
        let user = this.model.addUser(name);
        this.onUser.trigger(user);
    }

    public get user() { return this.onUser.expose(); }
}

class AppModel {
    users: User[] = [];

    addUser(name: string) {
        let user = new User(name);
        this.users.push(user);
        return user;
    }

}

export let theAppController = new AppController();
