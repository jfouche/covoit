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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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
var app_menu_1 = __webpack_require__(1);
var app_page_trajets_1 = __webpack_require__(4);
var app_page_history_1 = __webpack_require__(6);
var app_page_users_1 = __webpack_require__(8);
var html = __webpack_require__(12);
var AppElement = (function (_super) {
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
/* 1 */
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
var app_controller_1 = __webpack_require__(2);
var html = __webpack_require__(3);
var AppMenuElement = (function (_super) {
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
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var AppController = (function () {
    function AppController() {
    }
    AppController.prototype.AppController = function () {
    };
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
    return AppController;
}());
exports.theAppController = new AppController();


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = "<div id=\"app-menu\">\r\n    <a id=\"app-menu-trajets\">Trajets</a>\r\n    <a id=\"app-menu-history\">History</a>\r\n    <a id=\"app-menu-users\">Users</a>\r\n</div>";

/***/ }),
/* 4 */
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
var html = __webpack_require__(5);
var AppPageTrajetsElement = (function (_super) {
    __extends(AppPageTrajetsElement, _super);
    function AppPageTrajetsElement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppPageTrajetsElement.prototype.createdCallback = function () {
        this.innerHTML = html;
    };
    return AppPageTrajetsElement;
}(HTMLDivElement));
function registerAppPageTrajetsElement() {
    document.registerElement("app-trajets-page", AppPageTrajetsElement);
}
exports.registerAppPageTrajetsElement = registerAppPageTrajetsElement;


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <h1>Trajets</h1>\r\n</div>";

/***/ }),
/* 6 */
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
var html = __webpack_require__(7);
var AppPageHistoryElement = (function (_super) {
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
/* 7 */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <h1>History</h1>\r\n</div>";

/***/ }),
/* 8 */
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
var app_form_user_1 = __webpack_require__(9);
var html = __webpack_require__(11);
var AppPageUsersElement = (function (_super) {
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
    app_form_user_1.registerAppFormUserElement();
    document.registerElement("app-users-page", AppPageUsersElement);
}
exports.registerAppPageUsersElement = registerAppPageUsersElement;


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
var html = __webpack_require__(10);
var AppFormUser = (function (_super) {
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
    };
    return AppFormUser;
}(HTMLDivElement));
function registerAppFormUserElement() {
    document.registerElement("app-user-form", AppFormUser);
}
exports.registerAppFormUserElement = registerAppFormUserElement;


/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = "<form>\r\n    <label for=\"user-name\">Name</label>\r\n    <input type=\"text\" id=\"user-name\">\r\n    <button type=\"button\">add</button>\r\n</form>";

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <h1>Users</h1>\r\n    <app-user-form></app-user-form>\r\n</div>";

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = "<app-menu></app-menu>\r\n\r\n<app-trajets-page id=\"page-trajets\"></app-trajets-page>\r\n<app-history-page id=\"page-history\"></app-history-page>\r\n<app-users-page id=\"page-users\"></app-users-page>";

/***/ })
/******/ ]);
//# sourceMappingURL=app.bundle.js.map