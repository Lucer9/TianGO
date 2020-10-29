(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-camera-camera-module"],{

/***/ "+KXk":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/camera/camera.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-content class=\"transparentBody\" >\n    <div class=\"header\">\n      <div class=\"left\" (click)=\"goBack()\" >\n        <ion-icon name=\"chevron-back-outline\"></ion-icon>\n        <p>Regresar</p>\n      </div>\n    </div>\n  </ion-content>");

/***/ }),

/***/ "6UuN":
/*!***********************************************!*\
  !*** ./src/app/pages/camera/camera.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: transparent !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2FtZXJhL2NhbWVyYS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQ0FBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY2FtZXJhL2NhbWVyYS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuIH0iXX0= */");

/***/ }),

/***/ "VGGy":
/*!*******************************************************!*\
  !*** ./src/app/pages/camera/camera-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: CameraPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraPageRoutingModule", function() { return CameraPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _camera_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./camera.page */ "fvpQ");




const routes = [
    {
        path: '',
        component: _camera_page__WEBPACK_IMPORTED_MODULE_3__["CameraPage"]
    }
];
let CameraPageRoutingModule = class CameraPageRoutingModule {
};
CameraPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CameraPageRoutingModule);



/***/ }),

/***/ "eoT/":
/*!***********************************************!*\
  !*** ./src/app/pages/camera/camera.module.ts ***!
  \***********************************************/
/*! exports provided: CameraPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraPageModule", function() { return CameraPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _camera_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./camera-routing.module */ "VGGy");
/* harmony import */ var _camera_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./camera.page */ "fvpQ");







let CameraPageModule = class CameraPageModule {
};
CameraPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _camera_routing_module__WEBPACK_IMPORTED_MODULE_5__["CameraPageRoutingModule"]
        ],
        declarations: [_camera_page__WEBPACK_IMPORTED_MODULE_6__["CameraPage"]]
    })
], CameraPageModule);



/***/ }),

/***/ "fvpQ":
/*!*********************************************!*\
  !*** ./src/app/pages/camera/camera.page.ts ***!
  \*********************************************/
/*! exports provided: CameraPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraPage", function() { return CameraPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_camera_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./camera.page.html */ "+KXk");
/* harmony import */ var _camera_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./camera.page.scss */ "6UuN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_native_qr_scanner_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/qr-scanner/ngx */ "BLr9");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");








let CameraPage = class CameraPage {
    constructor(location, qrScanner, toastCtrl, route, router) {
        this.location = location;
        this.qrScanner = qrScanner;
        this.toastCtrl = toastCtrl;
        this.route = route;
        this.router = router;
        this.cart = {
            items: 0,
            price: 0,
        };
        this.type = "products";
        this.text = '{"image_path":"https://bills-tec-ccm-2020-cloud.s3.amazonaws.com/1603852416615.jpeg","description":"Tacos de pastor","id":"3a987608-861a-4dac-8041-1d1c523a790d","price":"10","title":"Tacos Velez"}';
    }
    ngOnInit() {
        if (localStorage.getItem("cart") != undefined) {
            this.cart = JSON.parse(localStorage.getItem("cart"));
        }
        this.route.params.subscribe((params) => {
            console.log(params);
            if (params.type != undefined) {
                this.type = params.type;
            }
            // this.showToaster(this.text);
        });
    }
    scan() {
        window.document.querySelector("ion-app").classList.add("cameraView");
        this.qrScanner
            .prepare()
            .then((status) => {
            if (status.authorized) {
                this.qrScanner.show();
                this.scanSubscription = this.qrScanner.scan().subscribe((text) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    this.showToaster(text);
                }));
            }
            else {
                console.error("Permission Denied", status);
            }
        })
            .catch((e) => {
            console.error("Error", e);
        });
    }
    stopScanning() {
        this.scanSubscription ? this.scanSubscription.unsubscribe() : null;
        this.scanSubscription = null;
        window.document.querySelector("ion-app").classList.remove("cameraView");
        this.qrScanner.hide();
        this.qrScanner.destroy();
    }
    ionViewWillEnter() {
        this.scan();
    }
    ionViewWillLeave() {
        this.stopScanning();
    }
    goBack() {
        this.location.back();
    }
    addItem(item) {
        if (this.cart[item.id] != undefined) {
            console.log("add");
            item.cart = this.cart[item.id].cart = this.cart[item.id].cart + 1;
        }
        else {
            item.cart = 1;
        }
        this.cart.items++;
        this.cart.price += parseFloat(item.price);
        let itemExists = false;
        //@ts-ignore
        this.cart[item.id] = item;
        localStorage.setItem("cart", JSON.stringify(this.cart));
    }
    showToaster(json) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let parseJSON = JSON.parse(json);
            if (this.type == "market") {
                this.router.navigateByUrl("/newhome/" + parseJSON.id);
            }
            else {
                this.addItem(parseJSON);
                console.log(this.cart);
                let toast = yield this.toastCtrl.create({
                    message: `Se añadio al carrito ${parseJSON.title}`,
                    position: "bottom",
                    duration: 3000,
                    buttons: [
                        // {
                        //   side: "start",
                        //   icon: "star",
                        //   text: "Favorite",
                        //   handler: () => {
                        //     console.log("Favorite clicked");
                        //   },
                        // },
                        {
                            text: "Pagar",
                            role: "cancel",
                            handler: () => {
                                this.router.navigateByUrl("/cart");
                                console.log("Cancel clicked");
                            },
                        },
                    ],
                });
                toast.present();
            }
        });
    }
};
CameraPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"] },
    { type: _ionic_native_qr_scanner_ngx__WEBPACK_IMPORTED_MODULE_4__["QRScanner"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
];
CameraPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-camera",
        template: _raw_loader_camera_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_camera_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CameraPage);



/***/ })

}]);
//# sourceMappingURL=pages-camera-camera-module-es2015.js.map