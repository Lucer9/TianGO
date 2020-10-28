(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-prize-prize-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/prize/prize.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/prize/prize.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <div class=\"medal-wrapper\">\n    <img src=\"assets/medal.svg\">\n  </div>\n  <div class=\"text-wrapper\">\n    <h1>Felicidades</h1>\n\n    <p>Has comprado por lo menos <br> una vez cada semana.</p>\n    <p class=\"prize-text\"><b>Has ganado 10 TianguiCreditos</b></p>\n\n    <button class=\"red shadow sendbottom\"  routerDirection=\"back\" routerLink=\"/newhome\">\n      Aceptar\n    </button>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/prize/prize-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/prize/prize-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: PrizePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrizePageRoutingModule", function() { return PrizePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _prize_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./prize.page */ "./src/app/pages/prize/prize.page.ts");




const routes = [
    {
        path: '',
        component: _prize_page__WEBPACK_IMPORTED_MODULE_3__["PrizePage"]
    }
];
let PrizePageRoutingModule = class PrizePageRoutingModule {
};
PrizePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PrizePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/prize/prize.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/prize/prize.module.ts ***!
  \*********************************************/
/*! exports provided: PrizePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrizePageModule", function() { return PrizePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _prize_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./prize-routing.module */ "./src/app/pages/prize/prize-routing.module.ts");
/* harmony import */ var _prize_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./prize.page */ "./src/app/pages/prize/prize.page.ts");







let PrizePageModule = class PrizePageModule {
};
PrizePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _prize_routing_module__WEBPACK_IMPORTED_MODULE_5__["PrizePageRoutingModule"]
        ],
        declarations: [_prize_page__WEBPACK_IMPORTED_MODULE_6__["PrizePage"]]
    })
], PrizePageModule);



/***/ }),

/***/ "./src/app/pages/prize/prize.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/prize/prize.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".medal-wrapper {\n  width: 100%;\n  height: 65vh;\n  text-align: center;\n}\n.medal-wrapper img {\n  margin-top: 45%;\n}\n.text-wrapper {\n  text-align: center;\n}\n.text-wrapper p {\n  margin-top: 15px;\n}\n.text-wrapper .prize-text {\n  color: #ec2b38;\n}\n.text-wrapper button {\n  margin-top: 60px;\n  width: 80%;\n}\nion-content {\n  background-color: white;\n  --background: url('background_prizes.png') no-repeat center center / cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJpemUvcHJpemUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUNKO0FBQ0k7RUFDSSxlQUFBO0FBQ1I7QUFHQTtFQUNJLGtCQUFBO0FBQUo7QUFFSTtFQUNJLGdCQUFBO0FBQVI7QUFHSTtFQUNJLGNBQUE7QUFEUjtBQUlJO0VBQ0ksZ0JBQUE7RUFDQSxVQUFBO0FBRlI7QUFNQTtFQUNJLHVCQUFBO0VBQ0EsMEVBQUE7QUFISiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ByaXplL3ByaXplLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZWRhbC13cmFwcGVye1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNjV2aDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICBpbWd7XG4gICAgICAgIG1hcmdpbi10b3A6IDQ1JTtcbiAgICB9XG59XG5cbi50ZXh0LXdyYXBwZXJ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgcHtcbiAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICB9XG5cbiAgICAucHJpemUtdGV4dHtcbiAgICAgICAgY29sb3I6ICNlYzJiMzg7XG4gICAgfVxuXG4gICAgYnV0dG9ue1xuICAgICAgICBtYXJnaW4tdG9wOiA2MHB4O1xuICAgICAgICB3aWR0aDogODAlO1xuICAgIH1cbn1cblxuaW9uLWNvbnRlbnR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgLS1iYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2JhY2tncm91bmRfcHJpemVzLnBuZykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgLyBjb3Zlcjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/prize/prize.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/prize/prize.page.ts ***!
  \*******************************************/
/*! exports provided: PrizePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrizePage", function() { return PrizePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let PrizePage = class PrizePage {
    constructor() { }
    ngOnInit() {
    }
};
PrizePage.ctorParameters = () => [];
PrizePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-prize',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./prize.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/prize/prize.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./prize.page.scss */ "./src/app/pages/prize/prize.page.scss")).default]
    })
], PrizePage);



/***/ })

}]);
//# sourceMappingURL=pages-prize-prize-module-es2015.js.map