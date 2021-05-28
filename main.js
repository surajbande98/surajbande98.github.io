(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_cities_forecast_cities_forecast_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/cities-forecast/cities-forecast.component */ "./src/app/components/cities-forecast/cities-forecast.component.ts");
/* harmony import */ var _components_city_forecast_city_forecast_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/city-forecast/city-forecast.component */ "./src/app/components/city-forecast/city-forecast.component.ts");





/* Routes at the app level */
var routes = [
    { path: '', redirectTo: 'cities', pathMatch: 'full' },
    {
        path: 'cities', component: _components_cities_forecast_cities_forecast_component__WEBPACK_IMPORTED_MODULE_3__["CitiesForecastComponent"],
        children: [
            {
                path: ":name",
                component: _components_city_forecast_city_forecast_component__WEBPACK_IMPORTED_MODULE_4__["CityForecastComponent"]
            }
        ]
    },
    {
        path: "**",
        redirectTo: 'cities'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
                    enableTracing: false,
                })
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            providers: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-login-loader></app-login-loader>\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.less":
/*!************************************!*\
  !*** ./src/app/app.component.less ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQubGVzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    /**
     * this is the ngOnInit function
     * @param No
     * @returns void
     */
    AppComponent.prototype.ngOnInit = function () {
    };
    /**
     * this is the ngOnDestroy function
     * @param No
     * @returns void
     */
    AppComponent.prototype.ngOnDestroy = function () {
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.less */ "./src/app/app.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var src_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/shared/shared.module */ "./src/shared/shared.module.ts");
/* harmony import */ var _components_cities_forecast_cities_forecast_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/cities-forecast/cities-forecast.component */ "./src/app/components/cities-forecast/cities-forecast.component.ts");
/* harmony import */ var _services_weather_data_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/weather-data.service */ "./src/app/services/weather-data.service.ts");
/* harmony import */ var _components_city_forecast_city_forecast_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/city-forecast/city-forecast.component */ "./src/app/components/city-forecast/city-forecast.component.ts");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _components_cities_forecast_cities_forecast_component__WEBPACK_IMPORTED_MODULE_8__["CitiesForecastComponent"], _components_city_forecast_city_forecast_component__WEBPACK_IMPORTED_MODULE_10__["CityForecastComponent"]],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                src_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
            ],
            providers: [
                _services_weather_data_service__WEBPACK_IMPORTED_MODULE_9__["WeatherDataService"]
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/cities-forecast/cities-forecast.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/cities-forecast/cities-forecast.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"cities_landing container\">\n\n    <h5 class=\"title\">Weather forecast by City</h5>\n\n    <div class=\"cities_wrapper row justify-content-center\">\n\n        <a class=\"city_tile\"\n         *ngFor=\"let city of allCitiesData; trackBy: trackById\" \n         [class.active]=\"selectedCity?.id==city.id\"\n         (click)=\"selectCity(city)\">\n            <div class=\"city_name\">\n                {{city.name}}\n            </div>\n\n            <div class=\"city_temp\">\n                {{city.main.temp}} °C\n            </div>\n\n            <div class=\"city_time\">\n                <i class=\"bi bi-sunrise\"></i> {{city.sys.sunrise | formatTime}}\n            </div>\n\n            <div class=\"city_time\">\n                <i class=\"bi bi-sunset-fill\"></i> {{city.sys.sunset | formatTime}}\n            </div>\n        </a>\n\n    </div>\n</div>\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/components/cities-forecast/cities-forecast.component.less":
/*!***************************************************************************!*\
  !*** ./src/app/components/cities-forecast/cities-forecast.component.less ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2l0aWVzLWZvcmVjYXN0L2NpdGllcy1mb3JlY2FzdC5jb21wb25lbnQubGVzcyJ9 */"

/***/ }),

/***/ "./src/app/components/cities-forecast/cities-forecast.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/cities-forecast/cities-forecast.component.ts ***!
  \*************************************************************************/
