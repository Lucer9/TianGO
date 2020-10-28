(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-market-market-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/market/market.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/market/market.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content color=\"primary\">\n  <div class=\"header\">\n    <div class=\"left\" routerLink=\"/camera\">\n      <ion-icon name=\"qr-code-outline\"></ion-icon>\n      <p>Escanéa el código o...</p>\n    </div>\n    <div class=\"right\">\n      <!-- <p>Regresar</p>\n      <ion-icon name=\"chevron-back-outline\"></ion-icon> -->\n    </div>\n  </div>\n  <div class=\"code-wrapper \">\n\n    <div class=\"ion-padding\">\n      <h2>Busca tu mercado</h2>\n      <input [(ngModel)]=\"searchWord\" (input)=\"searchFor()\" class=\"search\" placeholder=\"Mercado\">\n    </div>\n\n\n    <div class=\"tian-card badge\" [routerLink]=\"['/newhome', market.id]\"\n      *ngFor=\"let market of marketList\">\n      <div class=\"left\">\n        <img class=\"avatar\" [src]=\"market.image_path\">\n        <!-- <span class=\"km\">0.1 km</span> -->\n      </div>\n      <div class=\"text\">\n        <p>{{market.title}}</p>\n        <p class=\"note\">{{market.address}}</p>\n      </div>\n    </div>\n  </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/market/market-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/market/market-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: MarketPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketPageRoutingModule", function() { return MarketPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _market_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./market.page */ "./src/app/pages/market/market.page.ts");




const routes = [
    {
        path: '',
        component: _market_page__WEBPACK_IMPORTED_MODULE_3__["MarketPage"]
    }
];
let MarketPageRoutingModule = class MarketPageRoutingModule {
};
MarketPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MarketPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/market/market.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/market/market.module.ts ***!
  \***********************************************/
/*! exports provided: MarketPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketPageModule", function() { return MarketPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _market_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./market-routing.module */ "./src/app/pages/market/market-routing.module.ts");
/* harmony import */ var _market_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./market.page */ "./src/app/pages/market/market.page.ts");







let MarketPageModule = class MarketPageModule {
};
MarketPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _market_routing_module__WEBPACK_IMPORTED_MODULE_5__["MarketPageRoutingModule"]
        ],
        declarations: [_market_page__WEBPACK_IMPORTED_MODULE_6__["MarketPage"]]
    })
], MarketPageModule);



/***/ }),

/***/ "./src/app/pages/market/market.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/market/market.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".ion-padding {\n  padding: 0 20px;\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWFya2V0L21hcmtldC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21hcmtldC9tYXJrZXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlvbi1wYWRkaW5ne1xuICAgIHBhZGRpbmc6IDAgMjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/market/market.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/market/market.page.ts ***!
  \*********************************************/
/*! exports provided: MarketPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketPage", function() { return MarketPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_locations_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/locations.service */ "./src/app/services/locations.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");




let MarketPage = class MarketPage {
    constructor(markets, loadingController) {
        this.markets = markets;
        this.loadingController = loadingController;
        this.marketList = [];
        this.backupMarketList = [];
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                cssClass: "my-custom-class",
                message: "Cargando mercados",
            });
            yield loading.present();
            this.markets.getLocations().subscribe((res) => {
                console.log(res.locations);
                this.marketList = res.locations;
                this.backupMarketList = res.locations;
                loading.dismiss();
            });
        });
    }
    searchFor() {
        console.log(this.searchWord);
        this.marketList = this.backupMarketList;
        this.marketList = this.marketList.filter((current) => {
            if (current.title && this.searchWord) {
                if (current.title.toLowerCase().indexOf(this.searchWord.toLowerCase()) > -1) {
                    return true;
                }
                return false;
            }
        });
    }
};
MarketPage.ctorParameters = () => [
    { type: src_app_services_locations_service__WEBPACK_IMPORTED_MODULE_2__["LocationsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] }
];
MarketPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-market",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./market.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/market/market.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./market.page.scss */ "./src/app/pages/market/market.page.scss")).default]
    })
], MarketPage);



/***/ }),

/***/ "./src/app/services/locations.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/locations.service.ts ***!
  \***********************************************/
/*! exports provided: LocationsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationsService", function() { return LocationsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let LocationsService = class LocationsService {
    constructor(http) {
        this.http = http;
    }
    getLocations() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].endpoint}/locations`);
    }
};
LocationsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
LocationsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    })
], LocationsService);



/***/ })

}]);
//# sourceMappingURL=pages-market-market-module-es2015.js.map