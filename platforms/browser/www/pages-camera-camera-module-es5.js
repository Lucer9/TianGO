(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-camera-camera-module"], {
    /***/
    "+KXk":
    /*!*************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/camera/camera.page.html ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function KXk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n<ion-content class=\"transparentBody\" >\n    <div class=\"header\">\n      <div class=\"left\" (click)=\"goBack()\" >\n        <ion-icon name=\"chevron-back-outline\"></ion-icon>\n        <p>Regresar</p>\n      </div>\n    </div>\n  </ion-content>";
      /***/
    },

    /***/
    "6UuN":
    /*!***********************************************!*\
      !*** ./src/app/pages/camera/camera.page.scss ***!
      \***********************************************/

    /*! exports provided: default */

    /***/
    function UuN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --background: transparent !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2FtZXJhL2NhbWVyYS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQ0FBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY2FtZXJhL2NhbWVyYS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuIH0iXX0= */";
      /***/
    },

    /***/
    "VGGy":
    /*!*******************************************************!*\
      !*** ./src/app/pages/camera/camera-routing.module.ts ***!
      \*******************************************************/

    /*! exports provided: CameraPageRoutingModule */

    /***/
    function VGGy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CameraPageRoutingModule", function () {
        return CameraPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _camera_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./camera.page */
      "fvpQ");

      var routes = [{
        path: '',
        component: _camera_page__WEBPACK_IMPORTED_MODULE_3__["CameraPage"]
      }];

      var CameraPageRoutingModule = function CameraPageRoutingModule() {
        _classCallCheck(this, CameraPageRoutingModule);
      };

      CameraPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CameraPageRoutingModule);
      /***/
    },

    /***/
    "eoT/":
    /*!***********************************************!*\
      !*** ./src/app/pages/camera/camera.module.ts ***!
      \***********************************************/

    /*! exports provided: CameraPageModule */

    /***/
    function eoT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CameraPageModule", function () {
        return CameraPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _camera_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./camera-routing.module */
      "VGGy");
      /* harmony import */


      var _camera_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./camera.page */
      "fvpQ");

      var CameraPageModule = function CameraPageModule() {
        _classCallCheck(this, CameraPageModule);
      };

      CameraPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _camera_routing_module__WEBPACK_IMPORTED_MODULE_5__["CameraPageRoutingModule"]],
        declarations: [_camera_page__WEBPACK_IMPORTED_MODULE_6__["CameraPage"]]
      })], CameraPageModule);
      /***/
    },

    /***/
    "fvpQ":
    /*!*********************************************!*\
      !*** ./src/app/pages/camera/camera.page.ts ***!
      \*********************************************/

    /*! exports provided: CameraPage */

    /***/
    function fvpQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CameraPage", function () {
        return CameraPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_camera_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./camera.page.html */
      "+KXk");
      /* harmony import */


      var _camera_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./camera.page.scss */
      "6UuN");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_native_qr_scanner_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/qr-scanner/ngx */
      "BLr9");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var CameraPage = /*#__PURE__*/function () {
        function CameraPage(location, qrScanner, toastCtrl) {
          _classCallCheck(this, CameraPage);

          this.location = location;
          this.qrScanner = qrScanner;
          this.toastCtrl = toastCtrl;
        }

        _createClass(CameraPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "scan",
          value: function scan() {
            var _this = this;

            window.document.querySelector("ion-app").classList.add("cameraView");
            this.qrScanner.prepare().then(function (status) {
              if (status.authorized) {
                _this.qrScanner.show();

                _this.scanSubscription = _this.qrScanner.scan().subscribe(function (text) {
                  return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                    var toast;
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            _context.next = 2;
                            return this.toastCtrl.create({
                              message: "".concat(text),
                              position: 'bottom',
                              duration: 3000,
                              buttons: [{
                                side: 'start',
                                icon: 'star',
                                text: 'Favorite',
                                handler: function handler() {
                                  console.log('Favorite clicked');
                                }
                              }, {
                                text: 'Done',
                                role: 'cancel',
                                handler: function handler() {
                                  console.log('Cancel clicked');
                                }
                              }]
                            });

                          case 2:
                            toast = _context.sent;
                            toast.present();

                          case 4:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee, this);
                  }));
                });
              } else {
                console.error("Permission Denied", status);
              }
            })["catch"](function (e) {
              console.error("Error", e);
            });
          }
        }, {
          key: "stopScanning",
          value: function stopScanning() {
            this.scanSubscription ? this.scanSubscription.unsubscribe() : null;
            this.scanSubscription = null;
            window.document.querySelector("ion-app").classList.remove("cameraView");
            this.qrScanner.hide();
            this.qrScanner.destroy();
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.scan();
          }
        }, {
          key: "ionViewWillLeave",
          value: function ionViewWillLeave() {
            this.stopScanning();
          }
        }, {
          key: "goBack",
          value: function goBack() {
            this.location.back();
          }
        }]);

        return CameraPage;
      }();

      CameraPage.ctorParameters = function () {
        return [{
          type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"]
        }, {
          type: _ionic_native_qr_scanner_ngx__WEBPACK_IMPORTED_MODULE_4__["QRScanner"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]
        }];
      };

      CameraPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-camera",
        template: _raw_loader_camera_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_camera_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], CameraPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-camera-camera-module-es5.js.map