/*! exports provided: CitiesForecastComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CitiesForecastComponent", function() { return CitiesForecastComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_weather_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/weather-data.service */ "./src/app/services/weather-data.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_shared_services_helper_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/shared/services/helper.service */ "./src/shared/services/helper.service.ts");
/* harmony import */ var src_shared_services_login_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/shared/services/login-loader.service */ "./src/shared/services/login-loader.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var CitiesForecastComponent = /** @class */ (function () {
    function CitiesForecastComponent(router, dataService, helper, loader) {
        this.router = router;
        this.dataService = dataService;
        this.helper = helper;
        this.loader = loader;
        this.allCitiesData = [];
        this.selectedCity = null;
    }
    CitiesForecastComponent.prototype.ngOnInit = function () {
        this.getAllCitiesData();
    };
    /** This is the getAllCitiesData function
  * @param
  * @returns
  */
    CitiesForecastComponent.prototype.getAllCitiesData = function () {
        var _this = this;
        this.loader.show();
        // Fork join to make parallel calls
        // It is good to use forkjoin when we have master kind of data to fetch from server
        this.getAllCitiesDataSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])([
            this.dataService.getCityDataByName('London'),
            this.dataService.getCityDataByName('Barcelona'),
            this.dataService.getCityDataByName('Florence'),
            this.dataService.getCityDataByName('Prague'),
            this.dataService.getCityDataByName('Paris')
        ]).subscribe(function (weatherData) {
            _this.loader.hide();
            if (weatherData) {
                _this.allCitiesData = weatherData;
            }
        }, function (error) {
            _this.loader.hide();
            console.log(error);
        });
    };
    /** This is the getFormattedTime function
  * @param
  * @returns
  **/
    CitiesForecastComponent.prototype.getFormattedTime = function (timestamp) {
        return this.helper.getTimeFromTimestamp(timestamp);
    };
    /** This is the ngOnDestroy function
  * @param
  * @returns
  **/
    CitiesForecastComponent.prototype.ngOnDestroy = function () {
        // Avoid memory leaks
        if (this.getAllCitiesDataSubscription)
            this.getAllCitiesDataSubscription.unsubscribe();
    };
    /** This is the trackById function
  * @param  index number
  * @param  el any
  * @returns number
  **/
    CitiesForecastComponent.prototype.trackById = function (index, el) {
        return el.id;
    };
    /** This is the selectCity function
  * @param city any
  * @returns
  **/
    CitiesForecastComponent.prototype.selectCity = function (city) {
        this.selectedCity = city;
        this.router.navigate(["/cities/" + city.name]);
    };
    CitiesForecastComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'cities-forecast',
            template: __webpack_require__(/*! ./cities-forecast.component.html */ "./src/app/components/cities-forecast/cities-forecast.component.html"),
            styles: [__webpack_require__(/*! ./cities-forecast.component.less */ "./src/app/components/cities-forecast/cities-forecast.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            src_app_services_weather_data_service__WEBPACK_IMPORTED_MODULE_2__["WeatherDataService"],
            src_shared_services_helper_service__WEBPACK_IMPORTED_MODULE_4__["HelperService"],
            src_shared_services_login_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoginLoaderService"]])
    ], CitiesForecastComponent);
    return CitiesForecastComponent;
}());



/***/ }),

