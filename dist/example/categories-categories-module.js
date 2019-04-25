(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["categories-categories-module"],{

/***/ "./src/app/categories/categories-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/categories/categories-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: CategoriesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesRoutingModule", function() { return CategoriesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ */ "./src/app/categories/index.ts");




var routes = [
    { path: 'special', component: ___WEBPACK_IMPORTED_MODULE_3__["SpecialCategoryComponent"] },
    { path: ':category', component: ___WEBPACK_IMPORTED_MODULE_3__["CategoryComponent"] }
];
var CategoriesRoutingModule = /** @class */ (function () {
    function CategoriesRoutingModule() {
    }
    CategoriesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], CategoriesRoutingModule);
    return CategoriesRoutingModule;
}());



/***/ }),

/***/ "./src/app/categories/categories.module.ts":
/*!*************************************************!*\
  !*** ./src/app/categories/categories.module.ts ***!
  \*************************************************/
/*! exports provided: CategoriesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesModule", function() { return CategoriesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _categories_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./categories-routing.module */ "./src/app/categories/categories-routing.module.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ */ "./src/app/categories/index.ts");
/* harmony import */ var _product_product_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../product/product.module */ "./src/app/product/product.module.ts");








var CategoriesModule = /** @class */ (function () {
    function CategoriesModule() {
    }
    CategoriesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _categories_routing_module__WEBPACK_IMPORTED_MODULE_5__["CategoriesRoutingModule"],
                _product_product_module__WEBPACK_IMPORTED_MODULE_7__["ProductModule"],
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestoreModule"]
            ],
            exports: [],
            declarations: [___WEBPACK_IMPORTED_MODULE_6__["default"]],
            providers: []
        })
    ], CategoriesModule);
    return CategoriesModule;
}());



/***/ }),

/***/ "./src/app/categories/category/category.component.html":
/*!*************************************************************!*\
  !*** ./src/app/categories/category/category.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>{{title}}</h2>\r\n<categories-filter></categories-filter>\r\n<product-list [list]=\"productsList\"></product-list>\r\n\r\n"

/***/ }),

/***/ "./src/app/categories/category/category.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/categories/category/category.component.ts ***!
  \***********************************************************/
/*! exports provided: CategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryComponent", function() { return CategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _product_shared_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../product/shared/product.service */ "./src/app/product/shared/product.service.ts");
/* harmony import */ var _product_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../product/shared */ "./src/app/product/shared/index.ts");






var CategoryComponent = /** @class */ (function () {
    function CategoryComponent(route, productService) {
        this.route = route;
        this.productService = productService;
        this.productsList = [];
        this.productsList2 = [];
    }
    CategoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productsList = [];
        this.route.params.subscribe(function (params) {
            var cat = params['category'];
            _this.title = lodash__WEBPACK_IMPORTED_MODULE_3__["toUpper"](cat);
            if (cat === 'all') {
                _this.productService.getAllProducts().subscribe(function (products) {
                    _this.productsList = products;
                    _this.productsList.push(new _product_shared__WEBPACK_IMPORTED_MODULE_5__["DefaultProduct"]('1000', 'FAIL'));
                });
            }
            else {
                _this.productService
                    .getProductsByType(params['category'])
                    .subscribe(function (products) { return (_this.productsList = products); }, function () { return (_this.productsList = []); });
            }
        });
    };
    CategoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./category.component.html */ "./src/app/categories/category/category.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _product_shared_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"]])
    ], CategoryComponent);
    return CategoryComponent;
}());



/***/ }),

/***/ "./src/app/categories/filter/filter.component.html":
/*!*********************************************************!*\
  !*** ./src/app/categories/filter/filter.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>FILTER</mat-card>"

/***/ }),

/***/ "./src/app/categories/filter/filter.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/categories/filter/filter.component.ts ***!
  \*******************************************************/
/*! exports provided: FilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterComponent", function() { return FilterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FilterComponent = /** @class */ (function () {
    function FilterComponent() {
    }
    FilterComponent.prototype.ngOnInit = function () { };
    FilterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'categories-filter',
            template: __webpack_require__(/*! ./filter.component.html */ "./src/app/categories/filter/filter.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FilterComponent);
    return FilterComponent;
}());



/***/ }),

/***/ "./src/app/categories/index.ts":
/*!*************************************!*\
  !*** ./src/app/categories/index.ts ***!
  \*************************************/
/*! exports provided: FilterComponent, CategoryComponent, SpecialCategoryComponent, components, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
/* harmony import */ var _filter_filter_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter/filter.component */ "./src/app/categories/filter/filter.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FilterComponent", function() { return _filter_filter_component__WEBPACK_IMPORTED_MODULE_0__["FilterComponent"]; });

/* harmony import */ var _category_category_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./category/category.component */ "./src/app/categories/category/category.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CategoryComponent", function() { return _category_category_component__WEBPACK_IMPORTED_MODULE_1__["CategoryComponent"]; });

/* harmony import */ var _special_category_special_category_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./special-category/special-category.component */ "./src/app/categories/special-category/special-category.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SpecialCategoryComponent", function() { return _special_category_special_category_component__WEBPACK_IMPORTED_MODULE_2__["SpecialCategoryComponent"]; });







var components = [_category_category_component__WEBPACK_IMPORTED_MODULE_1__["CategoryComponent"], _filter_filter_component__WEBPACK_IMPORTED_MODULE_0__["FilterComponent"], _special_category_special_category_component__WEBPACK_IMPORTED_MODULE_2__["SpecialCategoryComponent"]];
/* harmony default export */ __webpack_exports__["default"] = (components);


/***/ }),

/***/ "./src/app/categories/special-category/special-category.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/categories/special-category/special-category.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "TEMPLATE OF SPECIAL CATEGORY"

/***/ }),

/***/ "./src/app/categories/special-category/special-category.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/categories/special-category/special-category.component.ts ***!
  \***************************************************************************/
/*! exports provided: SpecialCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpecialCategoryComponent", function() { return SpecialCategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SpecialCategoryComponent = /** @class */ (function () {
    function SpecialCategoryComponent() {
    }
    SpecialCategoryComponent.prototype.ngOnInit = function () { };
    SpecialCategoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./special-category.component.html */ "./src/app/categories/special-category/special-category.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SpecialCategoryComponent);
    return SpecialCategoryComponent;
}());



/***/ })

}]);
//# sourceMappingURL=categories-categories-module.js.map