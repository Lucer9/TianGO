(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-verificate-verificate-module"],{

/***/ "5rRU":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/verificate/verificate.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content color=\"primary\">\n  <div class=\"header\">\n    <div class=\"left\" routerLink=\"/code\" routerDirection=\"back\">\n      <ion-icon name=\"chevron-back-outline\"></ion-icon>\n      <p>Regresar</p>\n    </div>\n    <div class=\"right\">\n      <!-- <p>Regresar</p>\n      <ion-icon name=\"chevron-back-outline\"></ion-icon> -->\n    </div>\n  </div>\n  <div class=\"code-wrapper ion-padding\">\n    <h2>Ingresa tu código</h2>\n    <div class=\"inputs\">\n      \n      <div class=\"container\" [ngClass]=\"{'error':error}\">\n        <span class=\"input\" [ngClass]=\"{'active':code.length==0}\" ></span>\n        <span class=\"input\" [ngClass]=\"{'active':code.length==1}\" ></span>\n        <span class=\"input\" [ngClass]=\"{'active':code.length==2}\" ></span>\n        <span class=\"input\" [ngClass]=\"{'active':code.length==3}\" ></span>\n        <span class=\"input\" [ngClass]=\"{'active':code.length==4}\" ></span>\n        <span class=\"input\" [ngClass]=\"{'active':code.length==5}\" ></span>\n      </div>\n      <input [(ngModel)]=\"code\" type=\"tel\" maxlength=\"6\" #telInput (input)=\"input()\">\n    </div>\n    <!-- <button class=\"red shadow sendbottom\" routerLink=\"/market\"> -->\n    <button class=\"red shadow sendbottom\" (click)=verify()>\n      Enviar código\n    </button>\n  </div>\n</ion-content>");

/***/ }),

/***/ "EQAe":
/*!*******************************************************!*\
  !*** ./src/app/pages/verificate/verificate.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".inputs {\n  position: relative;\n}\n.inputs input {\n  margin: 10px 0 30px 0;\n  height: 60px;\n  border: none;\n  background-color: rgba(0, 0, 0, 0);\n  font-size: 30px;\n  position: relative;\n  font-weight: bolder;\n  padding: 0 0 0 20px;\n  letter-spacing: 38px;\n  width: 120%;\n}\n.inputs input:focus {\n  outline: none;\n}\n.inputs .container {\n  display: flex;\n  position: absolute;\n  top: 10px;\n  left: 0;\n  width: 100%;\n  height: 60px;\n  pointer-events: none;\n  background-color: rgba(0, 0, 0, 0);\n}\n.inputs .container.error .input {\n  border: 1px solid red;\n  background: rgba(255, 0, 0, 0.02);\n}\n.inputs .container .input {\n  height: 60px;\n  margin: 0 5px;\n  display: block;\n  z-index: 0;\n  width: 100%;\n  border-radius: 10px;\n  font-size: 18px;\n  border: 1px solid #d2d2d2;\n  background: #fafafa;\n  position: relative;\n}\n.inputs .container .input.active {\n  border: 1px solid #ffbb00;\n  box-shadow: 0 0 5px 0px rgba(255, 187, 0, 0.16);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdmVyaWZpY2F0ZS92ZXJpZmljYXRlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FBQ0Y7QUFBRTtFQUNFLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQ0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7QUFFSjtBQURJO0VBQ0UsYUFBQTtBQUdOO0FBQ0U7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQ0FBQTtBQUNKO0FBQ0k7RUFDRSxxQkFBQTtFQUNBLGlDQUFBO0FBQ047QUFFSTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBRUEsbUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBRE47QUFHTTtFQUNFLHlCQUFBO0VBR0EsK0NBQUE7QUFEUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ZlcmlmaWNhdGUvdmVyaWZpY2F0ZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5wdXRzIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBpbnB1dCB7XG4gICAgbWFyZ2luOiAxMHB4IDAgMzBweCAwO1xuICAgIGhlaWdodDogNjBweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgcGFkZGluZzogMCAwIDAgMjBweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMzhweDtcbiAgICB3aWR0aDogMTIwJTtcbiAgICAmOmZvY3VzIHtcbiAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgfVxuICB9XG5cbiAgLmNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxMHB4O1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XG5cbiAgICAmLmVycm9yIC5pbnB1dCB7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMCwgMCwgMC4wMik7XG4gICAgfVxuXG4gICAgLmlucHV0IHtcbiAgICAgIGhlaWdodDogNjBweDtcbiAgICAgIG1hcmdpbjogMCA1cHg7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHotaW5kZXg6IDA7XG4gICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkMmQyZDI7XG4gICAgICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAmLmFjdGl2ZSB7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyNTUsIDE4NywgMCk7XG4gICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDVweCAwcHggcmdiYSgyNTUsIDE4NywgMCwgMC4xNik7XG4gICAgICAgIC1tb3otYm94LXNoYWRvdzogMCAwIDVweCAwcHggcmdiYSgyNTUsIDE4NywgMCwgMC4xNik7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCA1cHggMHB4IHJnYmEoMjU1LCAxODcsIDAsIDAuMTYpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */");