/***/ "./src/app/components/city-forecast/city-forecast.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/city-forecast/city-forecast.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex flex-column container foreact_wrapper\">\n\n    <h5 class=\"title\">Next 5 days forecast @9:00</h5>\n    <div class=\"cities_wrapper row justify-content-center\">\n\n        <a class=\"city_tile position-relative\" *ngFor=\"let city of foreCastData;let i = index; trackBy: trackById\">\n\n            <div class=\"day\">\n                {{i + 1}}\n            </div>\n            <div class=\"city_temp\">\n                {{city.main.temp}} °C\n            </div>\n\n            <div class=\"city_time\">\n                {{city.main.sea_level}}\n            </div>\n        </a>\n\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/city-forecast/city-forecast.component.less":
/*!***********************************************************************!*\
  !*** ./src/app/components/city-forecast/city-forecast.component.less ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".foreact_wrapper a.back {\n  text-decoration: underline !important;\n  margin-bottom: 12px;\n}\n.foreact_wrapper .city_tile {\n  height: 100px;\n}\n.foreact_wrapper .city_tile:hover {\n  background: #fff;\n  cursor: default;\n}\n.foreact_wrapper .day {\n  border-bottom-right-radius: 12px;\n  text-align: left;\n  position: absolute;\n  left: 0px;\n  top: 8px;\n  background: #16bc79;\n  width: 20px;\n  height: 20px;\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-top-right-radius: 12px;\n  font-size: 13px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3N1cmFqbG9jYWwvRG9jdW1lbnRzL3dlYXRoZXItZm9yZWNhc3Qvc3JjL2FwcC9jb21wb25lbnRzL2NpdHktZm9yZWNhc3QvY2l0eS1mb3JlY2FzdC5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jaXR5LWZvcmVjYXN0L2NpdHktZm9yZWNhc3QuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFHUSxxQ0FBQTtFQUNBLG1CQUFBO0FDRFI7QURIQTtFQVFRLGFBQUE7QUNGUjtBRElRO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0FDRlo7QURWQTtFQWlCUSxnQ0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFFQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7QUNMUiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2l0eS1mb3JlY2FzdC9jaXR5LWZvcmVjYXN0LmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcmVhY3Rfd3JhcHBlciB7XG5cbiAgICBhLmJhY2sge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSAhaW1wb3J0YW50O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICAgIH1cblxuICAgIC5jaXR5X3RpbGUge1xuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5kYXkge1xuICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTJweDtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OiAwcHg7XG4gICAgICAgIGxlZnQ6IDBweDtcbiAgICAgICAgdG9wOiA4cHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICMxNmJjNzk7XG4gICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEycHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICB9XG59IiwiLmZvcmVhY3Rfd3JhcHBlciBhLmJhY2sge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xufVxuLmZvcmVhY3Rfd3JhcHBlciAuY2l0eV90aWxlIHtcbiAgaGVpZ2h0OiAxMDBweDtcbn1cbi5mb3JlYWN0X3dyYXBwZXIgLmNpdHlfdGlsZTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGN1cnNvcjogZGVmYXVsdDtcbn1cbi5mb3JlYWN0X3dyYXBwZXIgLmRheSB7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMnB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDBweDtcbiAgdG9wOiA4cHg7XG4gIGJhY2tncm91bmQ6ICMxNmJjNzk7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEycHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/city-forecast/city-forecast.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/city-forecast/city-forecast.component.ts ***!
  \*********************************************************************/
/*! exports provided: CityForecastComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CityForecastComponent", function() { return CityForecastComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_weather_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/weather-data.service */ "./src/app/services/weather-data.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_shared_services_login_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/shared/services/login-loader.service */ "./src/shared/services/login-loader.service.ts");






