webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/adminlte/content/content.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/adminlte/content/content.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"content-header\">\r\n    <h1>\r\n        Dashboard\r\n        <small>Version 2.0</small>\r\n    </h1>\r\n</section>\r\n\r\n<section class=\"content\">\r\n\r\n    <div class=\"row\">\r\n\r\n        <div class=\"col-md-12\">\r\n            <div class=\"box box-primary\">\r\n\r\n                <div class=\"box-body\">\r\n\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n\r\n</section>"

/***/ }),

/***/ "./src/app/adminlte/content/content.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContentComponent = /** @class */ (function () {
    function ContentComponent() {
    }
    ContentComponent.prototype.ngOnInit = function () {
    };
    ContentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-content',
            template: __webpack_require__("./src/app/adminlte/content/content.component.html"),
            styles: [__webpack_require__("./src/app/adminlte/content/content.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContentComponent);
    return ContentComponent;
}());



/***/ }),

/***/ "./src/app/adminlte/footer/footer.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/adminlte/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"main-footer\">\r\n    <div class=\"pull-right hidden-xs\">\r\n        <b>Version</b> 1.0\r\n    </div>\r\n    <strong>Copyright &copy; 2018 <a href=\"https://akonto.ltd\">Akonto</a>.</strong> All rights reserved.\r\n</footer>"

/***/ }),

/***/ "./src/app/adminlte/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/adminlte/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/adminlte/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/adminlte/header/header.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/adminlte/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"main-header\">\r\n\r\n    <!-- Logo -->\r\n    <a href=\"index2.html\" class=\"logo\">\r\n        <!-- mini logo for sidebar mini 50x50 pixels -->\r\n        <!-- <span class=\"logo-mini\"><b>A</b> R</span> -->\r\n        <!-- logo for regular state and mobile devices -->\r\n        <span class=\"logo-lg\"><b>Akonxo</b> RMS</span>\r\n    </a>\r\n\r\n    <!-- Header Navbar: style can be found in header.less -->\r\n    <nav class=\"navbar navbar-static-top\">\r\n        <!-- Sidebar toggle button-->\r\n        <a href=\"#\" class=\"sidebar-toggle\" data-toggle=\"push-menu\" role=\"button\">\r\n            <span class=\"sr-only\">Toggle navigation</span>\r\n        </a>\r\n        <!-- Navbar Right Menu -->\r\n        <div class=\"navbar-custom-menu\">\r\n            <ul class=\"nav navbar-nav\">\r\n\r\n                <li>\r\n                    <a routerLink=\"/table-and-orders\" style=\"background-color: rgb(233, 80, 80);\" class=\"btn btn-danger\"> <i class=\"fa fa-table\"></i> Tables and Orders</a>\r\n                </li>\r\n\r\n                <!-- User Account: style can be found in dropdown.less -->\r\n                <li class=\"dropdown user user-menu\">\r\n                    <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n                        <img src=\"assets/dist/img/user2-160x160.jpg\" class=\"user-image\" alt=\"User Image\">\r\n                        <span class=\"hidden-xs\">{{user?.name}}</span>\r\n                    </a>\r\n                    <ul class=\"dropdown-menu\">\r\n                        <!-- User image -->\r\n                        <li class=\"user-header\">\r\n                            <img src=\"assets/dist/img/user2-160x160.jpg\" class=\"img-circle\" alt=\"User Image\">\r\n\r\n                            <p>\r\n                                {{user?.name}}\r\n                                <!-- <small>Member since Nov. 2012</small> -->\r\n                            </p>\r\n                        </li>\r\n                        <!-- Menu Body -->\r\n\r\n                        <!-- Menu Footer-->\r\n                        <li class=\"user-footer\">\r\n                            <div class=\"pull-left\">\r\n                                <a href=\"#\" class=\"btn btn-default btn-flat\">Profile</a>\r\n                            </div>\r\n                            <div class=\"pull-right\">\r\n                                <a (click)=\"logoutBtnClicked()\" class=\"btn btn-default btn-flat\">Sign out</a>\r\n                            </div>\r\n                        </li>\r\n                    </ul>\r\n                </li>\r\n\r\n            </ul>\r\n        </div>\r\n\r\n    </nav>\r\n</header>"

/***/ }),

