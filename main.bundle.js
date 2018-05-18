webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<app-board>\n  \n</app-board>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cell_cell_component__ = __webpack_require__("./src/app/cell/cell.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__board_board_component__ = __webpack_require__("./src/app/board/board.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__data_service__ = __webpack_require__("./src/app/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__cell_cell_component__["a" /* CellComponent */],
                __WEBPACK_IMPORTED_MODULE_4__board_board_component__["a" /* BoardComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_5__data_service__["a" /* DataService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/board/board.component.css":
/***/ (function(module, exports) {

module.exports = ".container{\r\n    margin:200px auto;\r\n    display: table;\r\n}\r\n.buttonn{\r\n    float:right;\r\n    display:-ms-inline-grid;\r\n    display:inline-grid;\r\n    position: relative;\r\n    bottom:200px;\r\n    left:70px;\r\n   \r\n}\r\napp-cell{\r\n    display: inline-block\r\n}\r\n.gameStatus{\r\n  \r\n    padding:10px;\r\n    width:150px;\r\n    margin-bottom: 10px;\r\n    color:rgb(81, 85, 85);\r\n    font-size: 25px;\r\n    font-family: 'Merriweather', serif;\r\n}\r\n#heading{\r\n    position: relative;\r\n    left: 42%;\r\n    top:150px;\r\n    width:300px;\r\n    font-size: 55px;\r\n    color:#503268;\r\n}\r\nh3{\r\n    position: relative;\r\n    left: 46%;\r\n    top:150px;\r\n    width:300px;\r\n    font-size: 20px;\r\n    color:#503268;\r\n}\r\nbutton {\r\n    background: #4c83a8;\r\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#4c83a8), to(#198bd1));\r\n  background-image: linear-gradient(to bottom, #4c83a8, #198bd1);\r\n  border-radius: 20px;\r\n  font-family: Arial;\r\n  color: #ffffff;\r\n  font-size: 15px;\r\n  padding: 6px 11px 6px 9px;\r\n  text-decoration: none;\r\n  }\r\nbutton:hover {\r\n    background: #3b6f8f;\r\n    background-image: -webkit-gradient(linear, left top, left bottom, from(#3b6f8f), to(#519e8b));\r\n    background-image: linear-gradient(to bottom, #3b6f8f, #519e8b);\r\n    text-decoration: none;\r\n  }\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/board/board.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Heading stays the same -->\n<h1 id=\"heading\"> Tic Tac Toe </h1>\n<!-- Ready message goes away when a move takes place -->\n<h3 *ngIf='!steps.length'> Ready to start </h3>\n<div class=\"container\">\n<!-- Current turn displayed  -->\n    <div class=\"gameStatus\">\n        {{gameStatusMessage()}}\n      </div>\n\n<!-- displaying cells  -->\n    <div *ngFor=\"let r of [0,1,2]\">\n    <app-cell *ngFor=\"let c of [0,1,2];let i=index\"  (click)=\"addvalue(r*3+c)\" [value]=\"values[r*3+c]\"> </app-cell>\n    </div>\n\n    <div style=\"margin-left:40%;\">\n    <!-- Restarts the game  -->\n      <button (click)=\"restartGames()\">RESET</button>\n    </div>    \n    <div class=\"buttonn\">\n    <!-- Steps shown according to steps array  -->\n        <button *ngFor=\"let btn of steps;let i=index\" (click)=\"verifySteps(btn,i)\">\n          step{{i+1}}\n    </button>\n    <br>\n    </div>\n      \n</div>\n"

/***/ }),

/***/ "./src/app/board/board.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("./src/app/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BoardComponent = /** @class */ (function () {
    function BoardComponent(_ser) {
        this._ser = _ser;
        this.steps = [];
        this.checkproperty = false;
    }
    BoardComponent.prototype.gameStatusMessage = function () {
        return this._ser.gameStatusMessage;
    };
    BoardComponent.prototype.ngOnInit = function () {
        this.values = this._ser.values;
        this.steps = this._ser.arrayofSteps;
    };
    BoardComponent.prototype.addvalue = function (z) {
        this._ser.addvalue(z);
        // console.log(this.steps);
    };
    BoardComponent.prototype.restartGames = function () {
        this._ser.restartGame();
        this.values = this._ser.values;
        this.steps = this._ser.arrayofSteps;
    };
    BoardComponent.prototype.verifySteps = function (btn, i) {
        // console.log(this._ser.sign);
        // console.log(btn);
        this._ser.sign = btn[i] == 'X' ? 'O' : 'X';
        console.log(btn[i]);
        this._ser.verifySteps(btn);
        // if(this.checkproperty==false){
        // this._ser.arrayofSteps.splice(i,this._ser.arrayofSteps.length-i);
        // console.log("trefef")
        // }
        this.values = this._ser.values;
        this._ser.checkproperty = true;
    };
    BoardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-board',
            template: __webpack_require__("./src/app/board/board.component.html"),
            styles: [__webpack_require__("./src/app/board/board.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]])
    ], BoardComponent);
    return BoardComponent;
}());



/***/ }),

/***/ "./src/app/cell/cell.component.css":
/***/ (function(module, exports) {

module.exports = "#cell{\r\n    width:60px;\r\n    height:60px;\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n    border:2px solid #4c0c59;\r\n    font-size:60px;    \r\n    display: -webkit-box;    \r\n    display: -ms-flexbox;    \r\n    display: flex;    \r\n    -webkit-box-pack: center;    \r\n        -ms-flex-pack: center;    \r\n            justify-content: center;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n    background-image: url('https://thumbs.dreamstime.com/t/frosted-glass-background-which-can-be-used-as-44310427.jpg')\r\n}\r\n\r\n#cell:hover{\r\n    background-color:#95979b;\r\n}\r\n"

/***/ }),

/***/ "./src/app/cell/cell.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"cell\">\n  {{value}}\n  </div>\n"

/***/ }),