var CityForecastComponent = /** @class */ (function () {
    function CityForecastComponent(route, dataService, loader) {
        this.route = route;
        this.dataService = dataService;
        this.loader = loader;
        this.foreCastData = [];
    }
    CityForecastComponent.prototype.ngOnInit = function () {
        var _this = this;
        var city = '';
        // Subscibe to router params
        this.route.params.subscribe(function (params) {
            city = params['name'];
            _this.getForecast(city);
        });
        if (!city) {
            city = window.location.pathname.split("/")[2];
            this.getForecast(city);
        }
    };
    /** This is the getForecast function
  * @param city string
  * @returns
  **/
    CityForecastComponent.prototype.getForecast = function (city) {
        var _this = this;
        this.loader.show();
        this.getCityDataSubscription = this.dataService.getCityForecast(city)
            .subscribe(function (data) {
            _this.loader.hide();
            var list = data.list;
            var finalData = Object(lodash__WEBPACK_IMPORTED_MODULE_4__["map"])(list, function (city) {
                if (city.dt_txt.includes('9:00:00'))
                    return city;
            });
            // Remove undefines from the array
            _this.foreCastData = Object(lodash__WEBPACK_IMPORTED_MODULE_4__["without"])(finalData, undefined);
        }, function (error) {
            _this.loader.hide();
            console.log(error);
        });
    };
    /** This is the ngOnDestroy function
  * @param
  * @returns
  **/
    CityForecastComponent.prototype.ngOnDestroy = function () {
        if (this.getCityDataSubscription)
            this.getCityDataSubscription.unsubscribe();
    };
    /** This is the trackById function
  * @param  index number
   * @param  el any
  * @returns number
  **/
    CityForecastComponent.prototype.trackById = function (index, el) {
        return el.id;
    };
    CityForecastComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'city-forecast',
            template: __webpack_require__(/*! ./city-forecast.component.html */ "./src/app/components/city-forecast/city-forecast.component.html"),
            styles: [__webpack_require__(/*! ./city-forecast.component.less */ "./src/app/components/city-forecast/city-forecast.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            src_app_services_weather_data_service__WEBPACK_IMPORTED_MODULE_3__["WeatherDataService"],
            src_shared_services_login_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoginLoaderService"]])
    ], CityForecastComponent);
    return CityForecastComponent;
}());



/***/ }),

/***/ "./src/app/services/weather-data.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/weather-data.service.ts ***!
  \**************************************************/
/*! exports provided: WeatherDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherDataService", function() { return WeatherDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_shared_http_configuration_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/shared/http/configuration.service */ "./src/shared/http/configuration.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");





var WeatherDataService = /** @class */ (function () {
    function WeatherDataService(configuration) {
        this.configuration = configuration;
    }
    /**
   * This is the getCityDataByName function
   * @param payLoad any
   * @returns Observable<any>
   */
    WeatherDataService.prototype.getCityDataByName = function (city) {
        var endpoint = this.getEndPoint(this.configuration.getCityDataByNameUrl);
        var apiCall = fetch(endpoint + "?q=" + city + "&appid=" + src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiKey)
            .then(function (response) {
            return response.json();
        })
            .then(function (responseJson) {
            return responseJson;
        })
            .catch(function (err) {
            return err;
        });
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(apiCall);
    };
    WeatherDataService.prototype.getCityForecast = function (city) {
        var endpoint = this.getEndPoint(this.configuration.getCityForecast);
        var apiCall = fetch(endpoint + "?q=" + city + "&appid=" + src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiKey)
            .then(function (response) {
            return response.json();
        })
            .then(function (responseJson) {
            return responseJson;
        })
            .catch(function (err) {
            return err;
        });
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(apiCall);
    };
    WeatherDataService.prototype.getEndPoint = function (url) {
        return this.configuration.baseUrl + "/" + url;
    };
    WeatherDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_shared_http_configuration_service__WEBPACK_IMPORTED_MODULE_3__["ConfigurationService"]])
    ], WeatherDataService);
    return WeatherDataService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    apiKey: "3d8b309701a13f65b660fa2c64cdc517"
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ "./src/shared/components/login-loader/login-loader.component.html":
/*!************************************************************************!*\
  !*** ./src/shared/components/login-loader/login-loader.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"spinner-upper\" [ngClass]=\"!show ? 'loader-hidden' : (spinnerText ? 'bg-dark': '')\">\n    <div class=\"spinner-inner\"></div>\n    <div class=\"spinner-text roboto-slab-bold\" *ngIf=\"spinnerText\" [innerHtml]=\"spinnerText\"></div>\n</div>"

/***/ }),

