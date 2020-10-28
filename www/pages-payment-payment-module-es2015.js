(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-payment-payment-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/payment/payment.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/payment/payment.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content color=\"primary\">\n  <div class=\"header\">\n    <div class=\"left\" routerLink=\"/\" routerDirection=\"back\">\n      <ion-icon name=\"chevron-back-outline\"></ion-icon>\n      <p>Regresar</p>\n    </div>\n\n    <div class=\"right\">\n      <!-- <p>Regresar</p>\n      <ion-icon name=\"chevron-back-outline\"></ion-icon> -->\n    </div>\n  </div>\n\n  <div class=\"code-wrapper ion-padding\">\n\n    <div class=\"credit-Cards\">\n      <img src=\"assets/credit_card.png\" alt=\"\">\n      <p class=\"name\">{{card_name}}</p>\n      <p class=\"number\">{{card_number}}</p>\n    </div>\n\n    <div class=\"form-wrapper\">\n      <form>\n\n        <div class=\"input-group\">\n          <input type=\"text\" required [(ngModel)]=\"card_number\" name=\"card_number\"/>\n          <label>Número de Tarjeta</label>\n        </div>\n\n        <div class=\"input-group\">\n          <input type=\"text\" required [(ngModel)]=\"card_name\" name=\"card_name\"/>\n          <label>Tarjeta Habiente</label>\n        </div>\n\n        <span class=\"col\">\n          <div class=\"input-group exp\">\n            <input type=\"text\" required />\n            <label>Fecha de Expiración</label>\n          </div>\n\n          <div class=\"input-group cvc\">\n            <input type=\"text\" required />\n            <label>CVC</label>\n          </div>\n        </span>\n\n        <button class=\"red shadow sendbottom\" routerLink=\"/prize\">\n          Proceder al pago\n        </button>\n\n      </form>\n    </div>\n    \n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/payment/payment-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/payment/payment-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: PaymentPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentPageRoutingModule", function() { return PaymentPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _payment_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./payment.page */ "./src/app/pages/payment/payment.page.ts");




const routes = [
    {
        path: '',
        component: _payment_page__WEBPACK_IMPORTED_MODULE_3__["PaymentPage"]
    }
];
let PaymentPageRoutingModule = class PaymentPageRoutingModule {
};
PaymentPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PaymentPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/payment/payment.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/payment/payment.module.ts ***!
  \*************************************************/
/*! exports provided: PaymentPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentPageModule", function() { return PaymentPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _payment_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./payment-routing.module */ "./src/app/pages/payment/payment-routing.module.ts");
/* harmony import */ var _payment_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./payment.page */ "./src/app/pages/payment/payment.page.ts");







let PaymentPageModule = class PaymentPageModule {
};
PaymentPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _payment_routing_module__WEBPACK_IMPORTED_MODULE_5__["PaymentPageRoutingModule"]
        ],
        declarations: [_payment_page__WEBPACK_IMPORTED_MODULE_6__["PaymentPage"]]
    })
], PaymentPageModule);



/***/ }),