/***/ "./src/app/cell/cell.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CellComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CellComponent = /** @class */ (function () {
    function CellComponent() {
    }
    CellComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Object)
    ], CellComponent.prototype, "value", void 0);
    CellComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-cell',
            template: __webpack_require__("./src/app/cell/cell.component.html"),
            styles: [__webpack_require__("./src/app/cell/cell.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CellComponent);
    return CellComponent;
}());



/***/ }),

/***/ "./src/app/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DataService = /** @class */ (function () {
    function DataService() {
        /* Global variables */
        this.values = Array(9).fill(null);
        /* Initial turn is always X */
        this.sign = "X";
        /* Winner is not yet determined */
        this.winner = null;
        /* Steps will be stored here */
        this.arrayofSteps = [];
    }
    Object.defineProperty(DataService.prototype, "gameStatusMessage", {
        /* If will variable has a value we say that person won  otherwise next turn*/
        get: function () {
            return this.winner ? " Player " + this.winner + " has won!" :
                "Player " + this.sign + "'s turn";
        },
        enumerable: true,
        configurable: true
    });
    DataService.prototype.addvalue = function (z) {
        if (!this.winner && !this.values[z]) {
            if (this.checkproperty == true) {
                var updatedCell = Array(9).fill(null);
                var j = void 0;
                var d = void 0;
                console.log(this.values);
                for (var i in this.arrayofSteps) {
                    if (this.arrayofSteps[i] == this.values) {
                        j = i;
                    }
                }
                d = this.arrayofSteps.slice(0, j + 1);
                for (var i = 0; i < this.values.length; i++) {
                    if (this.values[i] != null) {
                        updatedCell[i] = this.values[i];
                    }
                }
                updatedCell[z] = this.sign;
                d.push(updatedCell);
                this.values = updatedCell;
                this.arrayofSteps = d;
            }
            else {
                this.values[z] = this.sign;
                this.arrayofSteps.push(this.values.slice());
                if (this.checkwinner()) {
                    this.winner = this.sign;
                }
            }
            this.sign = this.sign === 'X' ? 'O' : 'X';
        }
    };
    /*  Decides if there is a winner  */
    DataService.prototype.checkwinner = function () {
        var conditions = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6] // diagonal 
        ];
        for (var _i = 0, conditions_1 = conditions; _i < conditions_1.length; _i++) {
            var condition = conditions_1[_i];
            if (this.values[condition[0]]
                && this.values[condition[0]] === this.values[condition[1]]
                && this.values[condition[1]] === this.values[condition[2]]) {
                return true;
            }
        }
        return false;
    };
    /* Restarts the game again from the beginning*/
    DataService.prototype.restartGame = function () {
        this.values = Array(9).fill(null);
        this.sign = 'X';
        this.winner = null;
        this.arrayofSteps = [];
    };
    DataService.prototype.verifySteps = function (btn) {
        this.values = btn;
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map