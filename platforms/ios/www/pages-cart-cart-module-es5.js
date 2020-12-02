(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cart-cart-module"], {
    /***/
    "2Cor":
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cart/cart.page.html ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function Cor(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content color=\"primary\">\n  <div class=\"header\">\n    <span class=\"dimmer\"></span>\n\n    <div class=\"left\" (click)=\"goBack()\" routerDirection=\"back\">\n      <ion-icon name=\"chevron-back-outline\"></ion-icon>\n      <p>Regresar</p>\n    </div>\n    <div class=\"right\">\n      <!-- <p>Regresar</p>\n      <ion-icon name=\"chevron-back-outline\"></ion-icon> -->\n    </div>\n  </div>\n\n  <div class=\"code-wrapper \">\n    <div class=\"points\" (click)=\"presentAlert()\">\n      <p class=\"small\">TUS PUNTOS:</p>\n      <p class=\"bold\">{{points}}p</p>\n      <span> +</span>\n    </div>\n    <div class=\"tian-card\" *ngFor=\"let item of products; let i=index\">\n      <div class=\"left\">\n        <img class=\"avatar\" [src]=\"item.image_path\">\n      </div>\n      <div class=\"text\">\n        <p>{{item.title}}</p>\n        <p class=\"note\"><span>${{item.price}}/{{item.type}}</span></p>\n      </div>\n\n      <div class=\"buy\" *ngIf=\"item.cart!=0\">\n        <span class=\"full\" (click)=\"removeItem(i,item)\">-</span>\n        <span>{{item.cart}}{{item.type}}</span>\n        <span class=\"full\" (click)=\"addItem(i,item)\">+</span>\n      </div>\n      <div class=\"buy\" *ngIf=\"item.cart==0\">\n        <span class=\"wide\" (click)=\"addItem(i,item)\">Añadir</span>\n      </div>\n    </div>\n\n    <div class=\"cart\" >\n      <button class=\"red shadow\" (click)=\"payWithPoints()\" [ngClass]=\"{'disabled': cart.items === 0 || cart.price > points}\">\n        <span class=\"price\">{{cart.price}}p</span>\n        Pagar con puntos\n      </button>\n      \n      <button class=\"white shadow\" routerLink=\"/payment\" [ngClass]=\"{'disabled': cart.items === 0}\">\n        <span class=\"price\">${{cart.price}}</span>\n        Pagar con tarjeta\n      </button>\n    </div>\n  </div>\n\n</ion-content>";
      /***/
    },

    /***/
    "Y+Iu":
    /*!***************************************************!*\
      !*** ./src/app/pages/cart/cart-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: CartPageRoutingModule */

    /***/
    function YIu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CartPageRoutingModule", function () {
        return CartPageRoutingModule;
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


      var _cart_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./cart.page */
      "rqSi");

      var routes = [{
        path: '',
        component: _cart_page__WEBPACK_IMPORTED_MODULE_3__["CartPage"]
      }];

      var CartPageRoutingModule = function CartPageRoutingModule() {
        _classCallCheck(this, CartPageRoutingModule);
      };

      CartPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CartPageRoutingModule);
      /***/
    },

    /***/
    "rqSi":
    /*!*****************************************!*\
      !*** ./src/app/pages/cart/cart.page.ts ***!
      \*****************************************/

    /*! exports provided: CartPage */

    /***/
    function rqSi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CartPage", function () {
        return CartPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_cart_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./cart.page.html */
      "2Cor");
      /* harmony import */


      var _cart_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./cart.page.scss */
      "vwaP");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_products_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/products.service */
      "S3Px");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var src_app_services_users_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/users.service */
      "6Qg2");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var CartPage = /*#__PURE__*/function () {
        function CartPage(productsService, userService, loadingController, router, alertController, location) {
          _classCallCheck(this, CartPage);

          this.productsService = productsService;
          this.userService = userService;
          this.loadingController = loadingController;
          this.router = router;
          this.alertController = alertController;
          this.location = location;
          this.products = [];
          this.order = [];
          this.cart = {
            items: 0,
            price: 0
          };
          this.points = 0;
        }

        _createClass(CartPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              var loading, userId;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.loadingController.create({
                        cssClass: "my-custom-class",
                        message: "Cargando tus productos"
                      });

                    case 2:
                      loading = _context.sent;
                      _context.next = 5;
                      return loading.present();

                    case 5:
                      userId = JSON.parse(localStorage.getItem("user")).id;
                      this.userId = userId;
                      this.userService.getUser(userId).subscribe(function (res) {
                        console.log(res);
                        _this.points = res.user.points;
                      });
                      this.productsService.getAllProducts().subscribe(function (res) {
                        if (localStorage.getItem("cart") != undefined && localStorage.getItem("cart") != "undefined") {
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

                              _this.products.push(p);
                            }
                          }
                        } catch (err) {
                          _iterator.e(err);
                        } finally {
                          _iterator.f();
                        }

                        loading.dismiss();
                      });

                    case 9:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
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
          key: "presentAlert",
          value: function presentAlert() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var alert;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.alertController.create({
                        cssClass: "my-custom-class",
                        header: "Como obtener puntos",
                        message: "Es muy facil, solo le tienes que pedir al personal de TIANGO que quieres más puntos y ellos te cobraran en efectivo  1 punto por 1 peso. Solo mencionales el siguiente código: " + this.userId,
                        buttons: ["OK"]
                      });

                    case 2:
                      alert = _context2.sent;
                      _context2.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "goBack",
          value: function goBack() {
            //@ts-ignore
            this.location.back();
          }
        }, {
          key: "removeItem",
          value: function removeItem(index, item) {
            console.log(this.products[index].cart);
            this.products[index].cart = this.products[index].cart - 1;
            this.cart.items--;
            this.cart.price -= parseFloat(item.price);
            if (this.products[index].cart == 0) delete this.cart[item.id];
            console.log(JSON.stringify(this.cart));
            localStorage.setItem("cart", JSON.stringify(this.cart));
          }
        }, {
          key: "payWithPoints",
          value: function payWithPoints() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this2 = this;

              var loading, userId, cart, _i, _Object$entries, key;

              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.loadingController.create({
                        cssClass: "my-custom-class",
                        message: "Realizando pago"
                      });

                    case 2:
                      loading = _context3.sent;
                      _context3.next = 5;
                      return loading.present();

                    case 5:
                      userId = JSON.parse(localStorage.getItem("user")).id;
                      cart = JSON.parse(localStorage.getItem("cart"));

                      for (_i = 0, _Object$entries = Object.entries(cart); _i < _Object$entries.length; _i++) {
                        key = _Object$entries[_i];

                        //@ts-ignore
                        if (key[1].location_id != undefined) {
                          console.log(key[1]); //@ts-ignore

                          this.order.push({
                            id: key[1].id,
                            price: key[1].price,
                            quantity: key[1].cart
                          });
                        }
                      }

                      console.log(this.order);
                      this.userService.createOrderPoints(this.order, userId).subscribe(function (res) {
                        console.log(res);
                        loading.dismiss();
                        localStorage.setItem("cart", undefined);

                        _this2.router.navigateByUrl("/prize");
                      });

                    case 10:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }]);

        return CartPage;
      }();

      CartPage.ctorParameters = function () {
        return [{
          type: src_app_services_products_service__WEBPACK_IMPORTED_MODULE_4__["ProductsService"]
        }, {
          type: src_app_services_users_service__WEBPACK_IMPORTED_MODULE_6__["UsersService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"]
        }];
      };

      CartPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-cart",
        template: _raw_loader_cart_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cart_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], CartPage);
      /***/
    },

    /***/
    "sFz8":
    /*!*******************************************!*\
      !*** ./src/app/pages/cart/cart.module.ts ***!
      \*******************************************/

    /*! exports provided: CartPageModule */

    /***/
    function sFz8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CartPageModule", function () {
        return CartPageModule;
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


      var _cart_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./cart-routing.module */
      "Y+Iu");
      /* harmony import */


      var _cart_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./cart.page */
      "rqSi");

      var CartPageModule = function CartPageModule() {
        _classCallCheck(this, CartPageModule);
      };

      CartPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _cart_routing_module__WEBPACK_IMPORTED_MODULE_5__["CartPageRoutingModule"]],
        declarations: [_cart_page__WEBPACK_IMPORTED_MODULE_6__["CartPage"]]
      })], CartPageModule);
      /***/
    },

    /***/
    "vwaP":
    /*!*******************************************!*\
      !*** ./src/app/pages/cart/cart.page.scss ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function vwaP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".cart button {\n  text-align: left;\n  padding-left: 25px;\n}\n.cart button .price {\n  opacity: 1;\n}\n.points {\n  width: 90%;\n  padding: 10px;\n  margin: 0 auto 30px auto;\n  background: linear-gradient(90deg, #ff5959 2.63%, #ed3945 100%);\n  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);\n  border-radius: 10px;\n  position: relative;\n}\n.points p {\n  margin: 0;\n  color: whitesmoke;\n}\n.points .small {\n  font-size: 10px;\n}\n.points .bold {\n  font-weight: bolder;\n  font-size: 1.2em;\n}\n.points span {\n  width: 70px;\n  height: 70px;\n  line-height: 66px;\n  text-align: center;\n  background: linear-gradient(90deg, #ff5959 2.63%, #ed3945 100%);\n  border: 2px solid #ffffff;\n  display: block;\n  position: absolute;\n  border-radius: 50%;\n  font-weight: bolder;\n  font-size: 1.8em;\n  top: -6px;\n  right: -11px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2FydC9jYXJ0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUFDRjtBQUFFO0VBQ0UsVUFBQTtBQUVKO0FBRUE7RUFDRSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHdCQUFBO0VBRUEsK0RBQUE7RUFDQSwyQ0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFBRjtBQUVFO0VBQ0UsU0FBQTtFQUNBLGlCQUFBO0FBQUo7QUFFRTtFQUNFLGVBQUE7QUFBSjtBQUVFO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtBQUFKO0FBR0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwrREFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7QUFESiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NhcnQvY2FydC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FydCBidXR0b24ge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nLWxlZnQ6IDI1cHg7XG4gIC5wcmljZSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuXG4ucG9pbnRzIHtcbiAgd2lkdGg6IDkwJTtcbiAgcGFkZGluZzogMTBweDtcbiAgbWFyZ2luOiAwIGF1dG8gMzBweCBhdXRvO1xuXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2ZmNTk1OSAyLjYzJSwgI2VkMzk0NSAxMDAlKTtcbiAgYm94LXNoYWRvdzogMHB4IDRweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gIHAge1xuICAgIG1hcmdpbjogMDtcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcbiAgfVxuICAuc21hbGwge1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgfVxuICAuYm9sZCB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICBmb250LXNpemU6IDEuMmVtO1xuICB9XG5cbiAgc3BhbiB7XG4gICAgd2lkdGg6IDcwcHg7XG4gICAgaGVpZ2h0OiA3MHB4O1xuICAgIGxpbmUtaGVpZ2h0OiA2NnB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNmZjU5NTkgMi42MyUsICNlZDM5NDUgMTAwJSk7XG4gICAgYm9yZGVyOiAycHggc29saWQgI2ZmZmZmZjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgZm9udC1zaXplOiAxLjhlbTtcbiAgICB0b3A6IC02cHg7XG4gICAgcmlnaHQ6IC0xMXB4O1xuICB9XG59XG4iXX0= */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-cart-cart-module-es5.js.map