/***/ }),

/***/ "Ppxf":
/*!*******************************************************!*\
  !*** ./src/app/pages/verificate/verificate.module.ts ***!
  \*******************************************************/
/*! exports provided: VerificatePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerificatePageModule", function() { return VerificatePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _verificate_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./verificate-routing.module */ "cgU6");
/* harmony import */ var _verificate_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./verificate.page */ "lHAj");







let VerificatePageModule = class VerificatePageModule {
};
VerificatePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _verificate_routing_module__WEBPACK_IMPORTED_MODULE_5__["VerificatePageRoutingModule"]
        ],
        declarations: [_verificate_page__WEBPACK_IMPORTED_MODULE_6__["VerificatePage"]]
    })
], VerificatePageModule);



/***/ }),

/***/ "cgU6":
/*!***************************************************************!*\
  !*** ./src/app/pages/verificate/verificate-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: VerificatePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerificatePageRoutingModule", function() { return VerificatePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _verificate_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./verificate.page */ "lHAj");




const routes = [
    {
        path: '',
        component: _verificate_page__WEBPACK_IMPORTED_MODULE_3__["VerificatePage"]
    }
];
let VerificatePageRoutingModule = class VerificatePageRoutingModule {
};
VerificatePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], VerificatePageRoutingModule);



/***/ }),

/***/ "lHAj":
/*!*****************************************************!*\
  !*** ./src/app/pages/verificate/verificate.page.ts ***!
  \*****************************************************/
/*! exports provided: VerificatePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerificatePage", function() { return VerificatePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_verificate_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./verificate.page.html */ "5rRU");
/* harmony import */ var _verificate_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./verificate.page.scss */ "EQAe");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_users_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/users.service */ "6Qg2");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");






let VerificatePage = class VerificatePage {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
        this.code = "";
        this.error = false;
    }
    ngOnInit() {
        this.user = JSON.parse(localStorage.getItem("user"));
        console.log(this.user);
    }
    verify() {
        this.userService.verify(this.user, this.code).subscribe((res) => {
            console.log(res);
            this.router.navigateByUrl("/market");
        }, (error) => {
            if (error.error.error.message == "User cannot be confirmed. Current status is CONFIRMED") {
                this.loginPhone(this.user.username);
            }
            else {
                this.error = true;
            }
            console.log(error);
            console.log(error.error.error.message);
        });
    }
    input() {
        if (this.code.length == 0) {
            this.error = false;
        }
    }
    loginPhone(tel) {
        console.log("trying login");
        this.userService.login(tel).subscribe((res) => {
            console.log(res);
            this.router.navigateByUrl("/market");
        }, (error) => {
            console.log(error);
            if (error.error.error.code == "UserNotConfirmedException") {
                this.router.navigateByUrl("/verificate");
            }
        });
    }
};
VerificatePage.ctorParameters = () => [
    { type: src_app_services_users_service__WEBPACK_IMPORTED_MODULE_4__["UsersService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
VerificatePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-verificate",
        template: _raw_loader_verificate_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_verificate_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], VerificatePage);



/***/ })

}]);
//# sourceMappingURL=pages-verificate-verificate-module-es2015.js.map