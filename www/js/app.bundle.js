/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var evt = __webpack_require__(3);
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());
exports.User = User;
var AppController = /** @class */ (function () {
    function AppController() {
        this.onUser = new evt.LiteEvent();
        this.model = new AppModel();
    }
    AppController.prototype.showPage = function (page) {
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
    };
    AppController.prototype.addUser = function (name) {
        var user = this.model.addUser(name);
        this.onUser.trigger(user);
    };
    Object.defineProperty(AppController.prototype, "user", {
        get: function () { return this.onUser.expose(); },
        enumerable: true,
        configurable: true
    });
    return AppController;
}());
var AppModel = /** @class */ (function () {
    function AppModel() {
        this.users = [];
    }
    AppModel.prototype.addUser = function (name) {
        var user = new User(name);
        this.users.push(user);
        return user;
    };
    return AppModel;
}());
exports.theAppController = new AppController();


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/// <reference path="./typings/webcomponents.d.ts" />
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var app_menu_1 = __webpack_require__(2);
var app_page_trajets_1 = __webpack_require__(5);
var app_page_history_1 = __webpack_require__(7);
var app_page_users_1 = __webpack_require__(9);
var html = __webpack_require__(17);
var AppElement = /** @class */ (function (_super) {
    __extends(AppElement, _super);
    function AppElement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppElement.prototype.createdCallback = function () {
        this.innerHTML = html;
    };
    return AppElement;
}(HTMLDivElement));
function registerAppElement() {
    document.registerElement("app-main", AppElement);
}
app_menu_1.registerAppMenuElement();
app_page_users_1.registerAppPageUsersElement();
app_page_history_1.registerAppPageHistoryElement();
app_page_trajets_1.registerAppPageTrajetsElement();
registerAppElement();


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/// <reference path="../typings/webcomponents.d.ts" />
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var app_controller_1 = __webpack_require__(0);
var html = __webpack_require__(4);
var AppMenuElement = /** @class */ (function (_super) {
    __extends(AppMenuElement, _super);
    function AppMenuElement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppMenuElement.prototype.createdCallback = function () {
        this.innerHTML = html;
        this.btnTrajets = document.getElementById("app-menu-trajets");
        this.btnHistory = document.getElementById("app-menu-history");
        this.btnUsers = document.getElementById("app-menu-users");
    };
    AppMenuElement.prototype.attachedCallback = function () {
        this.btnTrajets.addEventListener("click", function (e) {
            app_controller_1.theAppController.showPage("trajets");
        });
        this.btnHistory.addEventListener("click", function (e) {
            app_controller_1.theAppController.showPage("history");
        });
        this.btnUsers.addEventListener("click", function (e) {
            app_controller_1.theAppController.showPage("users");
        });
    };
    return AppMenuElement;
}(HTMLDivElement));
function registerAppMenuElement() {
    document.registerElement("app-menu", AppMenuElement);
}
exports.registerAppMenuElement = registerAppMenuElement;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var LiteEvent = /** @class */ (function () {
    function LiteEvent() {
        this.handlers = [];
    }
    LiteEvent.prototype.on = function (handler) {
        this.handlers.push(handler);
    };
    LiteEvent.prototype.off = function (handler) {
        this.handlers = this.handlers.filter(function (h) { return h !== handler; });
    };
    LiteEvent.prototype.trigger = function (data) {
        this.handlers.slice(0).forEach(function (h) { return h(data); });
    };
    LiteEvent.prototype.expose = function () {
        return this;
    };
    return LiteEvent;
}());
exports.LiteEvent = LiteEvent;


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = "<div id=\"app-menu\">\r\n    <a id=\"app-menu-trajets\">Trajets</a>\r\n    <a id=\"app-menu-history\">History</a>\r\n    <a id=\"app-menu-users\">Users</a>\r\n</div>";

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/// <reference path="../../typings/webcomponents.d.ts" />
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var html = __webpack_require__(6);
var AppPageTrajetsElement = /** @class */ (function (_super) {
    __extends(AppPageTrajetsElement, _super);
    function AppPageTrajetsElement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppPageTrajetsElement.prototype.createdCallback = function () {
        this.innerHTML = html;
        var picker = datepicker('#date-trajet');
    };
    return AppPageTrajetsElement;
}(HTMLDivElement));
function registerAppPageTrajetsElement() {
    document.registerElement("app-trajets-page", AppPageTrajetsElement);
}
exports.registerAppPageTrajetsElement = registerAppPageTrajetsElement;


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <h1>Trajet</h1>\r\n    <div>date:<input type=\"text\" id=\"date-trajet\">\r\n    </div>\r\n\r\n</div>";

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/// <reference path="../../typings/webcomponents.d.ts" />
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var html = __webpack_require__(8);
var AppPageHistoryElement = /** @class */ (function (_super) {
    __extends(AppPageHistoryElement, _super);
    function AppPageHistoryElement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppPageHistoryElement.prototype.createdCallback = function () {
        this.innerHTML = html;
    };
    return AppPageHistoryElement;
}(HTMLDivElement));
function registerAppPageHistoryElement() {
    document.registerElement("app-history-page", AppPageHistoryElement);
}
exports.registerAppPageHistoryElement = registerAppPageHistoryElement;


