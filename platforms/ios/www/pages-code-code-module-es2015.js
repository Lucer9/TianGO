(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-code-code-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/code/code.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/code/code.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content color=\"primary\">\n  <div class=\"header\">\n    <div class=\"left\" routerLink=\"/\" routerDirection=\"back\">\n      <ion-icon name=\"chevron-back-outline\"></ion-icon>\n      <p>Regresar</p>\n    </div>\n    <div class=\"right\">\n      <!-- <p>Regresar</p>\n      <ion-icon name=\"chevron-back-outline\"></ion-icon> -->\n    </div>\n  </div>\n  <div class=\"code-wrapper ion-padding\">\n    <h2>Ingresa tu número</h2>\n    <input [(ngModel)]=\"tel\" type=\"tel\" #telInput placeholder=\"5511223344\">\n    <button class=\"red shadow sendbottom\" (click)=\"registerPhone()\">\n      Enviar código\n    </button>\n  </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/code/code-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/code/code-routing.module.ts ***!
  \***************************************************/
/*! exports provided: CodePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodePageRoutingModule", function() { return CodePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _code_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./code.page */ "./src/app/pages/code/code.page.ts");




const routes = [
    {
        path: '',
        component: _code_page__WEBPACK_IMPORTED_MODULE_3__["CodePage"]
    }
];
let CodePageRoutingModule = class CodePageRoutingModule {
};
CodePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CodePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/code/code.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/code/code.module.ts ***!
  \*******************************************/
/*! exports provided: CodePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodePageModule", function() { return CodePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _code_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./code-routing.module */ "./src/app/pages/code/code-routing.module.ts");
/* harmony import */ var _code_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./code.page */ "./src/app/pages/code/code.page.ts");







let CodePageModule = class CodePageModule {
};
CodePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _code_routing_module__WEBPACK_IMPORTED_MODULE_5__["CodePageRoutingModule"]
        ],
        declarations: [_code_page__WEBPACK_IMPORTED_MODULE_6__["CodePage"]]
    })
], CodePageModule);



/***/ }),

/***/ "./src/app/pages/code/code.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/code/code.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvZGUvY29kZS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/code/code.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/code/code.page.ts ***!
  \*****************************************/
/*! exports provided: CodePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodePage", function() { return CodePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/users.service */ "./src/app/services/users.service.ts");




let CodePage = class CodePage {
    constructor(router, userService) {
        this.router = router;
        this.userService = userService;
        this.tel = "";
    }
    ngOnInit() { }
    ionViewLoaded() {
        setTimeout(() => {
            this.telInput.setFocus();
        }, 150);
    }
    registerPhone() {
        this.userService.register("+52" + this.tel).subscribe((res) => {
            let user = {
                username: res.user.username,
                id: res.user.id,
            };
            console.log(res);
            localStorage.setItem("user", JSON.stringify(user));
            this.router.navigateByUrl("/verificate");
        }, (error) => {
            console.log(error);
            if (error.error.error.code == "UsernameExistsException") {
                this.loginPhone();
            }
        });
        // this.router.navigateByUrl("/verificate");
    }
    loginPhone() {
        console.log("trying login");
        this.userService.login("+52" + this.tel).subscribe((res) => {
            console.log(res);
        }, (error) => {
            console.log(error);
            if (error.error.error.code == "UserNotConfirmedException") {
                this.router.navigateByUrl("/verificate");
            }
        });
    }
};
CodePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"] }
];
CodePage.propDecorators = {
    telInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ["telInput",] }]
};
CodePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-code",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./code.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/code/code.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./code.page.scss */ "./src/app/pages/code/code.page.scss")).default]
    })
], CodePage);



/***/ })

}]);
//# sourceMappingURL=pages-code-code-module-es2015.js.map