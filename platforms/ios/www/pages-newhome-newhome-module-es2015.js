(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-newhome-newhome-module"],{

/***/ "Yi2Q":
/*!*************************************************!*\
  !*** ./src/app/pages/newhome/newhome.module.ts ***!
  \*************************************************/
/*! exports provided: NewhomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewhomePageModule", function() { return NewhomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _newhome_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./newhome-routing.module */ "jlue");
/* harmony import */ var _newhome_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./newhome.page */ "oa6m");







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

/***/ "eRS1":
/*!*************************************************!*\
  !*** ./src/app/pages/newhome/newhome.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".scrollmenu {\n  overflow: auto;\n  white-space: nowrap;\n}\n\n.scrollmenu .item {\n  display: inline-block;\n  text-align: center;\n  background-color: white;\n  padding: 14px;\n  text-decoration: none;\n}\n\n.scrollmenu .item img {\n  height: 70px;\n  width: 70px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 50%;\n  box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.25);\n}\n\n.cart {\n  position: fixed;\n}\n\n.scrollmenu .item:hover {\n  background-color: rgba(0, 0, 0, 0.03);\n  border-radius: 5px;\n  cursor: pointer;\n}\n\n.ion-padding {\n  padding: 0 20px !important;\n}\n\n.ion-padding input {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbmV3aG9tZS9uZXdob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0FBQ0Y7O0FBQUU7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLDZDQUFBO0FBRUo7O0FBRUE7RUFDRSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0UsMEJBQUE7QUFDRjs7QUFBRTtFQUNFLFNBQUE7QUFFSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25ld2hvbWUvbmV3aG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2Nyb2xsbWVudSB7XG4gIG92ZXJmbG93OiBhdXRvO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4uc2Nyb2xsbWVudSAuaXRlbSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMTRweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBpbWcge1xuICAgIGhlaWdodDogNzBweDtcbiAgICB3aWR0aDogNzBweDtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYm94LXNoYWRvdzogLTJweCAycHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICB9XG59XG5cbi5jYXJ0e1xuICBwb3NpdGlvbjogZml4ZWQ7XG59XG5cbi5zY3JvbGxtZW51IC5pdGVtOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjAzKTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5pb24tcGFkZGluZyB7XG4gIHBhZGRpbmc6IDAgMjBweCAhaW1wb3J0YW50O1xuICBpbnB1dCB7XG4gICAgbWFyZ2luOiAwO1xuICB9XG59XG4iXX0= */");

/***/ }),

/***/ "j+yP":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/newhome/newhome.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content color=\"primary\">\n  <div class=\"header\">\n    <div class=\"left\" routerLink=\"/camera/products\">\n      <ion-icon name=\"qr-code-outline\"></ion-icon>\n      <p>Escanéa el código o...</p>\n    </div>\n    <div class=\"right\">\n      <!-- <p>Regresar</p>-->\n      <ion-icon routerLink=\"/market\" routerDirection=\"back\" name=\"home\"></ion-icon>\n    </div>\n  </div>\n  <div class=\"code-wrapper \">\n\n    <div class=\"ion-padding\">\n      <h2>Busca un Producto</h2>\n      <input [(ngModel)]=\"searchWord\" (input)=\"searchFor()\" class=\"search\" placeholder=\"Producto\">\n    </div>\n    <!-- <h2 class=\"padding\">Marchantes:</h2>\n    <div class=\"scrollmenu\">\n      <div class=\"item\" *ngFor=\"let item of personas\" routerLink=\"/person-detail\">\n        <img [src]=\"item.img\">\n        <p class=\"bold\">{{item.name}}</p>\n        <p class=\"category\">{{item.category}}</p>\n      </div>\n    </div> -->\n    <br>\n    <!-- <h2 class=\"padding\">Productos:</h2> -->\n    <div class=\"tian-card user-badge\" *ngFor=\"let item of products; let i=index\">\n      <div class=\"left\">\n        <img class=\"avatar\" [src]=\"item.image_path\">\n        <!-- <img class=\"user\" [src]=\"item.avatar\"> -->\n      </div>\n      <div class=\"text\">\n        <p>{{item.title}}</p>\n        <p class=\"note\"><span>${{item.price}}/kg</span></p>\n      </div>\n\n      <div class=\"buy\" *ngIf=\"item.cart!=0\">\n        <span class=\"full\" (click)=\"removeItem(i,item)\">-</span>\n        <span>{{item.cart}}{{item.type}}</span>\n        <span class=\"full\" (click)=\"addItem(i,item)\">+</span>\n      </div>\n      <div class=\"buy\" *ngIf=\"item.cart==0\">\n        <span class=\"wide\" (click)=\"addItem(i,item)\">Añadir</span>\n      </div>\n    </div>\n\n    <div class=\"cart\" routerLink=\"/cart\" [ngClass]=\"{'disabled': cart.items === 0}\">\n      <button class=\"red shadow\">\n        <span class=\"number\">{{cart.items}}</span>\n        <span class=\"price\">${{cart.price}}</span>\n\n        Ver la bolsa\n      </button>\n    </div>\n\n  </div>\n\n\n</ion-content>");