/***/ "./src/shared/components/login-loader/login-loader.component.less":
/*!************************************************************************!*\
  !*** ./src/shared/components/login-loader/login-loader.component.less ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".loader-hidden {\n  visibility: hidden;\n}\n.spinner-upper {\n  position: fixed;\n  left: 0;\n  top: 0;\n  z-index: 1000;\n  background-color: #FFFFFFCC;\n  width: 100%;\n  height: 100%;\n}\n.spinner-upper .spinner-inner {\n  padding: 20px;\n  position: absolute;\n  z-index: 100;\n  left: 50%;\n  top: 50%;\n  border: 8px solid #FFFFFF;\n  border-radius: 50%;\n  border-top: 8px solid #16BC79;\n  border-right: 8px solid #16BC79;\n  border-bottom: 8px solid #16BC79;\n  width: 88px !important;\n  height: 88px !important;\n  transform: translate(-50%, -50%);\n  -webkit-animation: spin 2s linear infinite;\n  animation: spin 2s linear infinite;\n  margin-left: -45px;\n  margin-top: -44px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3N1cmFqbG9jYWwvRG9jdW1lbnRzL3dlYXRoZXItZm9yZWNhc3Qvc3JjL3NoYXJlZC9jb21wb25lbnRzL2xvZ2luLWxvYWRlci9sb2dpbi1sb2FkZXIuY29tcG9uZW50Lmxlc3MiLCJzcmMvc2hhcmVkL2NvbXBvbmVudHMvbG9naW4tbG9hZGVyL2xvZ2luLWxvYWRlci5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNJLGtCQUFBO0FDRko7QURLQTtFQUNJLGVBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDSEo7QURKQTtFQVNRLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7RUFFQSxzQkFBQTtFQUNBLHVCQUFBO0VBRUEsZ0NBQUE7RUFDQSwwQ0FBQTtFQUNBLGtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ0hSIiwiZmlsZSI6InNyYy9zaGFyZWQvY29tcG9uZW50cy9sb2dpbi1sb2FkZXIvbG9naW4tbG9hZGVyLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiXG5AaW1wb3J0IFwiLi4vLi4vLi4vc3R5bGVzL3ZhcmlhYmxlcy5sZXNzXCI7XG5cbi5sb2FkZXItaGlkZGVuIHtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbi5zcGlubmVyLXVwcGVyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgbGVmdDogMDtcbiAgICB0b3A6IDA7XG4gICAgei1pbmRleDogMTAwMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNGRkZGRkZDQztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgLnNwaW5uZXItaW5uZXIge1xuICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHotaW5kZXg6IDEwMDtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgYm9yZGVyOiA4cHggc29saWQgQGNwLXdoaXRlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGJvcmRlci10b3A6IDhweCBzb2xpZCBAY3AtZ3JlZW47XG4gICAgICAgIGJvcmRlci1yaWdodDogOHB4IHNvbGlkIEBjcC1ncmVlbjtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogOHB4IHNvbGlkIEBjcC1ncmVlbjtcbiAgICAgICAgLy8gYm9yZGVyOiA4cHggZGFzaGVkIEBjcC1ncmVlbjtcbiAgICAgICAgd2lkdGg6IDg4cHggIWltcG9ydGFudDtcbiAgICAgICAgaGVpZ2h0OiA4OHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogc3BpbiAycyBsaW5lYXIgaW5maW5pdGU7XG4gICAgICAgIGFuaW1hdGlvbjogc3BpbiAycyBsaW5lYXIgaW5maW5pdGU7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtNDVweDtcbiAgICAgICAgbWFyZ2luLXRvcDogLTQ0cHg7XG5cbiAgICAgICAgLy8gdHJhbnNmb3JtOiBtYXRyaXgoMCwgLTEsIDEsIDAsIDAsIDApO1xuXG4gICAgfVxufSIsIi5sb2FkZXItaGlkZGVuIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuLnNwaW5uZXItdXBwZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgei1pbmRleDogMTAwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRkNDO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLnNwaW5uZXItdXBwZXIgLnNwaW5uZXItaW5uZXIge1xuICBwYWRkaW5nOiAyMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDEwMDtcbiAgbGVmdDogNTAlO1xuICB0b3A6IDUwJTtcbiAgYm9yZGVyOiA4cHggc29saWQgI0ZGRkZGRjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXItdG9wOiA4cHggc29saWQgIzE2QkM3OTtcbiAgYm9yZGVyLXJpZ2h0OiA4cHggc29saWQgIzE2QkM3OTtcbiAgYm9yZGVyLWJvdHRvbTogOHB4IHNvbGlkICMxNkJDNzk7XG4gIHdpZHRoOiA4OHB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogODhweCAhaW1wb3J0YW50O1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgLXdlYmtpdC1hbmltYXRpb246IHNwaW4gMnMgbGluZWFyIGluZmluaXRlO1xuICBhbmltYXRpb246IHNwaW4gMnMgbGluZWFyIGluZmluaXRlO1xuICBtYXJnaW4tbGVmdDogLTQ1cHg7XG4gIG1hcmdpbi10b3A6IC00NHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/shared/components/login-loader/login-loader.component.ts":
/*!**********************************************************************!*\
  !*** ./src/shared/components/login-loader/login-loader.component.ts ***!
  \**********************************************************************/