/***/ "./src/app/adminlte/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(authService) {
        this.authService = authService;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getLoggedInUserInfo()
            .subscribe(function (data) {
            _this.user = data;
        });
    };
    HeaderComponent.prototype.logoutBtnClicked = function () {
        this.authService.logout();
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-header',
            template: __webpack_require__("./src/app/adminlte/header/header.component.html"),
            styles: [__webpack_require__("./src/app/adminlte/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/adminlte/sidebar/sidebar.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/adminlte/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Left side column. contains the logo and sidebar -->\r\n<aside class=\"main-sidebar\">\r\n    <!-- sidebar: style can be found in sidebar.less -->\r\n    <section class=\"sidebar\">\r\n        <!-- Sidebar user panel -->\r\n        <div class=\"user-panel\">\r\n            <div class=\"pull-left image\">\r\n                <img src=\"assets/dist/img/user2-160x160.jpg\" class=\"img-circle\" alt=\"User Image\">\r\n            </div>\r\n            <div class=\"pull-left info\">\r\n                <p>{{user?.name}}</p>\r\n                <a href=\"#\"><i class=\"fa fa-circle text-success\"></i> Online</a>\r\n            </div>\r\n        </div>\r\n\r\n\r\n        <!-- sidebar menu: : style can be found in sidebar.less -->\r\n        <ul class=\"sidebar-menu\" data-widget=\"tree\">\r\n\r\n            <!-- <li class=\"header\">MAIN NAVIGATION</li> -->\r\n\r\n            <ng-template [ngIf]=\"menus != null\">\r\n                <ng-container *ngFor=\"let menu of menus\">\r\n\r\n                    <ng-template [ngIf]=\"menu.children == null\">\r\n                        <li>\r\n                            <a routerLink=\"/{{menu.url}}\">\r\n                                <i class=\"{{menu.icon}}\"></i> <span>{{menu.name}}</span>\r\n                            </a>\r\n                        </li>\r\n                    </ng-template>\r\n\r\n                    <ng-template [ngIf]=\"menu.children != null\">\r\n                        <li class=\"treeview\">\r\n                            <a href=\"#\">\r\n                                <i class=\"{{menu.icon}}\"></i> <span>{{menu.name}}</span>\r\n                            </a>\r\n                            <ul class=\"treeview-menu\">\r\n\r\n                                <ng-container *ngFor=\"let child_menu of menu.children\">\r\n                                    <li><a routerLink=\"/{{child_menu.url}}\"><i class=\"{{child_menu.icon}}\"></i> {{child_menu.name}}</a></li>\r\n                                </ng-container>\r\n\r\n                            </ul>\r\n                        </li>\r\n                    </ng-template>\r\n\r\n                </ng-container>\r\n            </ng-template>\r\n\r\n\r\n\r\n            <!-- \r\n      <li class=\"treeview\">\r\n        <a href=\"#\">\r\n          <i class=\"fa fa-dashboard\"></i> <span>Dashboard</span>\r\n        </a>\r\n        <ul class=\"treeview-menu\">\r\n          <li><a href=\"index.html\"><i class=\"fa fa-circle-o\"></i> Dashboard v1</a></li>\r\n          <li><a href=\"index2.html\"><i class=\"fa fa-circle-o\"></i> Dashboard v2</a></li>\r\n        </ul>\r\n      </li>\r\n      \r\n      <li>\r\n        <a href=\"https://adminlte.io/docs\">\r\n          <i class=\"fa fa-book\"></i> <span>Documentation</span>\r\n        </a>\r\n      </li> \r\n      -->\r\n\r\n        </ul>\r\n    </section>\r\n    <!-- /.sidebar -->\r\n</aside>"

/***/ }),

/***/ "./src/app/adminlte/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_config_service__ = __webpack_require__("./src/app/services/config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_retryWhen__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/retryWhen.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(authService, http, config) {
        this.authService = authService;
        this.http = http;
        this.config = config;
    }
    SidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getLoggedInUserInfo()
            .subscribe(function (data) {
            _this.user = data;
        });
        this.http.get(this.config.base_url + '/api/get-menus')
            .subscribe(function (data) {
            _this.menus = data;
        });
    };
    SidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__("./src/app/adminlte/sidebar/sidebar.component.html"),
            styles: [__webpack_require__("./src/app/adminlte/sidebar/sidebar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__services_config_service__["a" /* ConfigService */]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tables_and_orders_tables_and_orders_component__ = __webpack_require__("./src/app/tables-and-orders/tables-and-orders.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_guard_service__ = __webpack_require__("./src/app/services/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__users_users_component__ = __webpack_require__("./src/app/users/users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__user_form_user_form_component__ = __webpack_require__("./src/app/user-form/user-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__tables_tables_component__ = __webpack_require__("./src/app/tables/tables.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__table_table_component__ = __webpack_require__("./src/app/table/table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__items_items_component__ = __webpack_require__("./src/app/items/items.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__item_item_component__ = __webpack_require__("./src/app/item/item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__order_order_component__ = __webpack_require__("./src/app/order/order.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__settings_settings_component__ = __webpack_require__("./src/app/settings/settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__reports_sales_report_sales_report_component__ = __webpack_require__("./src/app/reports/sales-report/sales-report.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__reports_collection_report_collection_report_component__ = __webpack_require__("./src/app/reports/collection-report/collection-report.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var routes = [
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */] },
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_13__home_home_component__["a" /* HomeComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_4__services_auth_guard_service__["a" /* AuthGuardService */]],
        children: [
            { path: 'table-and-orders', component: __WEBPACK_IMPORTED_MODULE_3__tables_and_orders_tables_and_orders_component__["a" /* TablesAndOrdersComponent */] },
            { path: 'add-order', component: __WEBPACK_IMPORTED_MODULE_11__order_order_component__["a" /* OrderComponent */] },
            { path: 'edit-order/:id', component: __WEBPACK_IMPORTED_MODULE_11__order_order_component__["a" /* OrderComponent */] },
            { path: 'settings', component: __WEBPACK_IMPORTED_MODULE_12__settings_settings_component__["a" /* SettingsComponent */] },
            { path: 'users', component: __WEBPACK_IMPORTED_MODULE_5__users_users_component__["a" /* UsersComponent */] },
            { path: 'user', component: __WEBPACK_IMPORTED_MODULE_6__user_form_user_form_component__["a" /* UserFormComponent */] },
            { path: 'user/:id', component: __WEBPACK_IMPORTED_MODULE_6__user_form_user_form_component__["a" /* UserFormComponent */] },
            { path: 'tables', component: __WEBPACK_IMPORTED_MODULE_7__tables_tables_component__["a" /* TablesComponent */] },
            { path: 'table', component: __WEBPACK_IMPORTED_MODULE_8__table_table_component__["a" /* TableComponent */] },
            { path: 'table/:id', component: __WEBPACK_IMPORTED_MODULE_8__table_table_component__["a" /* TableComponent */] },
            { path: 'items', component: __WEBPACK_IMPORTED_MODULE_9__items_items_component__["a" /* ItemsComponent */] },
            { path: 'item', component: __WEBPACK_IMPORTED_MODULE_10__item_item_component__["a" /* ItemComponent */] },
            { path: 'item/:id', component: __WEBPACK_IMPORTED_MODULE_10__item_item_component__["a" /* ItemComponent */] },
            { path: 'sales-report', component: __WEBPACK_IMPORTED_MODULE_14__reports_sales_report_sales_report_component__["a" /* SalesReportComponent */] },
            { path: 'collection-report', component: __WEBPACK_IMPORTED_MODULE_15__reports_collection_report_collection_report_component__["a" /* CollectionReportComponent */] },
        ]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]],
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forRoot(routes)],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<ng2-slim-loading-bar></ng2-slim-loading-bar>\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_slim_loading_bar__ = __webpack_require__("./node_modules/ng2-slim-loading-bar/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(_loadingBar, authService, router) {
        var _this = this;
        this._loadingBar = _loadingBar;
        this.authService = authService;
        this.router = router;
        this.title = 'app';
        this.is_logged_in = false;
        this.router.events.subscribe(function (event) {
            _this.is_logged_in = _this.authService.isLoggedIn();
            $(document).ready(function () {
                $(window).resize();
            });
        });
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ng2_slim_loading_bar__["b" /* SlimLoadingBarService */], __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_slim_loading_bar__ = __webpack_require__("./node_modules/ng2-slim-loading-bar/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_pagination__ = __webpack_require__("./node_modules/ngx-bootstrap/pagination/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__ = __webpack_require__("./node_modules/primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_primeng_dialog__ = __webpack_require__("./node_modules/primeng/dialog.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_primeng_dialog___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_primeng_dialog__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_primeng_button__ = __webpack_require__("./node_modules/primeng/button.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_primeng_button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_primeng_button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__adminlte_header_header_component__ = __webpack_require__("./src/app/adminlte/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__adminlte_sidebar_sidebar_component__ = __webpack_require__("./src/app/adminlte/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__adminlte_footer_footer_component__ = __webpack_require__("./src/app/adminlte/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__adminlte_content_content_component__ = __webpack_require__("./src/app/adminlte/content/content.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_config_service__ = __webpack_require__("./src/app/services/config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__interceptors_loader_interceptor_service__ = __webpack_require__("./src/app/interceptors/loader-interceptor.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__interceptors_auth_interceptor_service__ = __webpack_require__("./src/app/interceptors/auth-interceptor.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__tables_and_orders_tables_and_orders_component__ = __webpack_require__("./src/app/tables-and-orders/tables-and-orders.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_auth_guard_service__ = __webpack_require__("./src/app/services/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__users_users_component__ = __webpack_require__("./src/app/users/users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__user_form_user_form_component__ = __webpack_require__("./src/app/user-form/user-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_users_service__ = __webpack_require__("./src/app/services/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__keys_pipe__ = __webpack_require__("./src/app/keys.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__tables_tables_component__ = __webpack_require__("./src/app/tables/tables.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__table_table_component__ = __webpack_require__("./src/app/table/table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__services_tables_service__ = __webpack_require__("./src/app/services/tables.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__services_items_service__ = __webpack_require__("./src/app/services/items.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__items_items_component__ = __webpack_require__("./src/app/items/items.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__item_item_component__ = __webpack_require__("./src/app/item/item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__order_order_component__ = __webpack_require__("./src/app/order/order.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__services_orders_service__ = __webpack_require__("./src/app/services/orders.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__open_order_open_order_component__ = __webpack_require__("./src/app/open-order/open-order.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__settings_settings_component__ = __webpack_require__("./src/app/settings/settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__services_settings_service__ = __webpack_require__("./src/app/services/settings.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__reports_sales_report_sales_report_component__ = __webpack_require__("./src/app/reports/sales-report/sales-report.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__reports_collection_report_collection_report_component__ = __webpack_require__("./src/app/reports/collection-report/collection-report.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__services_reports_service__ = __webpack_require__("./src/app/services/reports.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_11__adminlte_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_12__adminlte_sidebar_sidebar_component__["a" /* SidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_13__adminlte_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_14__adminlte_content_content_component__["a" /* ContentComponent */],
                __WEBPACK_IMPORTED_MODULE_15__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_21__tables_and_orders_tables_and_orders_component__["a" /* TablesAndOrdersComponent */],
                __WEBPACK_IMPORTED_MODULE_23__users_users_component__["a" /* UsersComponent */],
                __WEBPACK_IMPORTED_MODULE_24__user_form_user_form_component__["a" /* UserFormComponent */],
                __WEBPACK_IMPORTED_MODULE_26__keys_pipe__["a" /* KeysPipe */],
                __WEBPACK_IMPORTED_MODULE_27__tables_tables_component__["a" /* TablesComponent */],
                __WEBPACK_IMPORTED_MODULE_28__table_table_component__["a" /* TableComponent */],
                __WEBPACK_IMPORTED_MODULE_31__items_items_component__["a" /* ItemsComponent */],
                __WEBPACK_IMPORTED_MODULE_32__item_item_component__["a" /* ItemComponent */],
                __WEBPACK_IMPORTED_MODULE_33__order_order_component__["a" /* OrderComponent */],
                __WEBPACK_IMPORTED_MODULE_35__open_order_open_order_component__["a" /* OpenOrderComponent */],
                __WEBPACK_IMPORTED_MODULE_36__settings_settings_component__["a" /* SettingsComponent */],
                __WEBPACK_IMPORTED_MODULE_38__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_39__reports_sales_report_sales_report_component__["a" /* SalesReportComponent */],
                __WEBPACK_IMPORTED_MODULE_40__reports_collection_report_collection_report_component__["a" /* CollectionReportComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4_ng2_slim_loading_bar__["a" /* SlimLoadingBarModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_20__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_pagination__["a" /* PaginationModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["DataTableModule"],
                __WEBPACK_IMPORTED_MODULE_7_primeng_dialog__["DialogModule"],
                __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_9_primeng_button__["ButtonModule"]
            ],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HTTP_INTERCEPTORS */], useClass: __WEBPACK_IMPORTED_MODULE_17__interceptors_loader_interceptor_service__["a" /* LoaderInterceptorService */], multi: true },
                { provide: __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HTTP_INTERCEPTORS */], useClass: __WEBPACK_IMPORTED_MODULE_18__interceptors_auth_interceptor_service__["a" /* AuthInterceptorService */], multi: true },
                __WEBPACK_IMPORTED_MODULE_16__services_config_service__["a" /* ConfigService */],
                __WEBPACK_IMPORTED_MODULE_19__services_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_22__services_auth_guard_service__["a" /* AuthGuardService */],
                __WEBPACK_IMPORTED_MODULE_25__services_users_service__["a" /* UsersService */], __WEBPACK_IMPORTED_MODULE_29__services_tables_service__["a" /* TablesService */], __WEBPACK_IMPORTED_MODULE_30__services_items_service__["a" /* ItemsService */], __WEBPACK_IMPORTED_MODULE_34__services_orders_service__["a" /* OrdersService */], __WEBPACK_IMPORTED_MODULE_37__services_settings_service__["a" /* SettingsService */], __WEBPACK_IMPORTED_MODULE_41__services_reports_service__["a" /* ReportsService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<ng2-slim-loading-bar></ng2-slim-loading-bar>\r\n<div class=\"wrapper\">\r\n    <app-header></app-header>\r\n    <app-sidebar></app-sidebar>\r\n\r\n    <div class=\"content-wrapper\">\r\n        <router-outlet>\r\n\r\n        </router-outlet>\r\n    </div>\r\n    <app-footer></app-footer>\r\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/interceptors/auth-interceptor.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthInterceptorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_retryWhen__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/retryWhen.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_retry__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/retry.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_delay__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/delay.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_take__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/take.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_scan__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/scan.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_config_service__ = __webpack_require__("./src/app/services/config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var AuthInterceptorService = /** @class */ (function () {
    function AuthInterceptorService(configService, authService, router) {
        this.configService = configService;
        this.authService = authService;
        this.router = router;
    }
    AuthInterceptorService.prototype.intercept = function (req, next) {
        var _this = this;
        console.log("intercepted request ... ");
        // Clone the request to add the new header.
        var headers = { "Access-Control-Allow-Origin": this.configService.base_url, };
        if (this.authService.isLoggedIn()) {
            headers['Accept'] = 'application/json';
            headers['Authorization'] = 'Bearer ' + localStorage.getItem('access_token');
        }
        var authReq = req.clone({
            setHeaders: headers
        });
        console.log("Sending request with new header now ...");
        //send the newly created request
        return next.handle(authReq)
            .retryWhen(function (errors) {
            var attempts = 0;
            return errors
                .mergeMap(function (error) {
                if (error.status == 401) {
                    _this.authService.logout();
                    _this.router.navigate(['login']);
                    return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["a" /* Observable */].throw(error);
                }
                else if (error.status == 422) {
                    var error_message = '';
                    for (var _i = 0, _a = Object.keys(error.error.errors); _i < _a.length; _i++) {
                        var key = _a[_i];
                        //error.error.errors[key]
                        for (var _b = 0, _c = error.error.errors[key]; _b < _c.length; _b++) {
                            var err_msg = _c[_b];
                            error_message += err_msg + '. ';
                        }
                    }
                    alert(error_message);
                    return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["a" /* Observable */].throw(error);
                }
                else {
                    attempts++;
                    if (attempts < 5) {
                        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["a" /* Observable */].of(error);
                    }
                    else {
                        console.log(error);
                        alert(error.message);
                        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["a" /* Observable */].throw(error);
                    }
                }
            } //(error.status === 429) ? Observable.throw(error) : Observable.of(error)
            )
                .delay(2000);
        });
        // return next.handle(authReq)
        //   .retry(10)
        //   .do(
        //     (event: HttpEvent<any>) => {
        //       if (event instanceof HttpResponse) {
        //         // do stuff with response if you want
        //       }
        //     }, (err: any) => {
        //       if (err instanceof HttpErrorResponse) {
        //         if (err.status === 401) {
        //           // redirect to the login route
        //           this.authService.logout();
        //           this.router.navigate(['login']);
        //           // or show a modal
        //         }
        //         else
        //         {
        //           alert(err.message);
        //         }
        //       }
        //     }
        //   );
    };
    AuthInterceptorService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_9__services_config_service__["a" /* ConfigService */], __WEBPACK_IMPORTED_MODULE_10__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_11__angular_router__["Router"]])
    ], AuthInterceptorService);
    return AuthInterceptorService;
}());



/***/ }),

/***/ "./src/app/interceptors/loader-interceptor.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoaderInterceptorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_slim_loading_bar__ = __webpack_require__("./node_modules/ng2-slim-loading-bar/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoaderInterceptorService = /** @class */ (function () {
    function LoaderInterceptorService(_loadingBar) {
        this._loadingBar = _loadingBar;
    }
    LoaderInterceptorService.prototype.intercept = function (req, next) {
        var _this = this;
        // start our loader here
        this._loadingBar.start();
        return next.handle(req).do(function (event) {
            // if the event is for http response
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["e" /* HttpResponse */]) {
                // stop our loader here
                _this._loadingBar.complete();
            }
        }, function (err) {
            // if any error (not for just HttpResponse) we stop our loader bar
            _this._loadingBar.complete();
        });
    };
    LoaderInterceptorService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ng2_slim_loading_bar__["b" /* SlimLoadingBarService */]])
    ], LoaderInterceptorService);
    return LoaderInterceptorService;
}());



/***/ }),

/***/ "./src/app/item/item.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/item/item.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"content-header\">\r\n    <h1>\r\n        Item\r\n        <!-- <small>Version 2.0</small> -->\r\n\r\n\r\n\r\n    </h1>\r\n\r\n</section>\r\n\r\n<section class=\"content\">\r\n\r\n    <div class=\"row\">\r\n\r\n        <div class=\"col-md-12\">\r\n            <div class=\"box box-primary\">\r\n\r\n                <div class=\"box-body\">\r\n\r\n                    <form #f=\"ngForm\" (ngSubmit)=\"onSubmit(f.value, form_type)\" class=\"form-horizontal\" role=\"form\">\r\n\r\n\r\n                        <div class=\"form-group\">\r\n                            <label class=\"control-label col-sm-2\" for=\"category\">Category</label>\r\n                            <div class=\"col-sm-10\">\r\n                                <input type=\"text\" class=\"form-control\" id=\"category\" name=\"category\" [(ngModel)]=\"item.category\" #category_input=ngModel required>\r\n                                <div class=\"validation-error\" *ngIf=\"category_input.errors?.required\">\r\n                                    Should not be empty.\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n\r\n                        <div class=\"form-group\">\r\n                            <label class=\"control-label col-sm-2\" for=\"code\">Code</label>\r\n                            <div class=\"col-sm-10\">\r\n                                <input type=\"text\" class=\"form-control\" id=\"code\" name=\"code\" [(ngModel)]=\"item.code\" #code_input=ngModel required>\r\n                                <div class=\"validation-error\" *ngIf=\"code_input.errors?.required\">\r\n                                    Should not be empty.\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"form-group\">\r\n                            <label class=\"control-label col-sm-2\" for=\"name\">Name</label>\r\n                            <div class=\"col-sm-10\">\r\n                                <input type=\"text\" class=\"form-control\" id=\"name\" name=\"name\" [(ngModel)]=\"item.name\" #name_input=ngModel required>\r\n                                <div class=\"validation-error\" *ngIf=\"name_input.errors?.required\">\r\n                                    Should not be empty.\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"form-group\">\r\n                            <label class=\"control-label col-sm-2\" for=\"unit\">Unit</label>\r\n                            <div class=\"col-sm-10\">\r\n                                <input type=\"text\" class=\"form-control\" id=\"unit\" name=\"unit\" [(ngModel)]=\"item.unit\" #unit_input=ngModel required>\r\n                                <div class=\"validation-error\" *ngIf=\"unit_input.errors?.required\">\r\n                                    Should not be empty.\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"form-group\">\r\n                            <label class=\"control-label col-sm-2\" for=\"price\">Price</label>\r\n                            <div class=\"col-sm-10\">\r\n                                <input type=\"number\" class=\"form-control\" id=\"price\" name=\"price\" [(ngModel)]=\"item.price\" #price_input=ngModel required>\r\n                                <div class=\"validation-error\" *ngIf=\"price_input.errors?.required\">\r\n                                    Should not be empty.\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n                        <div class=\"form-group\">\r\n                            <div class=\"col-sm-10 col-sm-offset-2\">\r\n                                <button type=\"submit\" [disabled]=\"!f.form.valid || is_loading\" class=\"btn btn-primary\">Submit</button>\r\n                            </div>\r\n                        </div>\r\n                    </form>\r\n\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n\r\n</section>"

/***/ }),

/***/ "./src/app/item/item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_items_service__ = __webpack_require__("./src/app/services/items.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ItemComponent = /** @class */ (function () {
    function ItemComponent(router, route, itemsService, authService) {
        this.router = router;
        this.route = route;
        this.itemsService = itemsService;
        this.authService = authService;
        this.form_type = "New";
        this.item = {
            id: null,
            category: '',
            name: '',
            code: '',
            unit: '',
            price: '',
        };
        this.is_loading = false;
    }
    ItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (data) {
            if (data.id != null) {
                _this.form_type = "Edit";
                _this.is_loading = true;
                _this.itemsService.getItemById(data.id)
                    .subscribe(function (data) {
                    _this.item = data;
                    _this.is_loading = false;
                });
            }
        });
    };
    ItemComponent.prototype.onSubmit = function (value, form_type) {
        var _this = this;
        this.is_loading = true;
        var id = this.form_type == "New" ? null : this.item.id;
        this.itemsService.saveData(value, id)
            .finally(function () { _this.is_loading = false; })
            .subscribe(function (data) {
            _this.is_loading = false;
            alert(data['message']);
            if (data['success'] == true) {
                _this.router.navigate(['/items']);
            }
        });
    };
    ItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-item',
            template: __webpack_require__("./src/app/item/item.component.html"),
            styles: [__webpack_require__("./src/app/item/item.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"],
            __WEBPACK_IMPORTED_MODULE_2__services_items_service__["a" /* ItemsService */],
            __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]])
    ], ItemComponent);
    return ItemComponent;
}());



