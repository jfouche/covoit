class AppController {

    AppController() {
    }

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
}

export let theAppController = new AppController();