/*! exports provided: LoginLoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginLoaderComponent", function() { return LoginLoaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_shared_services_login_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/shared/services/login-loader.service */ "./src/shared/services/login-loader.service.ts");



var LoginLoaderComponent = /** @class */ (function () {
    function LoginLoaderComponent(loaderService) {
        this.loaderService = loaderService;
        this.show = false;
    }
    LoginLoaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.loaderService.loaderSubject
            .subscribe(function (state) {
            _this.show = state.show;
            _this.spinnerText = state.text;
        });
    };
    LoginLoaderComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    LoginLoaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login-loader',
            template: __webpack_require__(/*! ./login-loader.component.html */ "./src/shared/components/login-loader/login-loader.component.html"),
            styles: [__webpack_require__(/*! ./login-loader.component.less */ "./src/shared/components/login-loader/login-loader.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_shared_services_login_loader_service__WEBPACK_IMPORTED_MODULE_2__["LoginLoaderService"]])
    ], LoginLoaderComponent);
    return LoginLoaderComponent;
}());



/***/ }),

/***/ "./src/shared/http/configuration.service.ts":
/*!**************************************************!*\
  !*** ./src/shared/http/configuration.service.ts ***!
  \**************************************************/
/*! exports provided: ConfigurationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigurationService", function() { return ConfigurationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ConfigurationService = /** @class */ (function () {
    function ConfigurationService() {
        this.baseUrl = 'https://api.openweathermap.org/data/2.5/';
        /** Weather Url's **/
        this.getCityDataByNameUrl = "weather";
        this.getCityForecast = "forecast";
    }
    ConfigurationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], ConfigurationService);
    return ConfigurationService;
}());



/***/ }),

/***/ "./src/shared/http/http.service.ts":
/*!*****************************************!*\
  !*** ./src/shared/http/http.service.ts ***!
  \*****************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _configuration_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./configuration.service */ "./src/shared/http/configuration.service.ts");




var HttpService = /** @class */ (function () {
    function HttpService(http, _config) {
        this.http = http;
        this._config = _config;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' });
    }
    HttpService.prototype.makePostReq = function (request, api) {
        return this.http.post((this._config.baseUrl + api), request, this.headers);
    };
    HttpService.prototype.makeGetReq = function (api, params) {
        if (params === void 0) { params = {}; }
        return this.http.get((this._config.baseUrl + api), {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' }),
            params: params
        });
    };
    /**
   * Convert Object to HttpParams
   * @param {Object} obj
   * @returns {HttpParams}
   */
    HttpService.prototype.toHttpParams = function (obj) {
        return Object.getOwnPropertyNames(obj)
            .reduce(function (p, key) { return p.set(key, obj[key]); }, new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]());
    };
    HttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _configuration_service__WEBPACK_IMPORTED_MODULE_3__["ConfigurationService"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/shared/pipes/format-time.pipe.ts":
/*!**********************************************!*\
  !*** ./src/shared/pipes/format-time.pipe.ts ***!
  \**********************************************/
/*! exports provided: FormatTimePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormatTimePipe", function() { return FormatTimePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FormatTimePipe = /** @class */ (function () {
    function FormatTimePipe() {
    }
    FormatTimePipe.prototype.transform = function (timestamp) {
        if (!timestamp) {
            return '';
        }
        // return moment(timestamp).format("HH:MM:SS a");
        // Create a new JavaScript Date object based on the timestamp
        // multiplied by 1000 so that the argument is in milliseconds, not seconds.
        var date = new Date(timestamp * 1000);
        // Hours part from the timestamp
        var hours = date.getHours();
        // Minutes part from the timestamp
        var minutes = "0" + date.getMinutes();
        // Seconds part from the timestamp
        var seconds = "0" + date.getSeconds();
        // Will display time in 10:30:23 format
        return hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    };
    FormatTimePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'formatTime'
        })
    ], FormatTimePipe);
    return FormatTimePipe;
}());



