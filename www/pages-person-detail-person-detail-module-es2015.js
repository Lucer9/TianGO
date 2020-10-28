(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-person-detail-person-detail-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/person-detail/person-detail.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/person-detail/person-detail.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content color=\"primary\">\n  <div class=\"header\">\n    <span class=\"dimmer\"></span>\n\n    <div class=\"left\" routerLink=\"/newhome\"  routerDirection=\"back\">\n      <ion-icon name=\"chevron-back-outline\"></ion-icon>\n      <p>Regresar</p>\n    </div>\n    <div class=\"right\">\n      <!-- <p>Regresar</p>\n      <ion-icon name=\"chevron-back-outline\"></ion-icon> -->\n    </div>\n\n\n    <div class=\"author\">\n      <img\n        src=\"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80\">\n      <div class=\"text\">\n        <p>Maria antonieta Jimenez Sosa</p>\n        <p class=\"note\">Frutas y Verduras</p>\n      </div>\n    </div>\n\n  </div>\n\n\n\n  <div class=\"code-wrapper \">\n\n    <div class=\"tian-card\" *ngFor=\"let item of products; let i=index\">\n      <div class=\"left\">\n        <img class=\"avatar\" [src]=\"item.img\">\n      </div>\n      <div class=\"text\">\n        <p>{{item.name}}</p>\n        <p class=\"note\"><span>${{item.price}}/{{item.type}}</span></p>\n      </div>\n\n      <div class=\"buy\" *ngIf=\"item.cart!=0\">\n        <span class=\"full\" (click)=\"removeItem(i,item)\">-</span>\n        <span>{{item.cart}}{{item.type}}</span>\n        <span class=\"full\" (click)=\"addItem(i,item)\">+</span>\n      </div>\n      <div class=\"buy\" *ngIf=\"item.cart==0\">\n        <span class=\"wide\" (click)=\"addItem(i,item)\">Añadir</span>\n      </div>\n    </div>\n\n    <div class=\"cart\" routerLink=\"/cart\" [ngClass]=\"{'disabled': cart.items === 0}\">\n      <button class=\"red shadow\">\n        <span class=\"number\">{{cart.items}}</span>\n        <span class=\"price\">${{cart.price}}</span>\n\n        Ver la bolsa\n      </button>\n    </div>\n  </div>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/person-detail/person-detail-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/person-detail/person-detail-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: PersonDetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonDetailPageRoutingModule", function() { return PersonDetailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _person_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./person-detail.page */ "./src/app/pages/person-detail/person-detail.page.ts");




const routes = [
    {
        path: '',
        component: _person_detail_page__WEBPACK_IMPORTED_MODULE_3__["PersonDetailPage"]
    }
];
let PersonDetailPageRoutingModule = class PersonDetailPageRoutingModule {
};
PersonDetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PersonDetailPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/person-detail/person-detail.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/person-detail/person-detail.module.ts ***!
  \*************************************************************/
/*! exports provided: PersonDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonDetailPageModule", function() { return PersonDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _person_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./person-detail-routing.module */ "./src/app/pages/person-detail/person-detail-routing.module.ts");
/* harmony import */ var _person_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./person-detail.page */ "./src/app/pages/person-detail/person-detail.page.ts");







let PersonDetailPageModule = class PersonDetailPageModule {
};
PersonDetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _person_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["PersonDetailPageRoutingModule"]
        ],
        declarations: [_person_detail_page__WEBPACK_IMPORTED_MODULE_6__["PersonDetailPage"]]
    })
], PersonDetailPageModule);



/***/ }),

