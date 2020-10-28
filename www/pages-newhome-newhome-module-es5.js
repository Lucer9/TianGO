(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-newhome-newhome-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/newhome/newhome.page.html":
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/newhome/newhome.page.html ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesNewhomeNewhomePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content color=\"primary\">\n  <div class=\"header\">\n    <div class=\"left\">\n      <ion-icon name=\"qr-code-outline\"></ion-icon>\n      <p>Escanéa el código o...</p>\n    </div>\n    <div class=\"right\">\n      <!-- <p>Regresar</p>\n      <ion-icon name=\"chevron-back-outline\"></ion-icon> -->\n    </div>\n  </div>\n  <div class=\"code-wrapper \">\n\n    <div class=\"ion-padding\">\n      <h2>Busca un Producto</h2>\n      <input [(ngModel)]=\"searchWord\" (input)=\"searchFor()\" class=\"search\" placeholder=\"Mercado\">\n    </div>\n    <!-- <h2 class=\"padding\">Marchantes:</h2>\n    <div class=\"scrollmenu\">\n      <div class=\"item\" *ngFor=\"let item of personas\" routerLink=\"/person-detail\">\n        <img [src]=\"item.img\">\n        <p class=\"bold\">{{item.name}}</p>\n        <p class=\"category\">{{item.category}}</p>\n      </div>\n    </div> -->\n    <br>\n    <!-- <h2 class=\"padding\">Productos:</h2> -->\n    <div class=\"tian-card user-badge\" *ngFor=\"let item of products; let i=index\">\n      <div class=\"left\">\n        <img class=\"avatar\" [src]=\"item.image_path\">\n        <!-- <img class=\"user\" [src]=\"item.avatar\"> -->\n      </div>\n      <div class=\"text\">\n        <p>{{item.title}}</p>\n        <p class=\"note\"><span>${{item.price}}/kg</span></p>\n      </div>\n\n      <div class=\"buy\" *ngIf=\"item.cart!=0\">\n        <span class=\"full\" (click)=\"removeItem(i,item)\">-</span>\n        <span>{{item.cart}}{{item.type}}</span>\n        <span class=\"full\" (click)=\"addItem(i,item)\">+</span>\n      </div>\n      <div class=\"buy\" *ngIf=\"item.cart==0\">\n        <span class=\"wide\" (click)=\"addItem(i,item)\">Añadir</span>\n      </div>\n    </div>\n\n    <div class=\"cart\" routerLink=\"/cart\" [ngClass]=\"{'disabled': cart.items === 0}\">\n      <button class=\"red shadow\">\n        <span class=\"number\">{{cart.items}}</span>\n        <span class=\"price\">${{cart.price}}</span>\n\n        Ver la bolsa\n      </button>\n    </div>\n\n  </div>\n\n\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/pages/newhome/newhome-routing.module.ts":
    /*!*********************************************************!*\
      !*** ./src/app/pages/newhome/newhome-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: NewhomePageRoutingModule */

    /***/
    function srcAppPagesNewhomeNewhomeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewhomePageRoutingModule", function () {
        return NewhomePageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _newhome_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./newhome.page */
      "./src/app/pages/newhome/newhome.page.ts");

      var routes = [{
        path: '',
        component: _newhome_page__WEBPACK_IMPORTED_MODULE_3__["NewhomePage"]
      }];

      var NewhomePageRoutingModule = function NewhomePageRoutingModule() {
        _classCallCheck(this, NewhomePageRoutingModule);
      };

      NewhomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], NewhomePageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/newhome/newhome.module.ts":
    /*!*************************************************!*\
      !*** ./src/app/pages/newhome/newhome.module.ts ***!
      \*************************************************/

    /*! exports provided: NewhomePageModule */

    /***/
    function srcAppPagesNewhomeNewhomeModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewhomePageModule", function () {
        return NewhomePageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _newhome_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./newhome-routing.module */
      "./src/app/pages/newhome/newhome-routing.module.ts");
      /* harmony import */


      var _newhome_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./newhome.page */
      "./src/app/pages/newhome/newhome.page.ts");

      var NewhomePageModule = function NewhomePageModule() {
        _classCallCheck(this, NewhomePageModule);
      };

      NewhomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _newhome_routing_module__WEBPACK_IMPORTED_MODULE_5__["NewhomePageRoutingModule"]],
        declarations: [_newhome_page__WEBPACK_IMPORTED_MODULE_6__["NewhomePage"]]
      })], NewhomePageModule);
      /***/
    },

    /***/
    "./src/app/pages/newhome/newhome.page.scss":
    /*!*************************************************!*\
      !*** ./src/app/pages/newhome/newhome.page.scss ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesNewhomeNewhomePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".scrollmenu {\n  overflow: auto;\n  white-space: nowrap;\n}\n\n.scrollmenu .item {\n  display: inline-block;\n  text-align: center;\n  background-color: white;\n  padding: 14px;\n  text-decoration: none;\n}\n\n.scrollmenu .item img {\n  height: 70px;\n  width: 70px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 50%;\n  box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.25);\n}\n\n.scrollmenu .item:hover {\n  background-color: rgba(0, 0, 0, 0.03);\n  border-radius: 5px;\n  cursor: pointer;\n}\n\n.ion-padding {\n  padding: 0 20px !important;\n}\n\n.ion-padding input {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbmV3aG9tZS9uZXdob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0FBQ0Y7O0FBQUU7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLDZDQUFBO0FBRUo7O0FBRUE7RUFDRSxxQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0UsMEJBQUE7QUFDRjs7QUFBRTtFQUNFLFNBQUE7QUFFSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25ld2hvbWUvbmV3aG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2Nyb2xsbWVudSB7XG4gIG92ZXJmbG93OiBhdXRvO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4uc2Nyb2xsbWVudSAuaXRlbSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMTRweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBpbWcge1xuICAgIGhlaWdodDogNzBweDtcbiAgICB3aWR0aDogNzBweDtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYm94LXNoYWRvdzogLTJweCAycHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICB9XG59XG5cbi5zY3JvbGxtZW51IC5pdGVtOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjAzKTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5pb24tcGFkZGluZyB7XG4gIHBhZGRpbmc6IDAgMjBweCAhaW1wb3J0YW50O1xuICBpbnB1dCB7XG4gICAgbWFyZ2luOiAwO1xuICB9XG59XG4iXX0= */";
      /***/
    },

    /***/
    "./src/app/pages/newhome/newhome.page.ts":
    /*!***********************************************!*\
      !*** ./src/app/pages/newhome/newhome.page.ts ***!
      \***********************************************/

    /*! exports provided: NewhomePage */

    /***/
    function srcAppPagesNewhomeNewhomePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewhomePage", function () {
        return NewhomePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var src_app_services_products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/products.service */
      "./src/app/services/products.service.ts");

      var NewhomePage = /*#__PURE__*/function () {
        function NewhomePage(productsService) {
          _classCallCheck(this, NewhomePage);

          this.productsService = productsService;
          this.personas = [{
            img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
            name: "Clotilde",
            category: "Frutas y Verduras"
          }, {
            img: "https://mibimibi-assets.mangege.com/stickers/dad1b451d905431685efa1776141725a/618183dfe03050e4b61732413afb384c.jpg",
            name: "Mofupiyo",
            category: "Productos Varios"
          }, {
            img: "https://avatars0.githubusercontent.com/u/1113708?s=460&v=4",
            name: "Juan Velez",
            category: "Amazon Merchandise"
          }];
          this.products = [{
            id: 1,
            price: 50,
            title: "Melón",
            image_path: "https://www.superama.com.mx/Content/images/products/img_large/0000000004050L.jpg",
            cart: 0
          }];
          this.cart = {
            items: 0,
            price: 0
          };
        }

        _createClass(NewhomePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.productsService.getProducts().subscribe(function (res) {
              if (localStorage.getItem("cart") != undefined) {
                _this.cart = JSON.parse(localStorage.getItem("cart"));
              }

              console.log(res);

              var _iterator = _createForOfIteratorHelper(res.products),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var p = _step.value;
                  p.cart = 0; //@ts-ignore

                  if (_this.cart[p.id] != undefined) {
                    p.cart = _this.cart[p.id].cart;
                  }
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }

              _this.products = res.products;
            });
          }
        }, {
          key: "addItem",
          value: function addItem(index, item) {
            this.products[index].cart++;
            this.cart.items++;
            this.cart.price += parseFloat(item.price);
            var itemExists = false; //@ts-ignore

            this.cart[item.id] = item;
            console.log(JSON.stringify(this.cart));
            localStorage.setItem("cart", JSON.stringify(this.cart));
          }
        }, {
          key: "removeItem",
          value: function removeItem(index, item) {
            this.products[index].cart--;
            this.cart.items--;
            this.cart.price -= parseFloat(item.price);
            delete this.cart[item.id];
            console.log(JSON.stringify(this.cart));
            localStorage.setItem("cart", JSON.stringify(this.cart));
          }
        }]);

        return NewhomePage;
      }();

      NewhomePage.ctorParameters = function () {
        return [{
          type: src_app_services_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"]
        }];
      };

      NewhomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-newhome",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./newhome.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/newhome/newhome.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./newhome.page.scss */
        "./src/app/pages/newhome/newhome.page.scss"))["default"]]
      })], NewhomePage);
      /***/
    },

    /***/
    "./src/app/services/products.service.ts":
    /*!**********************************************!*\
      !*** ./src/app/services/products.service.ts ***!
      \**********************************************/

    /*! exports provided: ProductsService */

    /***/
    function srcAppServicesProductsServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductsService", function () {
        return ProductsService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/environments/environment */
      "./src/environments/environment.ts");

      var ProductsService = /*#__PURE__*/function () {
        function ProductsService(http) {
          _classCallCheck(this, ProductsService);

          this.http = http;
        }

        _createClass(ProductsService, [{
          key: "getProducts",
          value: function getProducts() {
            return this.http.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].endpoint, "/products"));
          }
        }]);

        return ProductsService;
      }();

      ProductsService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      ProductsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], ProductsService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-newhome-newhome-module-es5.js.map