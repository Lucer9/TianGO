(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-homepage-homepage-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/homepage/homepage.page.html":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/homepage/homepage.page.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesHomepageHomepagePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content color=\"primary\" [fullscreen]=\"true\">\n  <div class=\"wrapper\">\n    \n  </div>\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/pages/homepage/homepage-routing.module.ts":
    /*!***********************************************************!*\
      !*** ./src/app/pages/homepage/homepage-routing.module.ts ***!
      \***********************************************************/

    /*! exports provided: HomepagePageRoutingModule */

    /***/
    function srcAppPagesHomepageHomepageRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomepagePageRoutingModule", function () {
        return HomepagePageRoutingModule;
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


      var _homepage_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./homepage.page */
      "./src/app/pages/homepage/homepage.page.ts");

      var routes = [{
        path: '',
        component: _homepage_page__WEBPACK_IMPORTED_MODULE_3__["HomepagePage"]
      }];

      var HomepagePageRoutingModule = function HomepagePageRoutingModule() {
        _classCallCheck(this, HomepagePageRoutingModule);
      };

      HomepagePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], HomepagePageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/homepage/homepage.module.ts":
    /*!***************************************************!*\
      !*** ./src/app/pages/homepage/homepage.module.ts ***!
      \***************************************************/

    /*! exports provided: HomepagePageModule */

    /***/
    function srcAppPagesHomepageHomepageModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomepagePageModule", function () {
        return HomepagePageModule;
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


      var _homepage_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./homepage-routing.module */
      "./src/app/pages/homepage/homepage-routing.module.ts");
      /* harmony import */


      var _homepage_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./homepage.page */
      "./src/app/pages/homepage/homepage.page.ts");

      var HomepagePageModule = function HomepagePageModule() {
        _classCallCheck(this, HomepagePageModule);
      };

      HomepagePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _homepage_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomepagePageRoutingModule"]],
        declarations: [_homepage_page__WEBPACK_IMPORTED_MODULE_6__["HomepagePage"]]
      })], HomepagePageModule);
      /***/
    },

    /***/
    "./src/app/pages/homepage/homepage.page.scss":
    /*!***************************************************!*\
      !*** ./src/app/pages/homepage/homepage.page.scss ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesHomepageHomepagePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".white {\n  color: white;\n}\n\n.wrapper {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  height: 91vh;\n  background-color: white;\n  border-radius: 5% 5% 0 0;\n  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.75);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZXBhZ2UvaG9tZXBhZ2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLHdCQUFBO0VBR0EsZ0RBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWVwYWdlL2hvbWVwYWdlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53aGl0ZXtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi53cmFwcGVye1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA5MXZoO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDUlIDUlIDAgMDtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggMjBweCAwcHggcmdiYSgwLDAsMCwwLjc1KTtcbiAgICAtbW96LWJveC1zaGFkb3c6IDBweCAwcHggMjBweCAwcHggcmdiYSgwLDAsMCwwLjc1KTtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggMHB4IHJnYmEoMCwwLDAsMC43NSk7XG59Il19 */";
      /***/
    },

    /***/
    "./src/app/pages/homepage/homepage.page.ts":
    /*!*************************************************!*\
      !*** ./src/app/pages/homepage/homepage.page.ts ***!
      \*************************************************/

    /*! exports provided: HomepagePage */

    /***/
    function srcAppPagesHomepageHomepagePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomepagePage", function () {
        return HomepagePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var HomepagePage = /*#__PURE__*/function () {
        function HomepagePage() {
          _classCallCheck(this, HomepagePage);
        }

        _createClass(HomepagePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return HomepagePage;
      }();

      HomepagePage.ctorParameters = function () {
        return [];
      };

      HomepagePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-homepage',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./homepage.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/homepage/homepage.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./homepage.page.scss */
        "./src/app/pages/homepage/homepage.page.scss"))["default"]]
      })], HomepagePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-homepage-homepage-module-es5.js.map