/***/ }),

/***/ "jlue":
/*!*********************************************************!*\
  !*** ./src/app/pages/newhome/newhome-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: NewhomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewhomePageRoutingModule", function() { return NewhomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _newhome_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./newhome.page */ "oa6m");




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

/***/ "oa6m":
/*!***********************************************!*\
  !*** ./src/app/pages/newhome/newhome.page.ts ***!
  \***********************************************/
/*! exports provided: NewhomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewhomePage", function() { return NewhomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_newhome_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./newhome.page.html */ "j+yP");
/* harmony import */ var _newhome_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./newhome.page.scss */ "eRS1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_products_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/products.service */ "S3Px");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");







let NewhomePage = class NewhomePage {
    constructor(productService, route, loadingController) {
        this.productService = productService;
        this.route = route;
        this.loadingController = loadingController;
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
        this.marketId = 0;
        this.products = [];
        this.cart = {
            items: 0,
            price: 0,
        };
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                cssClass: "my-custom-class",
                message: "Cargando los productos",
            });
            yield loading.present();
            this.route.params.subscribe((params) => {
                console.log(params);
                if (params.id != undefined) {
                    this.productService.getProducts(params.id).subscribe((res) => {
                        console.log(res);
                        if (localStorage.getItem("cart") != undefined && localStorage.getItem("cart") != "undefined") {
                            this.cart = JSON.parse(localStorage.getItem("cart"));
                        }
                        for (let p of res.products) {
                            p.cart = 0;
                            //@ts-ignore
                            if (this.cart[p.id] != undefined) {
                                p.cart = this.cart[p.id].cart;
                            }
                        }
                        this.products = res.products;
                        this.backupProducts = res.products;
                        loading.dismiss();
                    });
                }
            });
        });
    }
    addItem(index, item) {
        this.products[index].cart++;
        this.cart.items++;
        this.cart.price += parseFloat(item.price);
        let itemExists = false;
        //@ts-ignore
        this.cart[item.id] = item;
        console.log(JSON.stringify(this.cart));
        localStorage.setItem("cart", JSON.stringify(this.cart));
    }
    removeItem(index, item) {
        this.products[index].cart--;
        this.cart.items--;
        this.cart.price -= parseFloat(item.price);
        if (this.products[index].cart == 0)
            delete this.cart[item.id];
        console.log(JSON.stringify(this.cart));
        localStorage.setItem("cart", JSON.stringify(this.cart));
    }
    searchFor() {
        console.log(this.searchWord);
        this.products = this.backupProducts;
        if (this.searchWord != "") {
            this.products = this.products.filter((current) => {
                if (current.title && this.searchWord) {
                    if (current.title.toLowerCase().indexOf(this.searchWord.toLowerCase()) > -1) {
                        return true;
                    }
                    return false;
                }
            });
        }
    }
};
NewhomePage.ctorParameters = () => [
    { type: src_app_services_products_service__WEBPACK_IMPORTED_MODULE_4__["ProductsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"] }
];
NewhomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-newhome",
        template: _raw_loader_newhome_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_newhome_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], NewhomePage);



/***/ })

}]);
//# sourceMappingURL=pages-newhome-newhome-module-es2015.js.map