/***/ }),

/***/ "./src/app/items/items.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/items/items.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"content-header\">\r\n    <h1>\r\n        Items\r\n        <!-- <small>Version 2.0</small> -->\r\n\r\n        <a *ngIf=\"can_add_new\" class=\"btn btn-sm btn-primary\" routerLink=\"/item\" role=\"button\"><i class=\"fa fa-plus-circle\"></i> Add New</a>\r\n\r\n    </h1>\r\n\r\n</section>\r\n\r\n<section class=\"content\">\r\n\r\n    <div class=\"row\">\r\n\r\n        <div class=\"col-md-12\">\r\n            <div class=\"box box-primary\">\r\n\r\n                <div class=\"box-body\">\r\n\r\n\r\n                    <table class=\"table table-bordered table-condensed table-hover\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th>Category</th>\r\n                                <th>Code</th>\r\n                                <th>Name</th>\r\n                                <th>Unit</th>\r\n                                <th>Price</th>\r\n                                <th>Action</th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr *ngFor=\"let item of items\">\r\n                                <td>{{item.category}}</td>\r\n                                <td>{{item.code}}</td>\r\n                                <td>{{item.name}}</td>\r\n                                <td>{{item.unit}}</td>\r\n                                <td>{{item.price}}</td>\r\n\r\n                                <td>\r\n                                    <a *ngIf=\"can_edit\" class=\"btn btn-xs btn-primary\" routerLink=\"/item/{{item.id}}\" role=\"button\">\r\n                                        <i class=\"fa fa-edit\"></i> Edit\r\n                                    </a>\r\n                                </td>\r\n\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n\r\n\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n\r\n</section>"

/***/ }),

/***/ "./src/app/items/items.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_items_service__ = __webpack_require__("./src/app/services/items.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ItemsComponent = /** @class */ (function () {
    function ItemsComponent(authService, itemsService) {
        this.authService = authService;
        this.itemsService = itemsService;
        this.can_add_new = false;
        this.can_edit = false;
    }
    ItemsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.itemsService.getItems()
            .subscribe(function (data) { _this.items = data; });
        this.authService.hasPermission('add-new-item')
            .subscribe(function (data) { _this.can_add_new = data['has_permission']; });
        this.authService.hasPermission('edit-item')
            .subscribe(function (data) { _this.can_edit = data['has_permission']; });
    };
    ItemsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-items',
            template: __webpack_require__("./src/app/items/items.component.html"),
            styles: [__webpack_require__("./src/app/items/items.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__services_items_service__["a" /* ItemsService */]])
    ], ItemsComponent);
    return ItemsComponent;
}());



/***/ }),

