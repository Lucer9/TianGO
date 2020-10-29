(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-create-product-create-product-module"],{

/***/ "+0WR":
/*!***************************************************************!*\
  !*** ./src/app/admin/create-product/create-product.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2NyZWF0ZS1wcm9kdWN0L2NyZWF0ZS1wcm9kdWN0LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "3bju":
/*!*************************************************************!*\
  !*** ./src/app/admin/create-product/create-product.page.ts ***!
  \*************************************************************/
/*! exports provided: CreateProductPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateProductPage", function() { return CreateProductPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_create_product_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./create-product.page.html */ "f/8C");
/* harmony import */ var _create_product_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-product.page.scss */ "+0WR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_products_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/products.service */ "S3Px");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");







let CreateProductPage = class CreateProductPage {
    constructor(loadingController, productService, route, router) {
        this.loadingController = loadingController;
        this.productService = productService;
        this.route = route;
        this.router = router;
        this.title = "Nuevo ";
        this.product = {
            title: "",
            price: "",
            description: "",
        };
        this.formData = new FormData();
    }
    ngOnInit() {
        this.route.params.subscribe((params) => {
            console.log(params);
            if (params.id != undefined) {
                this.title = "Editar";
                this.productService.getProduct(params.id).subscribe((res) => {
                    console.log(res);
                    this.product = res.product;
                });
            }
        });
    }
    fileChange(event) {
        let fileList = event.target.files;
        if (fileList.length > 0) {
            let file = fileList[0];
            this.formData.append("title", this.product.title);
            this.formData.append("price", this.product.price);
            this.formData.append("description", this.product.description);
            this.formData.append("image", file, file.name);
            //@ts-ignore
            this.product.image = file;
            console.log(this.product);
        }
    }
    postProduct() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                cssClass: "my-custom-class",
                message: "Cargando...",
            });
            yield loading.present();
            if (this.title == "Editar") {
                //@ts-ignore
                let id = this.product.id;
                //@ts-ignore
                delete this.product.id;
                this.productService.updateProduct(this.product, this.product).subscribe((res) => {
                    console.log(res);
                    loading.dismiss();
                });
            }
            else {
                this.productService.addProduct(this.formData).subscribe((res) => {
                    console.log(res);
                    loading.dismiss();
                });
            }
        });
    }
    deleteProduct() {
        //@ts-ignore
        this.productService.deleteProduct(this.product.id).subscribe((res) => {
            console.log(res);
            this.router.navigate(["/newhome"]);
        });
    }
};
CreateProductPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"] },
    { type: src_app_services_products_service__WEBPACK_IMPORTED_MODULE_4__["ProductsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
CreateProductPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-create-product",
        template: _raw_loader_create_product_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_create_product_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CreateProductPage);



/***/ }),

/***/ "f/8C":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/create-product/create-product.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>{{title}} producto</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content class=\"ion-padding\">\n  <input placeholder=\"title\" [(ngModel)]=\"product.title\">\n  <input placeholder=\"price\" [(ngModel)]=\"product.price\">\n  <input placeholder=\"description\" [(ngModel)]=\"product.description\">\n  <input type=\"file\" *ngIf=\"title!='Editar'\" (change)=\"fileChange($event)\" placeholder=\"Upload file\" accept=\".png,.jpg\">\n  <button class=\"red shadow\" (click)=\"postProduct()\">Subir Producto</button>\n  <button class=\"white shadow\" *ngIf=\"title=='Editar'\" (click)=\"deleteProduct()\">Eliminar Producto</button>\n\n\n</ion-content>\n");

/***/ }),

/***/ "fJSs":
/*!***************************************************************!*\
  !*** ./src/app/admin/create-product/create-product.module.ts ***!
  \***************************************************************/
/*! exports provided: CreateProductPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateProductPageModule", function() { return CreateProductPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _create_product_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./create-product-routing.module */ "gj+B");
/* harmony import */ var _create_product_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./create-product.page */ "3bju");







let CreateProductPageModule = class CreateProductPageModule {
};
CreateProductPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _create_product_routing_module__WEBPACK_IMPORTED_MODULE_5__["CreateProductPageRoutingModule"]
        ],
        declarations: [_create_product_page__WEBPACK_IMPORTED_MODULE_6__["CreateProductPage"]]
    })
], CreateProductPageModule);



/***/ }),

/***/ "gj+B":
/*!***********************************************************************!*\
  !*** ./src/app/admin/create-product/create-product-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: CreateProductPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateProductPageRoutingModule", function() { return CreateProductPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _create_product_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create-product.page */ "3bju");




const routes = [
    {
        path: '',
        component: _create_product_page__WEBPACK_IMPORTED_MODULE_3__["CreateProductPage"]
    }
];
let CreateProductPageRoutingModule = class CreateProductPageRoutingModule {
};
CreateProductPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CreateProductPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=admin-create-product-create-product-module-es2015.js.map