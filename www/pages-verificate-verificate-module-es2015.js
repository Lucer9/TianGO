(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-verificate-verificate-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/verificate/verificate.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/verificate/verificate.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content color=\"primary\">\n  <div class=\"header\">\n    <div class=\"left\" routerLink=\"/\" routerDirection=\"back\">\n      <ion-icon name=\"chevron-back-outline\"></ion-icon>\n      <p>Regresar</p>\n    </div>\n    <div class=\"right\">\n      <!-- <p>Regresar</p>\n      <ion-icon name=\"chevron-back-outline\"></ion-icon> -->\n    </div>\n  </div>\n  <div class=\"code-wrapper ion-padding\">\n    <h2>Ingresa tu número</h2>\n    <ion-input [(ngModel)]=\"tel\" type=\"tel\" ></ion-input>\n    <button class=\"red shadow sendbottom\" (click)=\"nextPage()\">\n      Enviar código\n    </button>\n  </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/verificate/verificate-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/verificate/verificate-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: VerificatePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerificatePageRoutingModule", function() { return VerificatePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _verificate_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./verificate.page */ "./src/app/pages/verificate/verificate.page.ts");




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

/***/ "./src/app/pages/verificate/verificate.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/verificate/verificate.module.ts ***!
  \*******************************************************/
/*! exports provided: VerificatePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerificatePageModule", function() { return VerificatePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _verificate_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./verificate-routing.module */ "./src/app/pages/verificate/verificate-routing.module.ts");
/* harmony import */ var _verificate_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./verificate.page */ "./src/app/pages/verificate/verificate.page.ts");







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

/***/ "./src/app/pages/verificate/verificate.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/verificate/verificate.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".white {\n  color: white;\n}\n\n.code-wrapper {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  height: 90vh;\n  background-color: white;\n  border-radius: 5% 5% 0 0;\n  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.75);\n}\n\n.code-wrapper h2 {\n  margin-top: 40px;\n  margin-left: 30px;\n}\n\n.code-wrapper .sendbottom {\n  margin-top: 40px;\n  left: 5%;\n  width: 90%;\n}\n\n.code-container {\n  align-content: center;\n  justify-content: center;\n  align-items: center;\n}\n\n.code-container .input-con {\n  float: left;\n  font-family: \"Nunito\", sans-serif;\n  margin-left: 25px;\n  font-size: 25px;\n  margin-top: 15px;\n  width: 15%;\n  align-content: center;\n  justify-content: center;\n  align-items: center;\n  --border-color: transparent!important;\n  --highlight-height: 0;\n  border: 1px solid #dedede;\n  border-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdmVyaWZpY2F0ZS92ZXJpZmljYXRlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSx3QkFBQTtFQUdBLGdEQUFBO0FBQ0o7O0FBQ0k7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0FBQ1I7O0FBRUk7RUFDSSxnQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0FBQVI7O0FBSUE7RUFDSSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFESjs7QUFHSTtFQUNJLFdBQUE7RUFDQSxpQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFDQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FBRFIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy92ZXJpZmljYXRlL3ZlcmlmaWNhdGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndoaXRle1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmNvZGUtd3JhcHBlcntcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogOTB2aDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA1JSA1JSAwIDA7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDIwcHggMHB4IHJnYmEoMCwwLDAsMC43NSk7XG4gICAgLW1vei1ib3gtc2hhZG93OiAwcHggMHB4IDIwcHggMHB4IHJnYmEoMCwwLDAsMC43NSk7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IDBweCByZ2JhKDAsMCwwLDAuNzUpO1xuXG4gICAgaDJ7XG4gICAgICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICAgIH1cblxuICAgIC5zZW5kYm90dG9te1xuICAgICAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICAgICAgICBsZWZ0OiA1JTtcbiAgICAgICAgd2lkdGg6IDkwJTtcbiAgICB9XG59XG5cbi5jb2RlLWNvbnRhaW5lcntcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIC5pbnB1dC1jb257XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICBmb250LWZhbWlseTogXCJOdW5pdG9cIiwgc2Fucy1zZXJpZjtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDI1cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICAgICAgd2lkdGg6IDE1JTtcbiAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IWltcG9ydGFudDtcbiAgICAgICAgLS1oaWdobGlnaHQtaGVpZ2h0OiAwO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGVkZWRlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgfVxuXG59XG5cbiJdfQ== */");

/***/ }),

/***/ "./src/app/pages/verificate/verificate.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/verificate/verificate.page.ts ***!
  \*****************************************************/
/*! exports provided: VerificatePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerificatePage", function() { return VerificatePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let VerificatePage = class VerificatePage {
    constructor() {
        this.code = ["", "", "", ""];
    }
    ngOnInit() {
    }
};
VerificatePage.ctorParameters = () => [];
VerificatePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-verificate',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./verificate.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/verificate/verificate.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./verificate.page.scss */ "./src/app/pages/verificate/verificate.page.scss")).default]
    })
], VerificatePage);



/***/ })

}]);
//# sourceMappingURL=pages-verificate-verificate-module-es2015.js.map