/***/ "./src/app/keys.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeysPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var KeysPipe = /** @class */ (function () {
    function KeysPipe() {
    }
    KeysPipe.prototype.transform = function (value, args) {
        return Object.keys(value); //.map(key => value[key]);
    };
    KeysPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'keys',
            pure: false,
        })
    ], KeysPipe);
    return KeysPipe;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"login-box\">\r\n    <div class=\"login-logo\">\r\n        <a href=\"#\"><b>Akonxo</b> RMS</a>\r\n    </div>\r\n    <!-- /.login-logo -->\r\n    <div class=\"login-box-body\">\r\n        <!-- <p class=\"login-box-msg\">Sign in to start your session</p> -->\r\n\r\n        <form #f=\"ngForm\" (ngSubmit)=\"onSubmit(f.value)\">\r\n            <div class=\"form-group has-feedback\">\r\n                <input type=\"email\" class=\"form-control\" name=\"username\" [(ngModel)]=\"username\" #username_input=\"ngModel\" placeholder=\"Email\" required email>\r\n                <span class=\"glyphicon glyphicon-envelope form-control-feedback\"></span>\r\n\r\n\r\n                <div class=\"validation-error\" *ngIf=\"username_input.errors?.email\">\r\n                    Email not valid.\r\n                </div>\r\n\r\n            </div>\r\n\r\n\r\n\r\n\r\n            <div class=\"form-group has-feedback\">\r\n                <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"password\" #password_input=\"ngModel\" placeholder=\"Password\" required>\r\n                <span class=\"glyphicon glyphicon-lock form-control-feedback\"></span>\r\n\r\n                <div class=\"validation-error\" *ngIf=\"password_input.errors?.required\">\r\n                    Password should not be empty.\r\n                </div>\r\n\r\n            </div>\r\n            <div class=\"row\">\r\n\r\n                <div class=\"col-xs-12\">\r\n                    <button type=\"submit\" [disabled]=\"!f.form.valid || is_loading\" class=\"btn btn-primary btn-block btn-flat\">Sign In</button>\r\n                </div>\r\n\r\n\r\n            </div>\r\n        </form>\r\n\r\n\r\n        <br>\r\n        <div *ngIf=\"http_error_message != ''\" class=\"alert alert-danger\">\r\n            <strong>Login Failed, Error: </strong> {{http_error_message}}\r\n        </div>\r\n\r\n\r\n    </div>\r\n    <!-- /.login-box-body -->\r\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_config_service__ = __webpack_require__("./src/app/services/config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_finally__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/finally.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = /** @class */ (function () {
    function LoginComponent(http, config, authService, router) {
        this.http = http;
        this.config = config;
        this.authService = authService;
        this.router = router;
        this.http_error_message = "";
        this.is_loading = false;
        this.username = "";
        this.password = "";
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onSubmit = function (form_data) {
        var _this = this;
        this.http_error_message = "";
        this.is_loading = true;
        this.authService.login(form_data.username, form_data.password)
            .finally(function () { _this.is_loading = false; })
            .subscribe(function (data) {
            if (data['access_token'] != '') {
                localStorage.setItem("access_token", data['access_token']);
                _this.router.navigate(['table-and-orders']);
            }
        }, function (err) {
            _this.http_error_message = err.message;
            console.log(err);
            if (err.error instanceof Error) {
                // A client-side or network error occurred. Handle it accordingly.
                _this.http_error_message = 'An error occurred:', err.error.message;
            }
            else {
                // The backend returned an unsuccessful response code.
                // The response body may contain clues as to what went wrong,
                _this.http_error_message = "Backend returned code " + err.status + ", body was: " + err.error.message;
            }
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__services_config_service__["a" /* ConfigService */],
            __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/open-order/open-order.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/open-order/open-order.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"open-order\">\r\n    <span class=\"label label-success\">{{order.order_type}}</span>\r\n\r\n    <p *ngIf=\"order.portion != null\">Portion/Floor: <b>{{order.portion}}</b></p>\r\n    <p *ngIf=\"order.table_name != null\">Table: <b>{{order.table_name}}</b></p>\r\n    <p *ngIf=\"order.deliver_to_name != null\">Customer: <b>{{order.deliver_to_name}}</b></p>\r\n    <p *ngIf=\"order.deliver_to_phone != null\">Phone: <b>{{order.deliver_to_phone}}</b></p>\r\n    <p *ngIf=\"order.deliver_to_address != null\">Address: <b>{{order.deliver_to_address}}</b></p>\r\n\r\n    <hr style=\"margin:2px\">\r\n\r\n    <p>Status:\r\n        <span class=\"label {{ order.order_status_slug == 'pending' ? 'label-danger' : 'label-success' }}\">\r\n            {{order.order_status}}\r\n        </span>\r\n    </p>\r\n    <a (click)=\"showChangeStatusModal()\" class=\"btn btn-primary btn-xs btn-block\" role=\"button\">Change Status</a>\r\n\r\n\r\n\r\n    <p *ngIf=\"order.order_status_slug == 'pending'\">Time:\r\n        <b class=\"{{order.elapsed_minutes >= 20 ? 'text-red' : ''}}\">{{order.elapsed_minutes}} minute(s)</b>\r\n    </p>\r\n\r\n    <hr style=\"margin:2px\">\r\n\r\n\r\n\r\n\r\n    <a class=\"btn btn-primary btn-xs btn-block\" routerLink=\"/edit-order/{{order.id}}\" role=\"button\">Edit Order</a>\r\n    <a (click)=\"reprintForKitchens(order.id)\" class=\"btn btn-warning btn-xs btn-block\" role=\"button\">Re-print for Kitchens</a>\r\n    <a (click)=\"printForCustomer(order.id)\" class=\"btn btn-primary btn-xs btn-block\" role=\"button\">Print for Customer</a>\r\n    <a (click)=\"showCloseOrderModal()\" class=\"btn btn-primary btn-xs btn-block\" role=\"button\">Close Order</a>\r\n\r\n\r\n    <p-dialog width=\"350\" (onShow)=\"onModalShow($event)\" (onHide)=\"onModalHide($event)\" header=\"Change Order Status\" [modal]=\"true\" [(visible)]=\"is_change_status_modal_visible\">\r\n\r\n\r\n        <div class=\"form-group\">\r\n            <label for=\"status\" class=\" control-label\">Status:</label>\r\n            <div class=\"\">\r\n                <select #status_input name=\"abc\" id=\"status\" class=\"form-control\" required=\"required\">\r\n            <option value=\"1\">Pending</option>\r\n            <option value=\"2\">Served</option>\r\n            <option value=\"4\">Cancel Bill</option>\r\n          </select>\r\n            </div>\r\n\r\n\r\n            <button (click)=\"changeStatus(order.id, status_input.value)\" type=\"button\" class=\"btn btn-block btn-primary\">Change Status</button>\r\n\r\n        </div>\r\n\r\n\r\n\r\n    </p-dialog>\r\n\r\n    <p-dialog width=\"350\" (onShow)=\"onModalShow($event)\" (onHide)=\"onModalHide($event)\" header=\"Close Order\" [modal]=\"true\" [(visible)]=\"is_close_order_modal_visible\">\r\n\r\n        <h3><small>Order Amount: </small> {{order.order_amount_inc_st | currency:'Rs.' }}</h3>\r\n        <br>\r\n        <div class=\"form-group\">\r\n            <label for=\"received_through\" class=\"control-label\">Received Through:</label>\r\n            <div class=\"\">\r\n                <select #received_through_input name=\"received_through\" id=\"received_through\" class=\"form-control\" required=\"required\">\r\n            <option value=\"0\"></option>\r\n            <option value=\"Cash\">Cash</option>\r\n            <option value=\"Card\">Card</option>\r\n          </select>\r\n\r\n            </div>\r\n            <div class=\"validation-error\" *ngIf=\"received_through_input.value == 0\">\r\n                Should not be empty.\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <label for=\"received_amount\" class=\"control-label\">Received Through:</label>\r\n            <div class=\"\">\r\n                <input [(ngModel)]=\"received_amount\" type=\"number\" name=\"received_amount\" id=\"received_amount\" class=\"form-control\" value=\"\" required=\"required\" pattern=\"\" title=\"\">\r\n            </div>\r\n            <div class=\"validation-error\" *ngIf=\"received_amount < order.order_amount_inc_st\">\r\n                Received Amount is less than Order Amount.\r\n            </div>\r\n        </div>\r\n\r\n\r\n        <h3><small>Balance: </small> {{ received_amount - order.order_amount_inc_st | currency:'Rs.' }}</h3>\r\n\r\n        <br><br>\r\n        <button [disabled]=\"received_through_input.value == 0 || received_amount < order.order_amount_inc_st\" (click)=\"closeOrder(order.id, received_through_input.value)\" type=\"button\" class=\"btn btn-block btn-primary\">Close Order</button>\r\n\r\n\r\n\r\n\r\n    </p-dialog>\r\n\r\n\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/open-order/open-order.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OpenOrderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_orders_service__ = __webpack_require__("./src/app/services/orders.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OpenOrderComponent = /** @class */ (function () {
    function OpenOrderComponent(ordersService) {
        this.ordersService = ordersService;
        this.is_change_status_modal_visible = false;
        this.is_close_order_modal_visible = false;
        this.received_amount = 0;
        this.modalOpen = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.modalClose = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    OpenOrderComponent.prototype.ngOnInit = function () {
    };
    OpenOrderComponent.prototype.showChangeStatusModal = function () {
        this.is_change_status_modal_visible = true;
    };
    OpenOrderComponent.prototype.showCloseOrderModal = function () {
        this.is_close_order_modal_visible = true;
    };
    OpenOrderComponent.prototype.onModalShow = function (event) {
        this.modalOpen.emit();
    };
    OpenOrderComponent.prototype.changeStatus = function (order_id, status) {
        var _this = this;
        var r = confirm("Are you sure?");
        if (r != true) {
            return;
        }
        this.ordersService.changeOrderStatus(order_id, status)
            .subscribe(function (data) {
            if (data['success'] == true) {
                _this.is_change_status_modal_visible = false;
            }
            else {
                alert(data['message']);
            }
        });
    };
    OpenOrderComponent.prototype.onModalHide = function (event) {
        this.modalClose.emit();
    };
    OpenOrderComponent.prototype.closeOrder = function (order_id, received_through) {
        var _this = this;
        var r = confirm('Are you Sure?');
        if (r != true)
            return;
        this.ordersService.closeOrder(order_id, received_through)
            .subscribe(function (data) {
            if (data['success'] == true) {
                _this.is_close_order_modal_visible = false;
            }
            else {
                alert(data['message']);
            }
        });
    };
    OpenOrderComponent.prototype.printForCustomer = function (order_id) {
        this.ordersService.printForCustomer(order_id)
            .subscribe();
    };
    OpenOrderComponent.prototype.reprintForKitchens = function (order_id) {
        var r = confirm("Are you sure to reprint order for kitchens?");
        if (r != true) {
            return;
        }
        this.ordersService.reprintForKitchens(order_id)
            .subscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], OpenOrderComponent.prototype, "order", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], OpenOrderComponent.prototype, "modalOpen", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], OpenOrderComponent.prototype, "modalClose", void 0);
    OpenOrderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-open-order',
            template: __webpack_require__("./src/app/open-order/open-order.component.html"),
            styles: [__webpack_require__("./src/app/open-order/open-order.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_orders_service__["a" /* OrdersService */]])
    ], OpenOrderComponent);
    return OpenOrderComponent;
}());



/***/ }),

/***/ "./src/app/order/order.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/order/order.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"content-header\">\r\n    <h1>\r\n        Order\r\n        <!-- <small>Version 2.0</small> -->\r\n\r\n    </h1>\r\n\r\n</section>\r\n\r\n<section class=\"content\">\r\n\r\n    <div class=\"row\">\r\n\r\n        <div class=\"col-md-12\">\r\n            <div class=\"box box-primary\">\r\n\r\n                <div style=\"background-color:#ecf0f5;\" class=\"box-body\">\r\n\r\n                    <form #f=\"ngForm\" (ngSubmit)=\"onSubmit(f.value, form_type)\" (keydown.enter)=\"$event.preventDefault()\" class=\"form-horizontal\" role=\"form\">\r\n\r\n                        <div class=\"row\">\r\n                            <div class=\"col-sm-6\">\r\n                                <div class=\"box box-success\">\r\n                                    <div class=\"box-header with-border\">\r\n                                        <h3 class=\"box-title\">Order Information</h3>\r\n                                    </div>\r\n\r\n                                    <div class=\"box-body\">\r\n\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"order_type\" class=\"col-sm-2 control-label\">Order Type:</label>\r\n                                            <div class=\"col-sm-10\">\r\n                                                <select name=\"order_type\" id=\"order_type\" class=\"form-control input-md\" [(ngModel)]=\"order.order_type\" required=\"required\" #order_type_input=ngModel>\r\n                                                        <option *ngFor=\"let order_type of order_types\" [value]=\"order_type.id\">{{order_type.name}}</option>\r\n                                                    </select>\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                        <ng-template let-table_required [ngTemplateOutletContext]=\"{ $implicit: order_type_input.value == '1' }\" [ngTemplateOutlet]=\"table\" #table>\r\n                                            <div *ngIf=\"table_required\" class=\"form-group\">\r\n                                                <label for=\"table\" class=\"col-sm-2 control-label\">Table:</label>\r\n                                                <div class=\"col-sm-10\">\r\n                                                    <select name=\"table\" id=\"table\" class=\"form-control input-md\" [(ngModel)]=\"order.table\" #table_input=ngModel [required]=\"table_required\">\r\n                                                            <option *ngIf=\"order.id != null && order.table != null\" [value]=\"order.table\">{{order.table_portion + ' | ' + order.table_name}}</option>\r\n                                                            <option *ngFor=\"let free_table of free_tables\" [value]=\"free_table.id\">{{ free_table.portion + ' | ' + free_table.name }}</option>\r\n                                                        </select>\r\n                                                    <div class=\"validation-error\" *ngIf=\"table_input.errors?.required\">\r\n                                                        Should not be empty.\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </ng-template>\r\n\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <ng-template let-cust_info_required [ngTemplateOutletContext]=\"{ $implicit: order_type_input.value == '2' || order_type_input.value == '3' }\" [ngTemplateOutlet]=\"customer\" #customer>\r\n                                <div *ngIf=\"cust_info_required\" class=\"col-sm-6\">\r\n                                    <div class=\"box box-danger\">\r\n                                        <div class=\"box-header with-border\">\r\n                                            <h3 class=\"box-title\">Customer Information</h3>\r\n                                        </div>\r\n\r\n                                        <div class=\"box-body\">\r\n\r\n                                            <div class=\"form-group\">\r\n                                                <label class=\"control-label col-sm-2\" for=\"deliver_to_name\">Name</label>\r\n                                                <div class=\"col-sm-10\">\r\n                                                    <input type=\"text\" class=\"form-control input-md\" id=\"deliver_to_name\" name=\"deliver_to_name\" [(ngModel)]=\"order.deliver_to_name\" #deliver_to_name_input=ngModel [required]=\"cust_info_required\">\r\n                                                    <div class=\"validation-error\" *ngIf=\"deliver_to_name_input.errors?.required\">\r\n                                                        Should not be empty.\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n\r\n                                            <ng-template let-delivery_info_required [ngTemplateOutletContext]=\"{ $implicit: order_type_input.value == '3' }\" [ngTemplateOutlet]=\"delivery\" #delivery>\r\n\r\n                                                <div class=\"form-group\">\r\n                                                    <label class=\"control-label col-sm-2\" for=\"deliver_to_phone\">Phone</label>\r\n                                                    <div class=\"col-sm-10\">\r\n                                                        <input type=\"text\" class=\"form-control input-md\" id=\"deliver_to_phone\" name=\"deliver_to_phone\" [(ngModel)]=\"order.deliver_to_phone\" #deliver_to_phone_input=ngModel [required]=\"delivery_info_required\">\r\n                                                        <div class=\"validation-error\" *ngIf=\"deliver_to_phone_input.errors?.required\">\r\n                                                            Should not be empty.\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n\r\n                                                <div class=\"form-group\">\r\n                                                    <label class=\"control-label col-sm-2\" for=\"deliver_to_address\">Address</label>\r\n                                                    <div class=\"col-sm-10\">\r\n                                                        <input type=\"text\" class=\"form-control input-md\" id=\"deliver_to_address\" name=\"deliver_to_address\" [(ngModel)]=\"order.deliver_to_address\" #deliver_to_address_input=ngModel [required]=\"delivery_info_required\">\r\n                                                        <div class=\"validation-error\" *ngIf=\"deliver_to_address_input.errors?.required\">\r\n                                                            Should not be empty.\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n\r\n                                            </ng-template>\r\n\r\n\r\n\r\n\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </ng-template>\r\n                        </div>\r\n\r\n                        <div class=\"row\">\r\n                            <div class=\"col-sm-12\">\r\n\r\n                                <div class=\"box box-warning\">\r\n\r\n                                    <div class=\"box-header with-border\">\r\n                                        <h3 class=\"box-title\">Items</h3>\r\n                                    </div>\r\n\r\n                                    <div class=\"box-body\">\r\n\r\n                                        <table class=\"table table-bordered table-condensed table-hover\">\r\n                                            <thead>\r\n                                                <tr>\r\n                                                    <th>Item</th>\r\n                                                    <th style=\"width:100px;\">Qty</th>\r\n                                                    <th style=\"width:100px;\">Rate</th>\r\n                                                    <th style=\"width:100px;\">Amount</th>\r\n                                                    <th style=\"width:100px;\">Add / Remove</th>\r\n                                                </tr>\r\n                                            </thead>\r\n                                            <tbody>\r\n                                                <tr *ngFor=\"let order_detail of order.order_details; let i = index;\">\r\n                                                    <td>{{ order_detail.item_name }}</td>\r\n                                                    <td>{{ order_detail.qty }}</td>\r\n                                                    <td>{{ order_detail.rate }}</td>\r\n                                                    <td>{{ order_detail.qty * order_detail.rate }}</td>\r\n                                                    <td>\r\n                                                        <button (click)=\"removeItem(i)\" type=\"button\" class=\"btn btn-danger\"><i class=\"fa fa-times-circle\"></i></button>\r\n                                                    </td>\r\n                                                </tr>\r\n                                            </tbody>\r\n\r\n                                            <tfoot>\r\n                                                <tr>\r\n                                                    <td>\r\n                                                        <select id=\"new_item_select\" (change)=\"newItemChanged($event)\" [(ngModel)]=\"new_item.id\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control input-md\">\r\n                                                                <option *ngFor=\"let item of items\" [value]=\"item.id\">{{item.code + \" | \" + item.name + \" (\"+item.unit+\")\" }}</option>\r\n                                                            </select>\r\n                                                    </td>\r\n                                                    <td>\r\n                                                        <input type=\"number\" min=0 [(ngModel)]=\"new_item.qty\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control input-md\">\r\n                                                    </td>\r\n                                                    <td>\r\n                                                        <input type=\"number\" [(ngModel)]=\"new_item.rate\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control input-md\" readonly>\r\n                                                    </td>\r\n                                                    <td>\r\n                                                        <input type=\"number\" [value]=\"new_item.qty * new_item.rate\" class=\"form-control input-md\" readonly>\r\n                                                    </td>\r\n                                                    <td>\r\n                                                        <button type=\"button\" (click)=\"addNewItem()\" class=\"btn btn-success\"><i class=\"fa fa-plus-circle\"></i></button>\r\n                                                        <button type=\"button\" (click)=\"resetNewItem()\" class=\"btn btn-primary\"> <i class=\"fa fa-times-circle-o\"></i> </button>\r\n                                                    </td>\r\n                                                </tr>\r\n                                            </tfoot>\r\n                                        </table>\r\n\r\n                                    </div>\r\n\r\n                                </div>\r\n\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"text-right\">\r\n                            <h3>\r\n                                <small>Total Amount:</small> {{ order.order_amount_ex_st | currency:'Rs.' }}\r\n                            </h3>\r\n\r\n                            <h3>\r\n                                <small>Sales Tax:</small> {{ order.sales_tax | currency:'Rs.' }}\r\n                            </h3>\r\n\r\n                            <h3>\r\n                                <small>Total Amount Including Sales Tax:</small> {{ order.order_amount_inc_st | currency:'Rs.' }}\r\n                            </h3>\r\n                        </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n                        <div class=\"form-group\">\r\n                            <div class=\"col-sm-12 text-right\">\r\n                                <button type=\"submit\" [disabled]=\"!f.form.valid || is_loading || new_item.id != 0 || order.order_details.length == 0\" class=\"btn btn-primary\"> <i class=\"fa fa-save\"></i> Save</button>\r\n                            </div>\r\n                        </div>\r\n                        <div *ngIf=\"new_item.id != 0 \" class=\"text-danger text-right\">\r\n                            Please Add or Clear Last Item to enable save button\r\n                        </div>\r\n\r\n                        <div *ngIf=\"order.order_details.length == 0\" class=\"text-danger text-right\">\r\n                            Please Add Items\r\n                        </div>\r\n\r\n                    </form>\r\n\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n\r\n</section>"

/***/ }),