/***/ "./src/app/pages/person-detail/person-detail.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/person-detail/person-detail.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".dimmer {\n  background: linear-gradient(180deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.1) 100%);\n  height: 100%;\n  width: 100%;\n  display: block;\n  position: absolute;\n}\n\n.left {\n  z-index: 1;\n}\n\n.header {\n  height: 250px;\n  background-image: url(\"https://images.unsplash.com/photo-1488459716781-31db52582fe9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80\");\n  background-size: cover;\n}\n\n.code-wrapper {\n  min-height: calc(100vh - 200px);\n  position: fixed;\n  bottom: 0;\n  width: 100vw;\n}\n\n.author {\n  background-color: white;\n  height: 70px;\n  width: 90%;\n  display: block;\n  position: absolute;\n  bottom: 30px;\n  z-index: 10;\n  left: 5%;\n  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);\n  border-radius: 40px 10px 10px 40px;\n  display: flex;\n  align-items: center;\n}\n\n.author img {\n  height: 70px;\n  width: 70px;\n  border-radius: 35px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.author .text {\n  display: block;\n  padding-left: 80px;\n  height: auto;\n}\n\n.author .text p {\n  color: #474747;\n  font-size: 16px;\n}\n\n.author .text p.note {\n  font-size: 14px;\n  opacity: 0.6;\n  font-weight: normal;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGVyc29uLWRldGFpbC9wZXJzb24tZGV0YWlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1GQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFDQTtFQUNFLFVBQUE7QUFFRjs7QUFDQTtFQUNFLGFBQUE7RUFDQSwrSkFBQTtFQUNBLHNCQUFBO0FBRUY7O0FBQ0E7RUFDRSwrQkFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtBQUVGOztBQUNBO0VBQ0UsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUVBLDRDQUFBO0VBQ0Esa0NBQUE7RUFFQSxhQUFBO0VBQ0EsbUJBQUE7QUFBRjs7QUFFRTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0FBQUo7O0FBR0U7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBREo7O0FBRUk7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQUFOOztBQUNNO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQUNWIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcGVyc29uLWRldGFpbC9wZXJzb24tZGV0YWlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaW1tZXIge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDAsIDAsIDAsIDAuNCkgMCUsIHJnYmEoMCwgMCwgMCwgMC4xKSAxMDAlKTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbi5sZWZ0IHtcbiAgei1pbmRleDogMTtcbn1cblxuLmhlYWRlciB7XG4gIGhlaWdodDogMjUwcHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNDg4NDU5NzE2NzgxLTMxZGI1MjU4MmZlOT9peGxpYj1yYi0xLjIuMSZpeGlkPWV5SmhjSEJmYVdRaU9qRXlNRGQ5JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MTY1MCZxPTgwXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4uY29kZS13cmFwcGVyIHtcbiAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDIwMHB4KTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDA7XG4gIHdpZHRoOiAxMDB2dztcbn1cblxuLmF1dGhvciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBoZWlnaHQ6IDcwcHg7XG4gIHdpZHRoOiA5MCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMzBweDtcbiAgei1pbmRleDogMTA7XG4gIGxlZnQ6IDUlO1xuXG4gIGJveC1zaGFkb3c6IDBweCA0cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICBib3JkZXItcmFkaXVzOiA0MHB4IDEwcHggMTBweCA0MHB4O1xuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgaW1nIHtcbiAgICBoZWlnaHQ6IDcwcHg7XG4gICAgd2lkdGg6IDcwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMzVweDtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgfVxuXG4gIC50ZXh0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwYWRkaW5nLWxlZnQ6IDgwcHg7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHAge1xuICAgICAgY29sb3I6ICM0NzQ3NDc7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAmLm5vdGV7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgIG9wYWNpdHk6IC42O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/pages/person-detail/person-detail.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/person-detail/person-detail.page.ts ***!
  \***********************************************************/
/*! exports provided: PersonDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonDetailPage", function() { return PersonDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let PersonDetailPage = class PersonDetailPage {
    constructor() {
        this.products = [
            {
                id: 1,
                price: 50,
                type: "kg",
                name: "Melón",
                img: "https://www.superama.com.mx/Content/images/products/img_large/0000000004050L.jpg",
                avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
                cart: 0,
            },
        ];
        this.cart = {
            items: 0,
            price: 0,
        };
    }
    ngOnInit() {
    }
    addItem(index, item) {
        this.products[index].cart++;
        this.cart.items++;
        this.cart.price += item.price;
    }
    removeItem(index, item) {
        this.products[index].cart--;
        this.cart.items--;
        this.cart.price -= item.price;
    }
};
PersonDetailPage.ctorParameters = () => [];
PersonDetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-person-detail',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./person-detail.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/person-detail/person-detail.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./person-detail.page.scss */ "./src/app/pages/person-detail/person-detail.page.scss")).default]
    })
], PersonDetailPage);



/***/ })

}]);
//# sourceMappingURL=pages-person-detail-person-detail-module-es2015.js.map