/***/ }),

/***/ "./src/shared/services/helper.service.ts":
/*!***********************************************!*\
  !*** ./src/shared/services/helper.service.ts ***!
  \***********************************************/
/*! exports provided: HelperService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelperService", function() { return HelperService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HelperService = /** @class */ (function () {
    function HelperService() {
    }
    HelperService.prototype.getTimeFromTimestamp = function (timestamp) {
        // convert to milliseconds and 
        // then create a new Date object
        var dateObj = new Date(timestamp * 1000);
        var utcString = dateObj.toUTCString();
        var time = utcString.slice(-11, -4);
        return time;
    };
    HelperService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HelperService);
    return HelperService;
}());



/***/ }),

/***/ "./src/shared/services/login-loader.service.ts":
/*!*****************************************************!*\
  !*** ./src/shared/services/login-loader.service.ts ***!
  \*****************************************************/
/*! exports provided: LoginLoaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginLoaderService", function() { return LoginLoaderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var LoginLoaderService = /** @class */ (function () {
    function LoginLoaderService() {
        this.loaderSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    LoginLoaderService.prototype.show = function (text) {
        if (text === void 0) { text = ''; }
        this.loaderSubject.next({ show: true, text: text });
    };
    LoginLoaderService.prototype.hide = function () {
        this.loaderSubject.next({ show: false, text: '' });
    };
    LoginLoaderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoginLoaderService);
    return LoginLoaderService;
}());



/***/ }),

/***/ "./src/shared/shared.module.ts":
/*!*************************************!*\
  !*** ./src/shared/shared.module.ts ***!
  \*************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _http_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./http/http.service */ "./src/shared/http/http.service.ts");
/* harmony import */ var _http_configuration_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./http/configuration.service */ "./src/shared/http/configuration.service.ts");
/* harmony import */ var _services_helper_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/helper.service */ "./src/shared/services/helper.service.ts");
/* harmony import */ var _services_login_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/login-loader.service */ "./src/shared/services/login-loader.service.ts");
/* harmony import */ var _components_login_loader_login_loader_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/login-loader/login-loader.component */ "./src/shared/components/login-loader/login-loader.component.ts");
/* harmony import */ var _pipes_format_time_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pipes/format-time.pipe */ "./src/shared/pipes/format-time.pipe.ts");









var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _components_login_loader_login_loader_component__WEBPACK_IMPORTED_MODULE_7__["LoginLoaderComponent"],
                _pipes_format_time_pipe__WEBPACK_IMPORTED_MODULE_8__["FormatTimePipe"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ],
            exports: [
                _components_login_loader_login_loader_component__WEBPACK_IMPORTED_MODULE_7__["LoginLoaderComponent"],
                _pipes_format_time_pipe__WEBPACK_IMPORTED_MODULE_8__["FormatTimePipe"]
            ],
            providers: [
                _http_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"],
                _http_configuration_service__WEBPACK_IMPORTED_MODULE_4__["ConfigurationService"],
                _services_helper_service__WEBPACK_IMPORTED_MODULE_5__["HelperService"],
                _services_login_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoginLoaderService"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/surajlocal/Documents/weather-forecast/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map