/***/ "./src/app/order/order.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_orders_service__ = __webpack_require__("./src/app/services/orders.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_tables_service__ = __webpack_require__("./src/app/services/tables.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_items_service__ = __webpack_require__("./src/app/services/items.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_settings_service__ = __webpack_require__("./src/app/services/settings.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var OrderComponent = /** @class */ (function () {
    function OrderComponent(router, route, ordersService, tablesService, authService, itemsService, settingsService) {
        this.router = router;
        this.route = route;
        this.ordersService = ordersService;
        this.tablesService = tablesService;
        this.authService = authService;
        this.itemsService = itemsService;
        this.settingsService = settingsService;
        this.form_type = "New";
        this.order = {
            id: null,
            order_type: 1,
            order_details: Array(),
        };
        this.deleted_details = Array();
        this.order_types = Array();
        this.free_tables = Array();
        this.new_item = {
            id: 0,
            qty: 0,
            rate: 0
        };
        this.is_loading = false;
        this.items = Array();
    }
    OrderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (data) {
            if (data.id != null) {
                _this.form_type = "Edit";
                _this.is_loading = true;
                _this.ordersService.getOrderById(data.id)
                    .subscribe(function (data) {
                    _this.order = data;
                    _this.is_loading = false;
                });
            }
        });
        this.is_loading = true;
        this.ordersService.getOrderTypes()
            .subscribe(function (data) { _this.order_types = data; _this.is_loading = false; });
        this.is_loading = true;
        this.tablesService.getFreeTables()
            .subscribe(function (data) { _this.free_tables = data; _this.is_loading = false; });
        this.is_loading = true;
        this.itemsService.getItems()
            .subscribe(function (data) { _this.items = data; _this.is_loading = false; });
        this.is_loading = true;
        this.settingsService.getSettingBySlug('sales_tax_rate')
            .subscribe(function (data) {
            _this.is_loading = false;
            _this.sales_tax_rate = data['value'];
        });
        this.total_order_amount_interval = setInterval(function () {
            _this.order.order_amount_ex_st = 0;
            _this.order.order_details.forEach(function (element) {
                _this.order.order_amount_ex_st += element.qty * element.rate;
            });
            _this.order.sales_tax = _this.order.order_amount_ex_st * _this.sales_tax_rate / 100;
            _this.order.order_amount_inc_st = _this.order.order_amount_ex_st + _this.order.sales_tax;
        }, 100);
    };
    OrderComponent.prototype.ngOnDestroy = function () {
        if (this.total_order_amount_interval) {
            clearInterval(this.total_order_amount_interval);
        }
    };
    OrderComponent.prototype.onSubmit = function (value, form_type) {
        var _this = this;
        this.is_loading = true;
        var id = this.form_type == "New" ? null : this.order.id;
        this.ordersService.saveOrder(this.order, this.deleted_details, id)
            .finally(function () { _this.is_loading = false; })
            .subscribe(function (data) {
            _this.is_loading = false;
            alert(data['message']);
            if (data['success'] == true) {
                _this.router.navigate(['/table-and-orders']);
            }
        });
    };
    OrderComponent.prototype.newItemChanged = function (event) {
        var item_id = event.target.value;
        var item = this.items.filter(function (item) { return parseInt(item.id) === parseInt(item_id); })[0];
        this.new_item.rate = item.price;
    };
    OrderComponent.prototype.removeItem = function (i) {
        var r = confirm("Are you sure to delete the item?");
        if (r != true) {
            return;
        }
        var removed_items = this.order.order_details.splice(i, 1);
        this.deleted_details.push(removed_items[0]);
    };
    OrderComponent.prototype.addNewItem = function () {
        var _this = this;
        if (this.new_item.id == 0 || this.new_item.qty == 0) {
            alert("Please specify Item and Qty");
            return;
        }
        var item = this.items.filter(function (item) { return parseInt(item.id) == _this.new_item.id; })[0];
        this.order.order_details.push({
            detail_id: null,
            item_id: this.new_item.id,
            item_name: item.name,
            qty: this.new_item.qty,
            rate: this.new_item.rate,
        });
        this.resetNewItem();
    };
    OrderComponent.prototype.resetNewItem = function () {
        this.new_item = {
            id: 0,
            qty: 0,
            rate: 0
        };
    };
    OrderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-order',
            template: __webpack_require__("./src/app/order/order.component.html"),
            styles: [__webpack_require__("./src/app/order/order.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"],
            __WEBPACK_IMPORTED_MODULE_2__services_orders_service__["a" /* OrdersService */],
            __WEBPACK_IMPORTED_MODULE_4__services_tables_service__["a" /* TablesService */],
            __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_5__services_items_service__["a" /* ItemsService */],
            __WEBPACK_IMPORTED_MODULE_6__services_settings_service__["a" /* SettingsService */]])
    ], OrderComponent);
    return OrderComponent;
}());



/***/ }),

/***/ "./src/app/reports/collection-report/collection-report.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/reports/collection-report/collection-report.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  collection-report works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/reports/collection-report/collection-report.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollectionReportComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CollectionReportComponent = /** @class */ (function () {
    function CollectionReportComponent() {
    }
    CollectionReportComponent.prototype.ngOnInit = function () {
    };
    CollectionReportComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-collection-report',
            template: __webpack_require__("./src/app/reports/collection-report/collection-report.component.html"),
            styles: [__webpack_require__("./src/app/reports/collection-report/collection-report.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CollectionReportComponent);
    return CollectionReportComponent;
}());



/***/ }),

/***/ "./src/app/reports/sales-report/sales-report.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/reports/sales-report/sales-report.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"content-header\">\r\n    <h1>\r\n        Sales Report\r\n        <!-- <small>Version 2.0</small> -->\r\n    </h1>\r\n</section>\r\n\r\n<section class=\"content\">\r\n\r\n    <div class=\"row\">\r\n\r\n        <div class=\"col-md-12\">\r\n            <div class=\"box box-primary\">\r\n\r\n                <div class=\"box-body\">\r\n\r\n\r\n\r\n\r\n\r\n\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n\r\n</section>"

/***/ }),

/***/ "./src/app/reports/sales-report/sales-report.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SalesReportComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SalesReportComponent = /** @class */ (function () {
    function SalesReportComponent() {
    }
    SalesReportComponent.prototype.ngOnInit = function () {
    };
    SalesReportComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sales-report',
            template: __webpack_require__("./src/app/reports/sales-report/sales-report.component.html"),
            styles: [__webpack_require__("./src/app/reports/sales-report/sales-report.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SalesReportComponent);
    return SalesReportComponent;
}());



