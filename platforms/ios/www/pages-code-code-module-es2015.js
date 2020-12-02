(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-code-code-module"],{

/***/ "G+yW":
/*!*******************************************!*\
  !*** ./src/app/pages/code/code.module.ts ***!
  \*******************************************/
/*! exports provided: CodePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodePageModule", function() { return CodePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _code_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./code-routing.module */ "O+IA");
/* harmony import */ var _code_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./code.page */ "wp6c");







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

/***/ "O+IA":
/*!***************************************************!*\
  !*** ./src/app/pages/code/code-routing.module.ts ***!
  \***************************************************/
/*! exports provided: CodePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodePageRoutingModule", function() { return CodePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _code_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./code.page */ "wp6c");




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

/***/ "QQD3":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/code/code.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content color=\"primary\">\n  <div class=\"header\">\n    <div class=\"left\" routerLink=\"/\" routerDirection=\"back\">\n      <ion-icon name=\"chevron-back-outline\"></ion-icon>\n      <p>Regresar</p>\n    </div>\n    <div class=\"right\">\n      <!-- <p>Regresar</p>\n      <ion-icon name=\"chevron-back-outline\"></ion-icon> -->\n    </div>\n  </div>\n  <div class=\"code-wrapper ion-padding\">\n    <h2>Ingresa tu número</h2>\n    <input [(ngModel)]=\"tel\" type=\"tel\" #telInput placeholder=\"5511223344\">\n    <button class=\"red shadow sendbottom\" (click)=\"registerPhone()\">\n      Enviar código\n    </button>\n  </div>\n</ion-content>");

/***/ }),

/***/ "Wz8Z":
/*!*******************************************!*\
  !*** ./src/app/pages/code/code.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvZGUvY29kZS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "wp6c":
/*!*****************************************!*\
  !*** ./src/app/pages/code/code.page.ts ***!
  \*****************************************/
/*! exports provided: CodePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodePage", function() { return CodePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_code_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./code.page.html */ "QQD3");
/* harmony import */ var _code_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./code.page.scss */ "Wz8Z");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_users_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/users.service */ "6Qg2");






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
                this.resendCode();
                // this.router.navigateByUrl("/verificate");
            }
        });
        // this.router.navigateByUrl("/verificate");
    }
    resendCode() {
        this.userService.getAllUsers().subscribe((res) => {
            for (let u of res.users) {
                if (u.phone.S == "+52" + this.tel) {
                    let user = {
                        username: u.username.S,
                        id: u.id.S,
                    };
                    localStorage.setItem("user", JSON.stringify(user));
                    this.userService.resendCode(user).subscribe((res) => {
                        this.router.navigateByUrl("/verificate");
                    });
                }
            }
        });
    }
};
CodePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_services_users_service__WEBPACK_IMPORTED_MODULE_5__["UsersService"] }
];
CodePage.propDecorators = {
    telInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ["telInput",] }]
};
CodePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-code",
        template: _raw_loader_code_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_code_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CodePage);



/***/ })

}]);
//# sourceMappingURL=pages-code-code-module-es2015.js.map