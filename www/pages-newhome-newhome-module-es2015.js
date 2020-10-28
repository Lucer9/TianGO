(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-newhome-newhome-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/newhome/newhome.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/newhome/newhome.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content color=\"primary\">\n  <div class=\"header\">\n    <div class=\"left\">\n      <ion-icon name=\"qr-code-outline\"></ion-icon>\n      <p>Escanéa el código o...</p>\n    </div>\n    <div class=\"right\">\n      <!-- <p>Regresar</p>\n      <ion-icon name=\"chevron-back-outline\"></ion-icon> -->\n    </div>\n  </div>\n  <div class=\"code-wrapper \">\n    <h2 class=\"padding\">Marchantes:</h2>\n    <div class=\"scrollmenu\">\n      <div class=\"item\" *ngFor=\"let item of personas\" routerLink=\"/person-detail\">\n        <img [src]=\"item.img\">\n        <p class=\"bold\">{{item.name}}</p>\n        <p class=\"category\">{{item.category}}</p>\n      </div>\n    </div>\n    <br>\n    <h2 class=\"padding\">Productos pasados:</h2>\n    <div class=\"tian-card user-badge\" *ngFor=\"let item of products; let i=index\">\n      <div class=\"left\">\n        <img class=\"avatar\" [src]=\"item.img\">\n        <img class=\"user\" [src]=\"item.avatar\">\n      </div>\n      <div class=\"text\">\n        <p>{{item.name}}</p>\n        <p class=\"note\"><span>${{item.price}}/{{item.type}}</span></p>\n      </div>\n\n      <div class=\"buy\" *ngIf=\"item.cart!=0\">\n        <span class=\"full\" (click)=\"removeItem(i,item)\">-</span>\n        <span>{{item.cart}}{{item.type}}</span>\n        <span class=\"full\" (click)=\"addItem(i,item)\">+</span>\n      </div>\n      <div class=\"buy\" *ngIf=\"item.cart==0\">\n        <span class=\"wide\" (click)=\"addItem(i,item)\">Añadir</span>\n      </div>\n    </div>\n\n    <div class=\"cart\" routerLink=\"/cart\" [ngClass]=\"{'disabled': cart.items === 0}\">\n      <button class=\"red shadow\">\n        <span class=\"number\">{{cart.items}}</span>\n        <span class=\"price\">${{cart.price}}</span>\n\n        Ver la bolsa\n      </button>\n    </div>\n\n  </div>\n\n\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/newhome/newhome-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/newhome/newhome-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: NewhomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewhomePageRoutingModule", function() { return NewhomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _newhome_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./newhome.page */ "./src/app/pages/newhome/newhome.page.ts");




const routes = [
    {
        path: '',
        component: _newhome_page__WEBPACK_IMPORTED_MODULE_3__["NewhomePage"]
    }
];
let NewhomePageRoutingModule = class NewhomePageRoutingModule {
};
NewhomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], NewhomePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/newhome/newhome.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/newhome/newhome.module.ts ***!
  \*************************************************/
/*! exports provided: NewhomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewhomePageModule", function() { return NewhomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _newhome_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./newhome-routing.module */ "./src/app/pages/newhome/newhome-routing.module.ts");
/* harmony import */ var _newhome_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./newhome.page */ "./src/app/pages/newhome/newhome.page.ts");







let NewhomePageModule = class NewhomePageModule {
};
NewhomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _newhome_routing_module__WEBPACK_IMPORTED_MODULE_5__["NewhomePageRoutingModule"]
        ],
        declarations: [_newhome_page__WEBPACK_IMPORTED_MODULE_6__["NewhomePage"]]
    })
], NewhomePageModule);



/***/ }),

/***/ "./src/app/pages/newhome/newhome.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/newhome/newhome.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".scrollmenu {\n  overflow: auto;\n  white-space: nowrap;\n}\n\n.scrollmenu .item {\n  display: inline-block;\n  text-align: center;\n  background-color: white;\n  padding: 14px;\n  text-decoration: none;\n}\n\n.scrollmenu .item img {\n  height: 70px;\n  width: 70px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 50%;\n  box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.25);\n}\n\n.scrollmenu .item:hover {\n  background-color: rgba(0, 0, 0, 0.03);\n  border-radius: 5px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbmV3aG9tZS9uZXdob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0FBQ0Y7O0FBQUU7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLDZDQUFBO0FBRU47O0FBRUE7RUFDRSxxQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbmV3aG9tZS9uZXdob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zY3JvbGxtZW51IHtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi5zY3JvbGxtZW51IC5pdGVtIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxNHB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGltZ3tcbiAgICAgIGhlaWdodDogNzBweDtcbiAgICAgIHdpZHRoOiA3MHB4O1xuICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBib3gtc2hhZG93OiAtMnB4IDJweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gICAgfVxufVxuXG4uc2Nyb2xsbWVudSAuaXRlbTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wMyk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5cblxuIl19 */");

/***/ }),

/***/ "./src/app/pages/newhome/newhome.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/newhome/newhome.page.ts ***!
  \***********************************************/
/*! exports provided: NewhomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewhomePage", function() { return NewhomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/products.service */ "./src/app/services/products.service.ts");



let NewhomePage = class NewhomePage {
    constructor(productsService) {
        this.productsService = productsService;
        this.personas = [
            {
                img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
                name: "Clotilde",
                category: "Frutas y Verduras",
            },
            {
                img: "https://mibimibi-assets.mangege.com/stickers/dad1b451d905431685efa1776141725a/618183dfe03050e4b61732413afb384c.jpg",
                name: "Mofupiyo",
                category: "Productos Varios",
            },
            {
                img: "https://avatars0.githubusercontent.com/u/1113708?s=460&v=4",
                name: "Juan Velez",
                category: "Amazon Merchandise",
            },
        ];
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
        // this.productsService.getIdeas().subscribe(res=>{
        //   console.log(res)
        // })
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
NewhomePage.ctorParameters = () => [
    { type: src_app_services_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"] }
];
NewhomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-newhome",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./newhome.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/newhome/newhome.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./newhome.page.scss */ "./src/app/pages/newhome/newhome.page.scss")).default]
    })
], NewhomePage);



/***/ }),

/***/ "./src/app/services/products.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/products.service.ts ***!
  \**********************************************/
/*! exports provided: ProductsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsService", function() { return ProductsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




let ProductsService = class ProductsService {
    constructor(afs) {
        this.afs = afs;
        this.marketCollection = this.afs.collection('market');
        this.markets = this.marketCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(actions => {
            return actions.map(a => {
                const data = a.payload.doc.data();
                const id = a.payload.doc.id;
                return Object.assign({ id }, data);
            });
        }));
    }
    getMarkets() {
        return this.markets;
    }
    getMarket(id) {
        return this.marketCollection.doc(id).valueChanges();
    }
    addMarket(market) {
        return this.marketCollection.add(market);
    }
    updateMarket(market) {
        return this.marketCollection.doc(market.id).update(market);
    }
    deleteMarket(id) {
        return this.marketCollection.doc(id).delete();
    }
};
ProductsService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
];
ProductsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ProductsService);



/***/ })

}]);
//# sourceMappingURL=pages-newhome-newhome-module-es2015.js.map