/***/ }),

/***/ "./src/app/services/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function (route, state) {
        var is_logged_in = this.authService.isLoggedIn();
        if (!is_logged_in) {
            console.log('sending to login page');
            this.router.navigate(['/login']);
        }
        return is_logged_in;
    };
    AuthGuardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_config_service__ = __webpack_require__("./src/app/services/config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(config, http, router) {
        this.config = config;
        this.http = http;
        this.router = router;
    }
    AuthService.prototype.login = function (username, password) {
        var fd = new FormData();
        fd.append('username', username);
        fd.append('password', password);
        for (var key in this.config.auth_data) {
            var value = this.config.auth_data[key];
            // Use `key` and `value`
            fd.append(key, value);
        }
        return this.http.post(this.config.base_url + '/oauth/token', fd);
    };
    AuthService.prototype.logout = function () {
        localStorage.setItem('access_token', '');
        this.router.navigate(['login']);
    };
    AuthService.prototype.isLoggedIn = function () {
        var is_logged_in = localStorage.getItem("access_token") === null || localStorage.getItem("access_token") == "" ? false : true;
        return is_logged_in;
    };
    AuthService.prototype.getLoggedInUserInfo = function () {
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["d" /* HttpHeaders */]({
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
            })
        };
        return this.http.post(this.config.base_url + '/api/get-logged-in-user-info', null, httpOptions);
    };
    AuthService.prototype.getPermissions = function (user_id) {
        var permissions_url = '/api/get-permissions';
        permissions_url = user_id ? permissions_url + '?user_id=' + user_id : permissions_url;
        return this.http.get(this.config.base_url + permissions_url);
    };
    AuthService.prototype.hasPermission = function (permission, user_id) {
        var permissions_url = '/api/has-permission?permission=' + permission;
        permissions_url = user_id ? permissions_url + '&user_id=' + user_id : permissions_url;
        return this.http.get(this.config.base_url + permissions_url);
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_config_service__["a" /* ConfigService */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/config.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ConfigService = /** @class */ (function () {
    function ConfigService() {
        this.base_url = "http://localhost/rms/public";
        this.auth_data = {
            grant_type: 'password',
            client_id: '2',
            client_secret: 'dRcXHre5hNEiIjGJXqriwykZym5Eh0NRF7OjqPCk',
        };
    }
    ConfigService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ConfigService);
    return ConfigService;
}());



/***/ }),

/***/ "./src/app/services/items.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_service__ = __webpack_require__("./src/app/services/config.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ItemsService = /** @class */ (function () {
    function ItemsService(http, config) {
        this.http = http;
        this.config = config;
    }
    ItemsService.prototype.getItems = function () {
        return this.http.get(this.config.base_url + '/api/items');
    };
    ItemsService.prototype.getItemById = function (id) {
        return this.http.get(this.config.base_url + '/api/items/' + id + '/edit');
    };
    ItemsService.prototype.saveData = function (data, id) {
        var fd = new FormData();
        for (var key in data) {
            var value = data[key];
            // Use `key` and `value`
            fd.append(key, value);
        }
        if (id == null)
            return this.http.post(this.config.base_url + '/api/items', fd);
        else {
            fd.append('_method', 'PUT');
            return this.http.post(this.config.base_url + '/api/items/' + id, fd);
        }
    };
    ItemsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__config_service__["a" /* ConfigService */]])
    ], ItemsService);
    return ItemsService;
}());



/***/ }),

/***/ "./src/app/services/orders.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdersService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_service__ = __webpack_require__("./src/app/services/config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OrdersService = /** @class */ (function () {
    function OrdersService(http, config) {
        this.http = http;
        this.config = config;
    }
    OrdersService.prototype.getOrderById = function (id) {
        return this.http.get(this.config.base_url + '/api/orders/' + id + '/edit');
    };
    OrdersService.prototype.getOrderTypes = function () {
        return this.http.get(this.config.base_url + '/api/order_types');
    };
    OrdersService.prototype.saveOrder = function (order, deleted_details, id) {
        var fd = new FormData();
        fd.append('order', JSON.stringify(order));
        fd.append('deleted_details', JSON.stringify(deleted_details));
        if (id == null) {
            return this.http.post(this.config.base_url + '/api/orders', fd);
        }
        else {
            fd.append('_method', 'PUT');
            return this.http.post(this.config.base_url + '/api/orders/' + id, fd);
        }
    };
    OrdersService.prototype.getOpenOrders = function () {
        return this.http.get(this.config.base_url + '/api/open-orders');
    };
    OrdersService.prototype.changeOrderStatus = function (order_id, status) {
        var data = new FormData();
        data.append('order_id', order_id);
        data.append('status', status);
        return this.http.post(this.config.base_url + '/api/change-order-status', data);
    };
    OrdersService.prototype.closeOrder = function (order_id, received_through) {
        var data = new FormData();
        data.append('order_id', order_id);
        data.append('received_through', received_through);
        return this.http.post(this.config.base_url + '/api/close-order', data);
    };
    OrdersService.prototype.printForCustomer = function (order_id) {
        return this.http.post(this.config.base_url + '/api/print-for-customer/' + order_id, null);
    };
    OrdersService.prototype.reprintForKitchens = function (order_id) {
        return this.http.post(this.config.base_url + '/api/reprint-for-kitchens/' + order_id, null);
    };
    OrdersService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1__config_service__["a" /* ConfigService */]])
    ], OrdersService);
    return OrdersService;
}());



/***/ }),

/***/ "./src/app/services/reports.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_service__ = __webpack_require__("./src/app/services/config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReportsService = /** @class */ (function () {
    function ReportsService(config, http) {
        this.config = config;
        this.http = http;
    }
    ReportsService.prototype.salesReport = function (from_date, to_date) {
        var params = { 'from_date': from_date, 'to_date': to_date };
        this.http.get(this.config.base_url + '/api/sales-report', { params: params });
    };
    ReportsService.prototype.collectionReport = function (from_date, to_date) {
        var params = { 'from_date': from_date, 'to_date': to_date };
        this.http.get(this.config.base_url + '/api/collection-report', { params: params });
    };
    ReportsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__config_service__["a" /* ConfigService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */]])
    ], ReportsService);
    return ReportsService;
}());



/***/ }),

/***/ "./src/app/services/settings.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_service__ = __webpack_require__("./src/app/services/config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SettingsService = /** @class */ (function () {
    function SettingsService(config, http) {
        this.config = config;
        this.http = http;
    }
    SettingsService.prototype.getSettings = function () {
        return this.http.get(this.config.base_url + '/api/show-settings');
    };
    SettingsService.prototype.getSettingBySlug = function (slug) {
        return this.http.get(this.config.base_url + '/api/get-setting-by-slug?slug=' + slug);
    };
    SettingsService.prototype.saveSettings = function (settings) {
        var fd = new FormData();
        fd.append('settings', JSON.stringify(settings));
        return this.http.post(this.config.base_url + '/api/save-settings', fd);
    };
    SettingsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__config_service__["a" /* ConfigService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */]])
    ], SettingsService);
    return SettingsService;
}());



/***/ }),

/***/ "./src/app/services/tables.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TablesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_service__ = __webpack_require__("./src/app/services/config.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TablesService = /** @class */ (function () {
    function TablesService(http, config) {
        this.http = http;
        this.config = config;
    }
    TablesService.prototype.getTables = function () {
        return this.http.get(this.config.base_url + '/api/tables');
    };
    TablesService.prototype.getTableById = function (id) {
        return this.http.get(this.config.base_url + '/api/tables/' + id + '/edit');
    };
    TablesService.prototype.getPortions = function () {
        return this.http.get(this.config.base_url + '/api/get-portions');
    };
    TablesService.prototype.getFreeTables = function () {
        return this.http.get(this.config.base_url + '/api/free_tables');
    };
    TablesService.prototype.saveUserData = function (data, id) {
        var fd = new FormData();
        for (var key in data) {
            var value = data[key];
            // Use `key` and `value`
            fd.append(key, value);
        }
        if (id == null)
            return this.http.post(this.config.base_url + '/api/tables', fd);
        else {
            fd.append('_method', 'PUT');
            return this.http.post(this.config.base_url + '/api/tables/' + id, fd);
        }
    };
    TablesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__config_service__["a" /* ConfigService */]])
    ], TablesService);
    return TablesService;
}());



/***/ }),

/***/ "./src/app/services/users.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_config_service__ = __webpack_require__("./src/app/services/config.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UsersService = /** @class */ (function () {
    function UsersService(http, config) {
        this.http = http;
        this.config = config;
    }
    UsersService.prototype.getUserById = function (id) {
        return this.http.get(this.config.base_url + '/api/users/' + id + '/edit');
    };
    UsersService.prototype.getAllPermissions = function () {
        return this.http.get(this.config.base_url + '/api/get-permissions');
    };
    UsersService.prototype.saveUserData = function (data, id) {
        var fd = new FormData();
        for (var key in data) {
            var value = data[key];
            // Use `key` and `value`
            fd.append(key, value);
        }
        if (id == null)
            return this.http.post(this.config.base_url + '/api/users', fd);
        else {
            fd.append('_method', 'PUT');
            return this.http.post(this.config.base_url + '/api/users/' + id, fd);
        }
    };
    UsersService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__services_config_service__["a" /* ConfigService */]])
    ], UsersService);
    return UsersService;
}());



/***/ }),

/***/ "./src/app/settings/settings.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/settings/settings.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"content-header\">\r\n    <h1>\r\n        Settings\r\n        <!-- <small>Version 2.0</small> -->\r\n\r\n\r\n\r\n    </h1>\r\n\r\n</section>\r\n\r\n<section class=\"content\">\r\n\r\n    <div class=\"row\">\r\n\r\n        <div class=\"col-md-12\">\r\n            <div class=\"box box-primary\">\r\n\r\n                <div class=\"box-body\">\r\n\r\n\r\n                    <table class=\"table table-condensed table-bordered table-hover\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th>Settings Group</th>\r\n                                <th>Setting</th>\r\n                                <th>Value</th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr *ngFor=\"let setting of settings\">\r\n                                <td>{{setting.group}}</td>\r\n                                <td>{{setting.setting}}</td>\r\n                                <td>\r\n                                    <input type=\"{{setting.type}}\" [(ngModel)]=\"setting.value\" class=\"form-control\" pattern=\"\" title=\"\">\r\n                                </td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n\r\n                    <br>\r\n                    <div class=\"text-right\">\r\n                        <button (click)=\"saveSettings()\" type=\"button\" class=\"btn btn-primary\">\r\n                  <i class=\"fa fa-save\"></i>\r\n                  Save\r\n                </button>\r\n                    </div>\r\n\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>"

/***/ }),