/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <h1>History</h1>\r\n</div>";

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/// <reference path="../../typings/webcomponents.d.ts" />
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var app_user_form_1 = __webpack_require__(10);
var app_user_list_1 = __webpack_require__(12);
var html = __webpack_require__(16);
var AppPageUsersElement = /** @class */ (function (_super) {
    __extends(AppPageUsersElement, _super);
    function AppPageUsersElement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppPageUsersElement.prototype.createdCallback = function () {
        this.innerHTML = html;
    };
    return AppPageUsersElement;
}(HTMLDivElement));
function registerAppPageUsersElement() {
    app_user_form_1.registerAppFormUserElement();
    app_user_list_1.registerAppListUserElement();
    document.registerElement("app-users-page", AppPageUsersElement);
}
exports.registerAppPageUsersElement = registerAppPageUsersElement;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/// <reference path="../../typings/webcomponents.d.ts" />
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var app_controller_1 = __webpack_require__(0);
var html = __webpack_require__(11);
var AppFormUser = /** @class */ (function (_super) {
    __extends(AppFormUser, _super);
    function AppFormUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppFormUser.prototype.createdCallback = function () {
        this.innerHTML = html;
        this.userInput = this.querySelector("input");
        this.submitBtn = this.querySelector("button");
    };
    AppFormUser.prototype.attachedCallback = function () {
        var _this = this;
        this.submitBtn.addEventListener("click", function (e) {
            _this.onAddUser();
        });
    };
    AppFormUser.prototype.onAddUser = function () {
        var userName = this.userInput.value;
        this.userInput.value = "";
        app_controller_1.theAppController.addUser(userName);
    };
    return AppFormUser;
}(HTMLDivElement));
function registerAppFormUserElement() {
    document.registerElement("app-user-form", AppFormUser);
}
exports.registerAppFormUserElement = registerAppFormUserElement;


/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = "<form>\r\n    <label for=\"user-name\">Name</label>\r\n    <input type=\"text\" id=\"user-name\">\r\n    <button type=\"button\">add</button>\r\n</form>";

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/// <reference path="../../typings/webcomponents.d.ts" />
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var app_controller_1 = __webpack_require__(0);
var app_user_list_element_1 = __webpack_require__(13);
var html = __webpack_require__(15);
var AppListUser = /** @class */ (function (_super) {
    __extends(AppListUser, _super);
    function AppListUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppListUser.prototype.createdCallback = function () {
        this.innerHTML = html;
    };
    AppListUser.prototype.attachedCallback = function () {
        var _this = this;
        app_controller_1.theAppController.user.on(function (user) {
            _this.addUser(user);
        });
    };
    AppListUser.prototype.addUser = function (user) {
        var userElem = document.createElement("app-user-list-element");
        userElem.setAttribute("name", user.name);
        this.children[0].appendChild(userElem);
    };
    return AppListUser;
}(HTMLDivElement));
function registerAppListUserElement() {
    app_user_list_element_1.registerAppUserListElement();
    document.registerElement("app-user-list", AppListUser);
}
exports.registerAppListUserElement = registerAppListUserElement;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/// <reference path="../../typings/webcomponents.d.ts" />
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var html = __webpack_require__(14);
var AppUserListElement = /** @class */ (function (_super) {
    __extends(AppUserListElement, _super);
    function AppUserListElement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppUserListElement.prototype.createdCallback = function () {
        this.innerHTML = html;
    };
    AppUserListElement.prototype.attachedCallback = function () {
        var name = this.getAttribute("name");
        this.getElementsByClassName("user-name")[0].innerHTML = name;
    };
    return AppUserListElement;
}(HTMLDivElement));
function registerAppUserListElement() {
    document.registerElement("app-user-list-element", AppUserListElement);
}
exports.registerAppUserListElement = registerAppUserListElement;


/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = "<div>\n    <span class=\"user-name\">USER NAME</span>\n</div>";

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = "<div>\r\n</div>";

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <h1>Users</h1>\r\n    <app-user-form></app-user-form>\r\n    <app-user-list></app-user-list>\r\n</div>";

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = "<app-menu></app-menu>\r\n\r\n<app-trajets-page id=\"page-trajets\"></app-trajets-page>\r\n<app-history-page id=\"page-history\"></app-history-page>\r\n<app-users-page id=\"page-users\"></app-users-page>";

/***/ })
/******/ ]);
//# sourceMappingURL=app.bundle.js.map