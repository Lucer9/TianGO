(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-create-product-create-product-module"], {
    /***/
    "+0WR":
    /*!***************************************************************!*\
      !*** ./src/app/admin/create-product/create-product.page.scss ***!
      \***************************************************************/

    /*! exports provided: default */

    /***/
    function WR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2NyZWF0ZS1wcm9kdWN0L2NyZWF0ZS1wcm9kdWN0LnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "3bju":
    /*!*************************************************************!*\
      !*** ./src/app/admin/create-product/create-product.page.ts ***!
      \*************************************************************/

    /*! exports provided: CreateProductPage */

    /***/
    function bju(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CreateProductPage", function () {
        return CreateProductPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_create_product_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./create-product.page.html */
      "f/8C");
      /* harmony import */


      var _create_product_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./create-product.page.scss */
      "+0WR");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_products_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/products.service */
      "S3Px");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var CreateProductPage = /*#__PURE__*/function () {
        function CreateProductPage(loadingController, productService, route, router) {
          _classCallCheck(this, CreateProductPage);

          this.loadingController = loadingController;
          this.productService = productService;
          this.route = route;
          this.router = router;
          this.title = "Nuevo ";
          this.product = {
            title: "",
            price: "",
            description: ""
          };
          this.formData = new FormData();
        }

        _createClass(CreateProductPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.route.params.subscribe(function (params) {
              console.log(params);

              if (params.id != undefined) {
                _this.title = "Editar";

                _this.productService.getProduct(params.id).subscribe(function (res) {
                  console.log(res);
                  _this.product = res.product;
                });
              }
            });
          }
        }, {
          key: "fileChange",
          value: function fileChange(event) {
            var fileList = event.target.files;

            if (fileList.length > 0) {
              var file = fileList[0];
              this.formData.append("title", this.product.title);
              this.formData.append("price", this.product.price);
              this.formData.append("description", this.product.description);
              this.formData.append("image", file, file.name); //@ts-ignore

              this.product.image = file;
              console.log(this.product);
            }
          }
        }, {
          key: "postProduct",
          value: function postProduct() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var loading, id;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.loadingController.create({
                        cssClass: "my-custom-class",
                        message: "Cargando..."
                      });

                    case 2:
                      loading = _context.sent;
                      _context.next = 5;
                      return loading.present();

                    case 5:
                      if (this.title == "Editar") {
                        //@ts-ignore
                        id = this.product.id; //@ts-ignore

                        delete this.product.id;
                        this.productService.updateProduct(this.product, this.product).subscribe(function (res) {
                          console.log(res);
                          loading.dismiss();
                        });
                      } else {
                        this.productService.addProduct(this.formData).subscribe(function (res) {
                          console.log(res);
                          loading.dismiss();
                        });
                      }

                    case 6:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "deleteProduct",
          value: function deleteProduct() {
            var _this2 = this;

            //@ts-ignore
            this.productService.deleteProduct(this.product.id).subscribe(function (res) {
              console.log(res);

              _this2.router.navigate(["/newhome"]);
            });
          }
        }]);

        return CreateProductPage;
      }();

      CreateProductPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"]
        }, {
          type: src_app_services_products_service__WEBPACK_IMPORTED_MODULE_4__["ProductsService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }];
      };

      CreateProductPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-create-product",
        template: _raw_loader_create_product_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_create_product_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], CreateProductPage);
      /***/
    },

    /***/
    "f/8C":
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/create-product/create-product.page.html ***!
      \*****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function f8C(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>{{title}} producto</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content class=\"ion-padding\">\n  <input placeholder=\"title\" [(ngModel)]=\"product.title\">\n  <input placeholder=\"price\" [(ngModel)]=\"product.price\">\n  <input placeholder=\"description\" [(ngModel)]=\"product.description\">\n  <input type=\"file\" *ngIf=\"title!='Editar'\" (change)=\"fileChange($event)\" placeholder=\"Upload file\" accept=\".png,.jpg\">\n  <button class=\"red shadow\" (click)=\"postProduct()\">Subir Producto</button>\n  <button class=\"white shadow\" *ngIf=\"title=='Editar'\" (click)=\"deleteProduct()\">Eliminar Producto</button>\n\n\n</ion-content>\n";
      /***/
    },

    /***/
    "fJSs":
    /*!***************************************************************!*\
      !*** ./src/app/admin/create-product/create-product.module.ts ***!
      \***************************************************************/

    /*! exports provided: CreateProductPageModule */

    /***/
    function fJSs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CreateProductPageModule", function () {
        return CreateProductPageModule;
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


      var _create_product_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./create-product-routing.module */
      "gj+B");
      /* harmony import */


      var _create_product_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./create-product.page */
      "3bju");

      var CreateProductPageModule = function CreateProductPageModule() {
        _classCallCheck(this, CreateProductPageModule);
      };

      CreateProductPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _create_product_routing_module__WEBPACK_IMPORTED_MODULE_5__["CreateProductPageRoutingModule"]],
        declarations: [_create_product_page__WEBPACK_IMPORTED_MODULE_6__["CreateProductPage"]]
      })], CreateProductPageModule);
      /***/
    },

    /***/
    "gj+B":
    /*!***********************************************************************!*\
      !*** ./src/app/admin/create-product/create-product-routing.module.ts ***!
      \***********************************************************************/

    /*! exports provided: CreateProductPageRoutingModule */

    /***/
    function gjB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CreateProductPageRoutingModule", function () {
        return CreateProductPageRoutingModule;
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


      var _create_product_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./create-product.page */
      "3bju");

      var routes = [{
        path: '',
        component: _create_product_page__WEBPACK_IMPORTED_MODULE_3__["CreateProductPage"]
      }];

      var CreateProductPageRoutingModule = function CreateProductPageRoutingModule() {
        _classCallCheck(this, CreateProductPageRoutingModule);
      };

      CreateProductPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CreateProductPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=admin-create-product-create-product-module-es5.js.map