/***/ "./src/app/settings/settings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_settings_service__ = __webpack_require__("./src/app/services/settings.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SettingsComponent = /** @class */ (function () {
    function SettingsComponent(settingsService) {
        this.settingsService = settingsService;
        this.settings = Array();
    }
    SettingsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.settingsService.getSettings()
            .subscribe(function (data) { return _this.settings = data; });
    };
    SettingsComponent.prototype.saveSettings = function () {
        this.settingsService.saveSettings(this.settings)
            .subscribe(function (data) {
            alert(data['message']);
        });
    };
    SettingsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__("./src/app/settings/settings.component.html"),
            styles: [__webpack_require__("./src/app/settings/settings.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_settings_service__["a" /* SettingsService */]])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/app/table/table.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/table/table.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"content-header\">\r\n    <h1>\r\n        Table\r\n        <!-- <small>Version 2.0</small> -->\r\n\r\n\r\n\r\n    </h1>\r\n\r\n</section>\r\n\r\n<section class=\"content\">\r\n\r\n    <div class=\"row\">\r\n\r\n        <div class=\"col-md-12\">\r\n            <div class=\"box box-primary\">\r\n\r\n                <div class=\"box-body\">\r\n\r\n                    <form #f=\"ngForm\" (ngSubmit)=\"onSubmit(f.value, form_type)\" class=\"form-horizontal\" role=\"form\">\r\n\r\n\r\n\r\n                        <div class=\"form-group\">\r\n                            <label class=\"control-label col-sm-2\" for=\"portion\">Portion / Floor:</label>\r\n                            <div class=\"col-sm-10\">\r\n                                <input type=\"text\" class=\"form-control\" id=\"portion\" name=\"portion\" [(ngModel)]=\"table.portion\" #portion_input=ngModel required>\r\n                                <div class=\"validation-error\" *ngIf=\"portion_input.errors?.required\">\r\n                                    Should not be empty.\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"col-sm-2\"></div>\r\n                        <div class=\"col-sm-10\">\r\n                            Portions:\r\n                            <ul>\r\n                                <li *ngFor=\"let portion of portions\">\r\n\r\n                                    <button type=\"button\" (click)=\"selectPortion(portion.portion)\" class=\"btn btn-xs btn-default\">{{portion.portion}}</button>\r\n\r\n                                </li>\r\n                            </ul>\r\n                        </div>\r\n\r\n                        <div class=\"form-group\">\r\n                            <label class=\"control-label col-sm-2\" for=\"name\">Table Number / Name</label>\r\n                            <div class=\"col-sm-10\">\r\n                                <input type=\"text\" class=\"form-control\" id=\"name\" name=\"name\" [(ngModel)]=\"table.name\" #name_input=ngModel required>\r\n\r\n                                <div class=\"validation-error\" *ngIf=\"name_input.errors?.required\">\r\n                                    Should not be empty.\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n\r\n\r\n\r\n                        <div class=\"form-group\">\r\n                            <div class=\"col-sm-10 col-sm-offset-2\">\r\n                                <button type=\"submit\" [disabled]=\"!f.form.valid || is_loading\" class=\"btn btn-primary\">Submit</button>\r\n                            </div>\r\n                        </div>\r\n                    </form>\r\n\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n\r\n</section>"

/***/ }),

/***/ "./src/app/table/table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_tables_service__ = __webpack_require__("./src/app/services/tables.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TableComponent = /** @class */ (function () {
    function TableComponent(router, route, tablesService, authService) {
        this.router = router;
        this.route = route;
        this.tablesService = tablesService;
        this.authService = authService;
        this.form_type = "New";
        this.table = {
            id: null,
            name: '',
            portion: '',
        };
        this.portions = Array();
        this.is_loading = false;
    }
    TableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (data) {
            if (data.id != null) {
                _this.form_type = "Edit";
                _this.is_loading = true;
                _this.tablesService.getTableById(data.id)
                    .subscribe(function (data) {
                    _this.table = data;
                    _this.is_loading = false;
                });
            }
        });
        this.tablesService.getPortions()
            .subscribe(function (data) { _this.portions = data; });
    };
    TableComponent.prototype.selectPortion = function (portion) {
        this.table.portion = portion;
    };
    TableComponent.prototype.onSubmit = function (value, form_type) {
        var _this = this;
        this.is_loading = true;
        var id = this.form_type == "New" ? null : this.table.id;
        this.tablesService.saveUserData(value, id)
            .finally(function () { _this.is_loading = false; })
            .subscribe(function (data) {
            _this.is_loading = false;
            alert(data['message']);
            if (data['success'] == true) {
                _this.router.navigate(['/tables']);
            }
        });
    };
    TableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-table',
            template: __webpack_require__("./src/app/table/table.component.html"),
            styles: [__webpack_require__("./src/app/table/table.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"],
            __WEBPACK_IMPORTED_MODULE_3__services_tables_service__["a" /* TablesService */],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]])
    ], TableComponent);
    return TableComponent;
}());



/***/ }),

/***/ "./src/app/tables-and-orders/tables-and-orders.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/tables-and-orders/tables-and-orders.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"content-header\">\r\n    <h1>\r\n        Tables and Orders\r\n        <!-- <small>Version 2.0</small> -->\r\n    </h1>\r\n</section>\r\n\r\n<section class=\"content\">\r\n\r\n    <div class=\"row\">\r\n\r\n        <div class=\"col-md-12\">\r\n            <div class=\"box box-primary\">\r\n\r\n                <div class=\"box-body\">\r\n\r\n                    <div class=\"\">\r\n                        <!-- div for buttons -->\r\n                        <a class=\"btn btn-success pull-right\" routerLink=\"/add-order\" role=\"button\"> <i class=\"fa fa-plus-circle\"></i> New Order</a>\r\n                        <button (click)=\"refreshData()\" type=\"button\" class=\"btn btn-default\"><i class=\"fa fa-refresh\"></i> Refresh</button>\r\n                    </div>\r\n                    <br>\r\n\r\n                    <div class=\"box box-danger\">\r\n                        <div class=\"box-header with-border\">\r\n                            <i class=\"fa fa-list\"></i>\r\n                            <h3 class=\"box-title\">Open Orders</h3>\r\n                        </div>\r\n\r\n                        <div class=\"box-body\">\r\n\r\n                            <div class=\"row\">\r\n                                <div *ngFor=\"let order of open_orders\" class=\"col-sm-3\">\r\n\r\n                                    <app-open-order (modalOpen)=\"stopInterval()\" (modalClose)=\"startInterval()\" [order]=\"order\"></app-open-order>\r\n\r\n                                </div>\r\n                            </div>\r\n\r\n\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"box box-success\">\r\n                        <div class=\"box-header with-border\">\r\n                            <i class=\"fa fa-table\"></i>\r\n                            <h3 class=\"box-title\">Free Tables</h3>\r\n                        </div>\r\n\r\n                        <div class=\"box-body\">\r\n                            <div class=\"row\">\r\n                                <div *ngFor=\"let table of free_tables\" class=\"col-sm-3\">\r\n                                    <div>\r\n                                        <div class=\"free-table text-center\">\r\n                                            <p>Portion/Floor: <b>{{table.portion}}</b></p>\r\n                                            <h2>{{table.name}}</h2>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"box box-danger\">\r\n                        <div class=\"box-header with-border\">\r\n                            <i class=\"fa fa-table\"></i>\r\n                            <h3 class=\"box-title\">Reserved Tables</h3>\r\n                        </div>\r\n\r\n                        <div class=\"box-body\">\r\n                            <div class=\"row\">\r\n                                <div *ngFor=\"let table of reserved_tables\" class=\"col-sm-3\">\r\n                                    <div>\r\n                                        <div class=\"reserved-table text-center\">\r\n                                            <p>Portion/Floor: <b>{{table.portion}}</b></p>\r\n                                            <h2>{{table.name}}</h2>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                    </div>\r\n\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n\r\n</section>"

/***/ }),

/***/ "./src/app/tables-and-orders/tables-and-orders.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TablesAndOrdersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_orders_service__ = __webpack_require__("./src/app/services/orders.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_tables_service__ = __webpack_require__("./src/app/services/tables.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TablesAndOrdersComponent = /** @class */ (function () {
    function TablesAndOrdersComponent(ordersService, tablesService) {
        this.ordersService = ordersService;
        this.tablesService = tablesService;
        this.open_orders = Array();
        this.free_tables = Array();
        this.reserved_tables = Array();
    }
    TablesAndOrdersComponent.prototype.ngOnInit = function () {
        this.startInterval();
    };
    TablesAndOrdersComponent.prototype.ngOnDestroy = function () {
        this.stopInterval();
    };
    TablesAndOrdersComponent.prototype.startInterval = function () {
        var _this = this;
        this.refreshData();
        this.refresh_interval_id = setInterval(function () {
            _this.refreshData();
        }, 10000);
    };
    TablesAndOrdersComponent.prototype.stopInterval = function () {
        if (this.refresh_interval_id) {
            clearInterval(this.refresh_interval_id);
        }
    };
    TablesAndOrdersComponent.prototype.refreshData = function () {
        var _this = this;
        this.ordersService.getOpenOrders()
            .subscribe(function (data) { _this.open_orders = data; });
        this.tablesService.getFreeTables()
            .subscribe(function (data) { _this.free_tables = data; });
    };
    TablesAndOrdersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-tables-and-orders',
            template: __webpack_require__("./src/app/tables-and-orders/tables-and-orders.component.html"),
            styles: [__webpack_require__("./src/app/tables-and-orders/tables-and-orders.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_orders_service__["a" /* OrdersService */],
            __WEBPACK_IMPORTED_MODULE_2__services_tables_service__["a" /* TablesService */]])
    ], TablesAndOrdersComponent);
    return TablesAndOrdersComponent;
}());



/***/ }),

/***/ "./src/app/tables/tables.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/tables/tables.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"content-header\">\r\n    <h1>\r\n        Tables\r\n        <!-- <small>Version 2.0</small> -->\r\n\r\n        <a *ngIf=\"can_add_new\" class=\"btn btn-sm btn-primary\" routerLink=\"/table\" role=\"button\"><i class=\"fa fa-plus-circle\"></i> Add New</a>\r\n\r\n    </h1>\r\n\r\n</section>\r\n\r\n<section class=\"content\">\r\n\r\n    <div class=\"row\">\r\n\r\n        <div class=\"col-md-12\">\r\n            <div class=\"box box-primary\">\r\n\r\n                <div class=\"box-body\">\r\n\r\n                    <div *ngIf=\"tables != null\">\r\n                        <div *ngFor=\"let key of tables | keys\">\r\n\r\n                            <div class=\"panel panel-primary\">\r\n                                <div class=\"panel-heading\">\r\n                                    <h3 class=\"panel-title\">{{key}}</h3>\r\n                                </div>\r\n                                <div class=\"panel-body\">\r\n\r\n                                    <table class=\"table table-bordered table-condensed table-hover\">\r\n                                        <thead>\r\n                                            <tr>\r\n                                                <th>Table Name / Number</th>\r\n                                                <th>Action</th>\r\n                                            </tr>\r\n                                        </thead>\r\n                                        <tbody>\r\n                                            <tr *ngFor=\"let table of tables[key]\">\r\n                                                <td>{{table.name}}</td>\r\n                                                <td>\r\n\r\n                                                    <a *ngIf=\"can_edit\" class=\"btn btn-xs btn-primary\" routerLink=\"/table/{{table.id}}\" role=\"button\">\r\n                                                        <i class=\"fa fa-edit\"></i> Edit\r\n                                                    </a>\r\n\r\n                                                </td>\r\n                                            </tr>\r\n                                        </tbody>\r\n                                    </table>\r\n\r\n                                </div>\r\n                            </div>\r\n\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n\r\n</section>"

/***/ }),

/***/ "./src/app/tables/tables.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TablesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_tables_service__ = __webpack_require__("./src/app/services/tables.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TablesComponent = /** @class */ (function () {
    function TablesComponent(authService, tablesService) {
        this.authService = authService;
        this.tablesService = tablesService;
        this.can_add_new = false;
        this.can_edit = false;
    }
    TablesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tablesService.getTables()
            .subscribe(function (data) { _this.tables = data; });
        this.authService.hasPermission('add-new-table')
            .subscribe(function (data) { _this.can_add_new = data['has_permission']; });
        this.authService.hasPermission('edit-table')
            .subscribe(function (data) { _this.can_edit = data['has_permission']; });
    };
    TablesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-tables',
            template: __webpack_require__("./src/app/tables/tables.component.html"),
            styles: [__webpack_require__("./src/app/tables/tables.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__services_tables_service__["a" /* TablesService */]])
    ], TablesComponent);
    return TablesComponent;
}());



