(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-code-code-module"], {
    /***/
    "G+yW":
    /*!*******************************************!*\
      !*** ./src/app/pages/code/code.module.ts ***!
      \*******************************************/

    /*! exports provided: CodePageModule */

    /***/
    function GYW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CodePageModule", function () {
        return CodePageModule;
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


      var _code_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./code-routing.module */
      "O+IA");
      /* harmony import */


      var _code_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./code.page */
      "wp6c");

      var CodePageModule = function CodePageModule() {
        _classCallCheck(this, CodePageModule);
      };

      CodePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _code_routing_module__WEBPACK_IMPORTED_MODULE_5__["CodePageRoutingModule"]],
        declarations: [_code_page__WEBPACK_IMPORTED_MODULE_6__["CodePage"]]
      })], CodePageModule);
      /***/
    },

    /***/
    "O+IA":
    /*!***************************************************!*\
      !*** ./src/app/pages/code/code-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: CodePageRoutingModule */

    /***/
    function OIA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CodePageRoutingModule", function () {
        return CodePageRoutingModule;
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


      var _code_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./code.page */
      "wp6c");

      var routes = [{
        path: '',
        component: _code_page__WEBPACK_IMPORTED_MODULE_3__["CodePage"]
      }];

      var CodePageRoutingModule = function CodePageRoutingModule() {
        _classCallCheck(this, CodePageRoutingModule);
      };

      CodePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CodePageRoutingModule);
      /***/
    },

    /***/
    "QQD3":
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/code/code.page.html ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function QQD3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content color=\"primary\">\n  <div class=\"header\">\n    <div class=\"left\" routerLink=\"/\" routerDirection=\"back\">\n      <ion-icon name=\"chevron-back-outline\"></ion-icon>\n      <p>Regresar</p>\n    </div>\n    <div class=\"right\">\n      <!-- <p>Regresar</p>\n      <ion-icon name=\"chevron-back-outline\"></ion-icon> -->\n    </div>\n  </div>\n  <div class=\"code-wrapper ion-padding\">\n    <h2>Ingresa tu número</h2>\n    <input [(ngModel)]=\"tel\" type=\"tel\" #telInput placeholder=\"5511223344\">\n    <button class=\"red shadow sendbottom\" (click)=\"registerPhone()\">\n      Enviar código\n    </button>\n  </div>\n</ion-content>";
      /***/
    },

    /***/
    "Wz8Z":
    /*!*******************************************!*\
      !*** ./src/app/pages/code/code.page.scss ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function Wz8Z(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvZGUvY29kZS5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "wp6c":
    /*!*****************************************!*\
      !*** ./src/app/pages/code/code.page.ts ***!
      \*****************************************/

    /*! exports provided: CodePage */

    /***/
    function wp6c(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CodePage", function () {
        return CodePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_code_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./code.page.html */
      "QQD3");
      /* harmony import */


      var _code_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./code.page.scss */
      "Wz8Z");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_services_users_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/users.service */
      "6Qg2");

      var CodePage = /*#__PURE__*/function () {
        function CodePage(router, userService) {
          _classCallCheck(this, CodePage);

          this.router = router;
          this.userService = userService;
          this.tel = "";
        }

        _createClass(CodePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewLoaded",
          value: function ionViewLoaded() {
            var _this = this;

            setTimeout(function () {
              _this.telInput.setFocus();
            }, 150);
          }
        }, {
          key: "registerPhone",
          value: function registerPhone() {
            var _this2 = this;

            this.userService.register("+52" + this.tel).subscribe(function (res) {
              var user = {
                username: res.user.username,
                id: res.user.id
              };
              console.log(res);
              localStorage.setItem("user", JSON.stringify(user));

              _this2.router.navigateByUrl("/verificate");
            }, function (error) {
              console.log(error);

              if (error.error.error.code == "UsernameExistsException") {
                _this2.resendCode(); // this.router.navigateByUrl("/verificate");

              }
            }); // this.router.navigateByUrl("/verificate");
          }
        }, {
          key: "resendCode",
          value: function resendCode() {
            var _this3 = this;

            this.userService.getAllUsers().subscribe(function (res) {
              var _iterator = _createForOfIteratorHelper(res.users),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var u = _step.value;

                  if (u.phone.S == "+52" + _this3.tel) {
                    var user = {
                      username: u.username.S,
                      id: u.id.S
                    };
                    localStorage.setItem("user", JSON.stringify(user));

                    _this3.userService.resendCode(user).subscribe(function (res) {
                      _this3.router.navigateByUrl("/verificate");
                    });
                  }
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
            });
          }
        }]);

        return CodePage;
      }();

      CodePage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: src_app_services_users_service__WEBPACK_IMPORTED_MODULE_5__["UsersService"]
        }];
      };

      CodePage.propDecorators = {
        telInput: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ["telInput"]
        }]
      };
      CodePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-code",
        template: _raw_loader_code_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_code_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], CodePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-code-code-module-es5.js.map