/***/ "./src/app/pages/payment/payment.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/payment/payment.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".form-wrapper {\n  position: fixed;\n  bottom: 40px;\n  margin: 10px;\n  left: 0;\n  height: 55vh;\n}\n\n.input-group {\n  position: relative;\n  margin: 25px 0 20px;\n}\n\n.name {\n  position: absolute;\n  top: 140px;\n  left: 70px;\n  color: white;\n}\n\n.number {\n  position: absolute;\n  top: 215px;\n  left: 70px;\n  font-size: 18px;\n  color: white;\n}\n\ninput {\n  font-size: 18px;\n  display: block;\n  width: 100%;\n  border: none;\n  border-bottom: 1px solid #fafafa;\n  color: #474747;\n  border: 1px solid #d2d2d2;\n}\n\ninput:focus {\n  outline: none;\n}\n\nlabel {\n  color: #999;\n  font-size: 18px;\n  font-weight: normal;\n  position: absolute;\n  pointer-events: none;\n  left: 5px;\n  top: 10px;\n  transition: 0.2s ease all;\n  -moz-transition: 0.2s ease all;\n  -webkit-transition: 0.2s ease all;\n  padding: 5px 10px;\n}\n\ninput:focus ~ label,\ninput:valid ~ label {\n  background-color: white;\n  border-radius: 5px;\n  top: -15px;\n  left: 10px;\n  font-size: 14px;\n  color: #ec2b38;\n}\n\ninput:focus ~ input:focus ~ {\n  width: 50%;\n}\n\n.col {\n  display: flex;\n}\n\n.col .input-group {\n  margin: 0;\n}\n\n.col input:focus ~ label,\n.col input:valid ~ label {\n  top: 0px;\n}\n\n.col label {\n  top: 30px;\n}\n\n.col .exp {\n  width: 65%;\n  margin-right: 25px;\n}\n\n.col .cvc {\n  width: 30%;\n}\n\nbutton {\n  bottom: 0;\n  position: absolute;\n  margin-left: 15px;\n  width: 90%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGF5bWVudC9wYXltZW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0NBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSx5QkFBQTtFQUNBLDhCQUFBO0VBQ0EsaUNBQUE7RUFFQSxpQkFBQTtBQUFGOztBQUlBOztFQUVFLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBREY7O0FBSUE7RUFDRSxVQUFBO0FBREY7O0FBSUE7RUFDRSxhQUFBO0FBREY7O0FBR0U7RUFDRSxTQUFBO0FBREo7O0FBSUU7O0VBRUUsUUFBQTtBQUZKOztBQUtFO0VBQ0UsU0FBQTtBQUhKOztBQU1FO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0FBSko7O0FBT0U7RUFDRSxVQUFBO0FBTEo7O0FBU0E7RUFDSSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7QUFOSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BheW1lbnQvcGF5bWVudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS13cmFwcGVye1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDQwcHg7XG4gICAgbWFyZ2luOiAxMHB4O1xuICAgIGxlZnQ6IDA7XG4gICAgaGVpZ2h0OiA1NXZoO1xufVxuXG4uaW5wdXQtZ3JvdXAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogMjVweCAwIDIwcHg7XG59XG5cbi5uYW1le1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTQwcHg7XG4gIGxlZnQ6IDcwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLm51bWJlcntcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDIxNXB4O1xuICBsZWZ0OiA3MHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuaW5wdXQge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZhZmFmYTtcbiAgY29sb3I6ICM0NzQ3NDc7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkMmQyZDI7XG59XG5cbmlucHV0OmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxubGFiZWwge1xuICBjb2xvcjogIzk5OTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBsZWZ0OiA1cHg7XG4gIHRvcDogMTBweDtcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlIGFsbDtcbiAgLW1vei10cmFuc2l0aW9uOiAwLjJzIGVhc2UgYWxsO1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuMnMgZWFzZSBhbGw7XG5cbiAgcGFkZGluZzogNXB4IDEwcHg7XG5cbn1cblxuaW5wdXQ6Zm9jdXMgfiBsYWJlbCxcbmlucHV0OnZhbGlkIH4gbGFiZWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB0b3A6IC0xNXB4O1xuICBsZWZ0OiAxMHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjZWMyYjM4O1xufVxuXG5pbnB1dDpmb2N1cyB+IGlucHV0OmZvY3VzIH4ge1xuICB3aWR0aDogNTAlO1xufVxuXG4uY29sIHtcbiAgZGlzcGxheTogZmxleDtcblxuICAuaW5wdXQtZ3JvdXAge1xuICAgIG1hcmdpbjogMDtcbiAgfVxuXG4gIGlucHV0OmZvY3VzIH4gbGFiZWwsXG4gIGlucHV0OnZhbGlkIH4gbGFiZWwge1xuICAgIHRvcDogMHB4O1xuICB9XG5cbiAgbGFiZWx7XG4gICAgdG9wOiAzMHB4O1xuICB9XG5cbiAgLmV4cCB7XG4gICAgd2lkdGg6IDY1JTtcbiAgICBtYXJnaW4tcmlnaHQ6IDI1cHg7ICAgXG4gIH1cblxuICAuY3ZjIHtcbiAgICB3aWR0aDogMzAlO1xuICB9XG59XG5cbmJ1dHRvbntcbiAgICBib3R0b206IDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgIHdpZHRoOiA5MCU7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/pages/payment/payment.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/payment/payment.page.ts ***!
  \***********************************************/
/*! exports provided: PaymentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentPage", function() { return PaymentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let PaymentPage = class PaymentPage {
    constructor() { }
    ngOnInit() {
    }
};
PaymentPage.ctorParameters = () => [];
PaymentPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-payment',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./payment.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/payment/payment.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./payment.page.scss */ "./src/app/pages/payment/payment.page.scss")).default]
    })
], PaymentPage);



/***/ })

}]);
//# sourceMappingURL=pages-payment-payment-module-es2015.js.map