/***/ }),

/***/ "./src/app/user-form/user-form.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user-form/user-form.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"content-header\">\r\n    <h1>\r\n        {{form_type}} User\r\n        <!-- <small>Version 2.0</small> -->\r\n\r\n\r\n\r\n    </h1>\r\n\r\n</section>\r\n\r\n<section class=\"content\">\r\n\r\n    <div class=\"row\">\r\n\r\n        <div class=\"col-md-12\">\r\n            <div class=\"box box-primary\">\r\n\r\n                <div class=\"box-body\">\r\n\r\n\r\n\r\n                    <form #f=\"ngForm\" (ngSubmit)=\"onSubmit(f.value, form_type)\" class=\"form-horizontal\" role=\"form\">\r\n\r\n                        <div class=\"form-group\">\r\n                            <label class=\"control-label col-sm-2\" for=\"name\">Name:</label>\r\n                            <div class=\"col-sm-10\">\r\n                                <input type=\"text\" class=\"form-control\" id=\"name\" name=\"name\" [(ngModel)]=\"user.name\" #name_input=ngModel required>\r\n\r\n                                <div class=\"validation-error\" *ngIf=\"name_input.errors?.required\">\r\n                                    Should not be empty.\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"form-group\">\r\n                            <label class=\"control-label col-sm-2\" for=\"email\">User ID:</label>\r\n                            <div class=\"col-sm-10\">\r\n                                <input type=\"email\" class=\"form-control\" id=\"email\" name=\"email\" [(ngModel)]=\"user.email\" #email_input=ngModel required email>\r\n                                <div class=\"validation-error\" *ngIf=\"email_input.errors?.email\">\r\n                                    Email not valid.\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"form-group\">\r\n                            <label class=\"control-label col-sm-2\" for=\"password\">Password</label>\r\n                            <div class=\"col-sm-10\">\r\n                                <input type=\"password\" class=\"form-control\" id=\"password\" name=\"password\" [(ngModel)]=\"user.password\" [placeholder]=\"form_type == 'Edit' ? 'Leave empty if you do not want to change password' : ''\" [required]=\"form_type == 'New' ? true : false\" #password_input=ngModel>\r\n\r\n                                <div class=\"validation-error\" *ngIf=\"password_input.errors?.required\">\r\n                                    Should not be empty.\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"form-group\">\r\n                            <div class=\"col-sm-offset-2 col-sm-10\">\r\n                                <div class=\"checkbox\">\r\n                                    <label><input type=\"checkbox\" name=\"is_admin\" [(ngModel)]=\"user.is_admin\"> Is Admin</label>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"form-group\">\r\n                            <div class=\"col-sm-offset-2 col-sm-10\">\r\n                                <div class=\"checkbox\">\r\n                                    <label><input type=\"checkbox\" name=\"is_activated\" [(ngModel)]=\"user.is_activated\"> Is Activated</label>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div [class.hidden]=\"user.is_admin\" class=\"box box-success\">\r\n                            <div class=\"box-header with-border\">\r\n                                <h3 class=\"box-title\">Permissions</h3>\r\n                            </div>\r\n\r\n                            <div class=\"box-body\">\r\n\r\n                                <div *ngFor=\"let key of permissions | keys\">\r\n\r\n                                    <div class=\"panel panel-primary\">\r\n                                        <div class=\"panel-heading\">\r\n                                            <h3 class=\"panel-title\">{{key}}</h3>\r\n\r\n                                        </div>\r\n                                        <div class=\"panel-body\">\r\n\r\n                                            <table class=\"table table-bordered table-condensed table-hover\">\r\n                                                <thead>\r\n                                                    <tr>\r\n                                                        <th>Permission</th>\r\n                                                        <th>Access</th>\r\n                                                    </tr>\r\n                                                </thead>\r\n                                                <tbody>\r\n\r\n                                                    <tr *ngFor=\"let permission of permissions[key]\">\r\n                                                        <td class=\"col-md-8\">{{permission.name}}</td>\r\n\r\n                                                        <td class=\"col-md-4\">\r\n                                                            <input [ngModel]=\"permission.access == 1 ? true : false\" type=\"checkbox\" name=\"permissions[{{permission.id}}]\">\r\n                                                        </td>\r\n                                                    </tr>\r\n\r\n                                                </tbody>\r\n                                            </table>\r\n\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                </div>\r\n\r\n\r\n                            </div>\r\n                        </div>\r\n\r\n\r\n\r\n\r\n\r\n                        <div class=\"form-group\">\r\n                            <div class=\"col-sm-10 col-sm-offset-2\">\r\n                                <button type=\"submit\" [disabled]=\"!f.form.valid || is_loading\" class=\"btn btn-primary\">Submit</button>\r\n                            </div>\r\n                        </div>\r\n                    </form>\r\n\r\n\r\n\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n\r\n</section>"

/***/ }),

/***/ "./src/app/user-form/user-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_users_service__ = __webpack_require__("./src/app/services/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_finally__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/finally.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserFormComponent = /** @class */ (function () {
    function UserFormComponent(router, route, usersService, authService) {
        this.router = router;
        this.route = route;
        this.usersService = usersService;
        this.authService = authService;
        this.form_type = "New";
        this.user = {
            id: null,
            name: '',
            email: '',
            password: '',
            is_admin: false,
            is_activated: true,
        };
        this.permissions = Array();
        this.is_loading = false;
    }
    UserFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (data) {
            if (data.id != null) {
                _this.form_type = "Edit";
                _this.is_loading = true;
                _this.usersService.getUserById(data.id)
                    .subscribe(function (data) {
                    _this.user = data;
                    _this.user.password = '';
                    _this.authService.getPermissions(data['id'])
                        .subscribe(function (permissions_data) {
                        _this.permissions = permissions_data;
                        _this.is_loading = false;
                    });
                });
            }
            else {
                _this.is_loading = true;
                _this.authService.getPermissions()
                    .subscribe(function (permissions_data) {
                    _this.permissions = permissions_data;
                    _this.is_loading = false;
                });
            }
        });
    };
    UserFormComponent.prototype.onSubmit = function (value, form_type) {
        var _this = this;
        this.is_loading = true;
        var id = this.form_type == "New" ? null : this.user.id;
        this.usersService.saveUserData(value, id)
            .finally(function () { _this.is_loading = false; })
            .subscribe(function (data) {
            _this.is_loading = false;
            alert(data['message']);
            if (data['success'] == true) {
                _this.router.navigate(['/users']);
            }
        });
    };
    UserFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-user-form',
            template: __webpack_require__("./src/app/user-form/user-form.component.html"),
            styles: [__webpack_require__("./src/app/user-form/user-form.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"],
            __WEBPACK_IMPORTED_MODULE_2__services_users_service__["a" /* UsersService */],
            __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]])
    ], UserFormComponent);
    return UserFormComponent;
}());



/***/ }),

/***/ "./src/app/users/users.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/users/users.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"content-header\">\r\n    <h1>\r\n        Users\r\n        <!-- <small>Version 2.0</small> -->\r\n\r\n        <a *ngIf=\"can_add_new\" class=\"btn btn-sm btn-primary\" routerLink=\"/user\" role=\"button\"><i class=\"fa fa-plus-circle\"></i> Add New</a>\r\n\r\n    </h1>\r\n\r\n</section>\r\n\r\n<section class=\"content\">\r\n\r\n    <div class=\"row\">\r\n\r\n        <div class=\"col-md-12\">\r\n            <div class=\"box box-primary\">\r\n\r\n                <div class=\"box-body\">\r\n\r\n                    <div *ngIf=\"users_data != null\">\r\n                        <p-dataTable [lazy]=\"true\" [value]=\"users_data.data\" [rows]=\"users_data.per_page\" [paginator]=\"true\" [pageLinks]=\"5\" [totalRecords]=\"users_data.total\" (onLazyLoad)=\"loadLazy($event)\">\r\n                            <p-header>List of Users</p-header>\r\n                            <p-column field=\"name\" header=\"Name\"></p-column>\r\n                            <p-column field=\"email\" header=\"User ID\"></p-column>\r\n                            <p-column field=\"is_admin\" header=\"Is Admin\">\r\n                                <ng-template let-col let-user=\"rowData\" pTemplate=\"body\">\r\n                                    <div class=\"text-center\">\r\n                                        <span class=\"label {{ user[col.field] == 1 ? 'label-success' : 'label-danger' }}\">\r\n                                      {{ user[col.field] == 1 ? 'Yes' : 'No' }}\r\n                                  </span>\r\n                                    </div>\r\n                                </ng-template>\r\n                            </p-column>\r\n                            <p-column field=\"is_activated\" header=\"Is Activated\">\r\n                                <ng-template let-col let-user=\"rowData\" pTemplate=\"body\">\r\n                                    <div class=\"text-center\">\r\n                                        <span class=\"label {{ user[col.field] == 1 ? 'label-success' : 'label-danger' }}\">\r\n                                        {{ user[col.field] == 1 ? 'Yes' : 'No' }}\r\n                                    </span>\r\n                                    </div>\r\n                                </ng-template>\r\n                            </p-column>\r\n                            <p-column field=\"id\" header=\"Action\">\r\n                                <ng-template let-col let-user=\"rowData\" pTemplate=\"body\">\r\n                                    <div class=\"text-center\">\r\n                                        <a *ngIf=\"can_edit\" class=\"btn btn-xs btn-primary\" routerLink=\"/user/{{user[col.field]}}\" role=\"button\"> <i class=\"fa fa-edit\"></i> Edit</a>\r\n                                    </div>\r\n                                </ng-template>\r\n                            </p-column>\r\n\r\n                        </p-dataTable>\r\n                    </div>\r\n\r\n\r\n\r\n\r\n\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n\r\n</section>"

/***/ }),

/***/ "./src/app/users/users.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_config_service__ = __webpack_require__("./src/app/services/config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UsersComponent = /** @class */ (function () {
    function UsersComponent(route, router, http, config, authService) {
        this.route = route;
        this.router = router;
        this.http = http;
        this.config = config;
        this.authService = authService;
        this.can_add_new = false;
        this.can_edit = false;
    }
    UsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.users_data = Array();
        this.users_data['data'] = Array();
        this.getUsers();
        this.authService.hasPermission('add-new-user')
            .subscribe(function (data) { _this.can_add_new = data['has_permission']; });
        this.authService.hasPermission('edit-user')
            .subscribe(function (data) { _this.can_edit = data['has_permission']; });
    };
    UsersComponent.prototype.getUsers = function (page) {
        var _this = this;
        var page_query = page ? '?page=' + page : '';
        this.http.get(this.config.base_url + '/api' + this.router.url + page_query)
            .subscribe(function (data) {
            _this.users_data = data;
        });
    };
    UsersComponent.prototype.loadLazy = function (event) {
        //in a real application, make a remote request to load data using state metadata from event
        //event.first = First row offset
        //event.rows = Number of rows per page
        //event.sortField = Field name to sort with
        //event.sortOrder = Sort order as number, 1 for asc and -1 for dec
        //filters: FilterMetadata object having field as key and filter value, filter matchMode as value
        var page_num = Math.trunc(event.first / 10) + 1;
        this.getUsers(page_num);
    };
    UsersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-users',
            template: __webpack_require__("./src/app/users/users.component.html"),
            styles: [__webpack_require__("./src/app/users/users.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"], __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_4__services_config_service__["a" /* ConfigService */],
            __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */]])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map