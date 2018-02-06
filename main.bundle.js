webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <app-nosotros></app-nosotros>  -->\r\n\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css"), __webpack_require__("../../../../../src/assets/css/estilos.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__componentes_index__ = __webpack_require__("../../../../../src/app/componentes/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__componentes_footer_component__ = __webpack_require__("../../../../../src/app/componentes/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__componentes_frases_component__ = __webpack_require__("../../../../../src/app/componentes/frases.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__componentes_panelnoticias_component__ = __webpack_require__("../../../../../src/app/componentes/panelnoticias.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__componentes_header_component__ = __webpack_require__("../../../../../src/app/componentes/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__componentes_entradaindex_component__ = __webpack_require__("../../../../../src/app/componentes/entradaindex.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__componentes_nosotros__ = __webpack_require__("../../../../../src/app/componentes/nosotros.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__componentes_misionvision_component__ = __webpack_require__("../../../../../src/app/componentes/misionvision.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__componentes_inicialprimaria_component__ = __webpack_require__("../../../../../src/app/componentes/inicialprimaria.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__componentes_niveles__ = __webpack_require__("../../../../../src/app/componentes/niveles.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_rutas__ = __webpack_require__("../../../../../src/app/app.rutas.ts");
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__componentes_index__["a" /* IndexComponent */],
                __WEBPACK_IMPORTED_MODULE_4__componentes_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_5__componentes_frases_component__["a" /* FrasesComponent */],
                __WEBPACK_IMPORTED_MODULE_6__componentes_panelnoticias_component__["a" /* PanelNoticiasComponent */],
                __WEBPACK_IMPORTED_MODULE_7__componentes_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_8__componentes_entradaindex_component__["a" /* EntradaIndexComponent */],
                __WEBPACK_IMPORTED_MODULE_9__componentes_nosotros__["a" /* NosotrosComponent */],
                __WEBPACK_IMPORTED_MODULE_10__componentes_misionvision_component__["a" /* MisionVisionComponent */],
                __WEBPACK_IMPORTED_MODULE_11__componentes_inicialprimaria_component__["a" /* InicialPrimariaComponent */],
                __WEBPACK_IMPORTED_MODULE_12__componentes_niveles__["a" /* NivelesComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_13__app_rutas__["b" /* routing */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_13__app_rutas__["a" /* appRoutingProviders */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.rutas.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appRoutingProviders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__componentes_index__ = __webpack_require__("../../../../../src/app/componentes/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__componentes_nosotros__ = __webpack_require__("../../../../../src/app/componentes/nosotros.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__componentes_niveles__ = __webpack_require__("../../../../../src/app/componentes/niveles.ts");




var appRoutes = [
    { path: "", component: __WEBPACK_IMPORTED_MODULE_1__componentes_index__["a" /* IndexComponent */] },
    { path: "index", component: __WEBPACK_IMPORTED_MODULE_1__componentes_index__["a" /* IndexComponent */] },
    { path: "nosotros", component: __WEBPACK_IMPORTED_MODULE_2__componentes_nosotros__["a" /* NosotrosComponent */] },
    { path: "niveles", component: __WEBPACK_IMPORTED_MODULE_3__componentes_niveles__["a" /* NivelesComponent */] },
    { path: "**", component: __WEBPACK_IMPORTED_MODULE_1__componentes_index__["a" /* IndexComponent */] }
];
var appRoutingProviders = [];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(appRoutes);


/***/ }),

/***/ "../../../../../src/app/componentes/entradaindex.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EntradaIndexComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var EntradaIndexComponent = /** @class */ (function () {
    function EntradaIndexComponent() {
    }
    EntradaIndexComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-entradaindex',
            template: __webpack_require__("../../../../../src/app/vistas/entradaindex.component.html"),
        })
    ], EntradaIndexComponent);
    return EntradaIndexComponent;
}());



/***/ }),

/***/ "../../../../../src/app/componentes/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/vistas/footer.component.html"),
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/componentes/frases.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FrasesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FrasesComponent = /** @class */ (function () {
    function FrasesComponent() {
    }
    FrasesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-frases',
            template: __webpack_require__("../../../../../src/app/vistas/frases.component.html"),
        })
    ], FrasesComponent);
    return FrasesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/componentes/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/vistas/header.component.html"),
        })
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/componentes/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndexComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var IndexComponent = /** @class */ (function () {
    function IndexComponent() {
    }
    IndexComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-index',
            template: __webpack_require__("../../../../../src/app/vistas/index.html"),
        })
    ], IndexComponent);
    return IndexComponent;
}());



/***/ }),

/***/ "../../../../../src/app/componentes/inicialprimaria.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InicialPrimariaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var InicialPrimariaComponent = /** @class */ (function () {
    function InicialPrimariaComponent() {
    }
    InicialPrimariaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-inicialprimaria',
            template: __webpack_require__("../../../../../src/app/vistas/inicialprimaria.component.html"),
        })
    ], InicialPrimariaComponent);
    return InicialPrimariaComponent;
}());



/***/ }),

/***/ "../../../../../src/app/componentes/misionvision.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MisionVisionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MisionVisionComponent = /** @class */ (function () {
    function MisionVisionComponent() {
    }
    MisionVisionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-misionvision',
            template: __webpack_require__("../../../../../src/app/vistas/misionvision.component.html"),
        })
    ], MisionVisionComponent);
    return MisionVisionComponent;
}());



/***/ }),

/***/ "../../../../../src/app/componentes/niveles.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NivelesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NivelesComponent = /** @class */ (function () {
    function NivelesComponent() {
    }
    NivelesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-nivelescomponent',
            template: __webpack_require__("../../../../../src/app/vistas/niveles.html"),
        })
    ], NivelesComponent);
    return NivelesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/componentes/nosotros.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NosotrosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NosotrosComponent = /** @class */ (function () {
    function NosotrosComponent() {
    }
    NosotrosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-nosotros',
            template: __webpack_require__("../../../../../src/app/vistas/nosotros.html"),
        })
    ], NosotrosComponent);
    return NosotrosComponent;
}());



/***/ }),

/***/ "../../../../../src/app/componentes/panelnoticias.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PanelNoticiasComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PanelNoticiasComponent = /** @class */ (function () {
    function PanelNoticiasComponent() {
    }
    PanelNoticiasComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-panelnoticias',
            template: __webpack_require__("../../../../../src/app/vistas/panelnoticias.component.html"),
        })
    ], PanelNoticiasComponent);
    return PanelNoticiasComponent;
}());



/***/ }),

/***/ "../../../../../src/app/vistas/entradaindex.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n  <!--=====================================\r\n  =       SER PARTE DE LA INSTITUCION       =\r\n  ======================================-->\r\n\r\n<section class=\"container\" style=\"margin-top: 10px;\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12 col-md-8 col-lg-8 align-self-center velozEntradaI\">\r\n      <strong class=\"subtitulo plomo\">¿POR QUÉ SER PARTE DE NUESTRA INSTITUCION?</strong>\r\n      <p class=\"textogeneral container\">\r\n        Nuestro Colegio busca potenciar la formación integral y el desarrollo personal del alumno en acompañamiento con los padres. Esta tendencia responde al interés por una educación que conjugue las enseñanzas académicas con otros valores como la ética, la fe y la vida espiritual, la cultura, el respeto a la familia y a la convivencia.\r\n      </p>\r\n      <p class=\"textogeneral container\">\r\n        Somos un Colegio comprometido con formar personas que desarrollen distintos aspectos de la existencia, combinando el estudio, los valores, la vida espiritual, los deportes, el arte y la vida social, potenciando al máximo sus recursos y habilidades personales.\r\n      </p>\r\n    </div>\r\n    <div class=\"col-sm-12 col-md-4 col-lg-4 align-self-center velozEntradaD\" >\r\n\r\n      <img src=\"../assets/img/logo.jpg\" alt=\"logo-no-encontrado\" style=\"width: 100%;padding: 30px;background: #001C34\">\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n  <!--====  End of SER PARTE DE LA INSTITUCION  ====-->\r\n"

/***/ }),

/***/ "../../../../../src/app/vistas/footer.component.html":
/***/ (function(module, exports) {

module.exports = "  <!--============================\r\n  =            FOOTER            =\r\n  =============================-->  \r\n  \r\n    <!-- <footer class=\"py-5 bg-dark \" style=\"margin-top: 10px;\">\r\n      <div class=\"container\">\r\n        <p class=\"m-0 text-center text-white\">&copy; Santa María Reyna del Sur 2018</p>\r\n      </div>      \r\n    </footer>  -->\r\n\r\n<footer class=\"bg-dark\" style=\"padding-top: 30px; padding-bottom:30px; color: white; margin-top: 100px\">\r\n  <div class=\"container\">\r\n    <div class=\"row align-items-end\">\r\n      <div class=\"col\">\r\n        <strong>NOSOTROS</strong>\r\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis officia, laudantium, itaque asperiores ea voluptates ratione impedit corporis eius similique deleniti delectus.</p>\r\n      </div>\r\n      <div class=\"col\">\r\n        <strong>CONTACTANOS</strong>\r\n        <p></p>\r\n        <p>Colegio Santa María Reyna del Sur</p>\r\n        <p>Malecón Rímac 370 int 9</p>\r\n        <p>96598654</p>\r\n        <p>dsajdkajd@gmail.com</p>\r\n      </div>\r\n      <div class=\"col\">\r\n        <strong>SIGUENOS</strong>            \r\n      </div>\r\n    </div>\r\n  </div>\r\n</footer>\r\n  \r\n  <!--====  End of FOOTER  ====-->"

/***/ }),

/***/ "../../../../../src/app/vistas/frases.component.html":
/***/ (function(module, exports) {

module.exports = "<!--=====================================\r\n=          AQUI VAN LAS FRASES          =\r\n======================================-->\r\n<div class=\"velozEntradaI\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12 col-md-6 col-lg-6 crece py-3 cabeza\" style=\"background-color: #a51c30\">\r\n      <strong class=\"subtitulo\">LIDERAZGO</strong>\r\n      <p class=\"textogeneral\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique deserunt, dolore accusantium quia vel labore neque consequuntur excepturi, quis impedit fuga obcaecati dolorum id mollitia rem iusto non suscipit beatae.</p>\r\n      <img src=\"../assets/img/liderazgo.jpg\" alt=\"\" style=\"width: 100%\">\r\n    </div>\r\n\r\n    <div class=\"col-sm-12 col-md-6 col-lg-6 crece py-3 cabeza\" style=\"background-color: #A53443\">\r\n      <strong class=\"subtitulo\">INNOVACIÓN</strong>\r\n      <p class=\"textogeneral\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, aspernatur, quisquam. Voluptatem excepturi illum, cum laudantium earum nobis quo quae. Alias aliquam excepturi, incidunt voluptas rem, at nesciunt nobis.</p>\r\n      <img src=\"../assets/img/innovacion.jpg\" alt=\"\" style=\"width: 100%\">\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12 col-md-6 col-lg-6 crece py-3 cabeza\" style=\"background-color: #A53443\">\r\n      <strong class=\"subtitulo\">VALORES</strong>\r\n      <p class=\"textogeneral\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae et obcaecati tempore totam eaque rerum, sit. Suscipit rem minus, dignissimos nesciunt, molestias magnam enim veniam, perspiciatis pariatur exercitationem vitae ut.</p>\r\n      <img src=\"../assets/img/valores.jpg\" alt=\"\" style=\"width: 100%\">\r\n    </div>\r\n    <div class=\"col-sm-12 col-md-6 col-lg-6 crece py-3 cabeza\" style=\"background-color: #a51c30\">\r\n      <strong class=\"subtitulo\">APRENDIZAJE</strong>\r\n      <p class=\"textogeneral\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae et obcaecati tempore totam eaque rerum, sit. Suscipit rem minus, dignissimos nesciunt, molestias magnam enim veniam, perspiciatis pariatur exercitationem vitae ut.</p>\r\n      <img src=\"../assets/img/aprendizaje.jpg\" alt=\"\" style=\"width: 100%\">\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- </div>\r\n --><!--====  End of AQUI VAN LAS FRASES  ====-->\r\n"

/***/ }),

/***/ "../../../../../src/app/vistas/header.component.html":
/***/ (function(module, exports) {

module.exports = "<!--========================================\r\n=            MENU DE NAVEGACIÓN           =\r\n=========================================-->\r\n\r\n<div class=\"col-12\">\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <nav class=\"navbar navbar-expand-lg navbar-dark fixed-top letraNav\" style=\"font-size: 15px;\">\r\n          <div class=\"container\">\r\n            <!-- Logo del colegio en el menu nav -->\r\n            <a [routerLink] =\"['/index']\"><img src=\"../assets/img/logo1.jpg\" alt=\"logo-no-encontrado\"></a>\r\n\r\n            <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\" aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n              <span class=\"navbar-toggler-icon\"></span>\r\n            </button>\r\n            <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\r\n              <ul class=\"navbar-nav ml-auto menu\">\r\n                <li class=\"nav-item active\">\r\n                  <a class=\"nav-link \" [routerLink] = \"['/index']\" >Inicio\r\n                    <span class=\"sr-only\">(current)</span>\r\n                  </a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                  <a class=\"nav-link \" [routerLink] = \"['/nosotros']\">Nosotros</a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                  <a class=\"nav-link \" [routerLink] = \"['/niveles']\" >Niveles</a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                  <a class=\"nav-link \" href=\"#\">Infraestructura</a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                  <a class=\"nav-link \" href=\"#\">Noticias</a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                  <a class=\"nav-link \" href=\"#\">Contactanos</a>\r\n                </li>\r\n              </ul>\r\n            </div>\r\n          </div>\r\n        </nav>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!--====  End of MENU DE NAVEGACIÓN  ====-->\r\n\r\n\r\n\r\n\r\n<!--==============================\r\n=            CAROUSEL            =\r\n===============================-->\r\n\r\n  <div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\" style=\"margin-top: 95px;\">\r\n        <ol class=\"carousel-indicators\">\r\n          <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\r\n          <li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\r\n          <li data-target=\"#myCarousel\" data-slide-to=\"2\"></li>\r\n        </ol>\r\n        <div class=\"carousel-inner\">\r\n          <div class=\"carousel-item active\">\r\n            <img class=\"first-slide\" src=\"../assets/img/img1.jpg\" alt=\"First slide\">\r\n            <div class=\"container\">\r\n              <div class=\"carousel-caption text-left\">\r\n                <h1>FOMENTAMOS SU DESARROLLO</h1>\r\n                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat laudantium vel aspernatur voluptates modi dolore, a rerum veritatis voluptatibus iure sint ipsum vitae odit libero minima provident architecto, quaerat repellat.</p>\r\n                <!-- <p><a class=\"btn btn-lg btn-primary\" href=\"#\" role=\"button\">Sign up today</a></p> -->\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"carousel-item\">\r\n            <img class=\"second-slide\" src=\"../assets/img/img2.jpg\" alt=\"Second slide\">\r\n            <div class=\"container\">\r\n              <div class=\"carousel-caption\">\r\n                <h1>MERECEN LO MEJOR</h1>\r\n                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam soluta, nisi vero veritatis delectus id voluptatum sapiente facilis laudantium libero dolorum pariatur tempora assumenda sequi accusamus rerum ea. Ullam, quibusdam?</p>\r\n                <!-- <p><a class=\"btn btn-lg btn-primary\" href=\"#\" role=\"button\">Learn more</a></p> -->\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"carousel-item\">\r\n            <img class=\"third-slide\" src=\"../assets/img/img3.jpg\" alt=\"Third slide\">\r\n            <div class=\"container\">\r\n              <div class=\"carousel-caption text-right\">\r\n                <h1>SU BIENESTAR FÍSICO Y MENTAL ES NUESTRA PREOCUPACIÓN</h1>\r\n                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ad ullam facilis inventore itaque nam rem cupiditate facere pariatur unde accusamus, magnam laudantium veritatis, velit aperiam expedita officiis mollitia. Perspiciatis!</p>\r\n                <!-- <p><a class=\"btn btn-lg btn-primary\" href=\"#\" role=\"button\">Browse gallery</a></p> -->\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <a class=\"carousel-control-prev\" href=\"#myCarousel\" role=\"button\" data-slide=\"prev\">\r\n          <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\r\n          <span class=\"sr-only\">Previous</span>\r\n        </a>\r\n        <a class=\"carousel-control-next\" href=\"#myCarousel\" role=\"button\" data-slide=\"next\">\r\n          <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\r\n          <span class=\"sr-only\">Next</span>\r\n        </a>\r\n      </div>\r\n\r\n<!--====  End of CAROUSEL  ====-->\r\n"

/***/ }),

/***/ "../../../../../src/app/vistas/index.html":
/***/ (function(module, exports) {

module.exports = "<!--============================\r\n=            HEADER            =\r\n=============================-->\r\n\r\n<app-header></app-header>\r\n\r\n<!--====  End of HEADER  ====-->\r\n\r\n\r\n<!--===================================\r\n=            ENTRADA INDEX            =\r\n====================================-->\r\n\r\n<app-entradaindex></app-entradaindex>\r\n\r\n<!--====  End of ENTRADA INDEX  ====-->\r\n\r\n\r\n<!--=====================================\r\n=            FRASES Y NOTICIAS          =\r\n======================================-->\r\n\r\n<section class=\"container\" style=\"margin-top: 10px\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-sm-12 col-md-8 col-lg-8\" style=\"color: white\">\r\n\t\t\t<app-frases></app-frases>\r\n\t\t</div>\r\n\t\t<div class=\"col-sm-12 col-md-4 col-lg-4\">\r\n\t\t\t<app-panelnoticias></app-panelnoticias>\r\n\t\t</div>\r\n\t</div>\r\n</section>\r\n\r\n<!--====  End of FRASES NOTICIAS  ====-->\r\n\r\n\r\n<!--============================\r\n=            FOOTER            =\r\n=============================-->\r\n\r\n<app-footer></app-footer >\r\n\r\n<!--====  End of FOOTER  ====-->\r\n"

/***/ }),

/***/ "../../../../../src/app/vistas/inicialprimaria.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card border-light mb-3\">\r\n  <div class=\"card-body\">\r\n    <h5 class=\"card-title card-header subtitulo\"><strong class=\"plomo\">Primaria</strong></h5>\r\n    <div class=\"card-text container textogeneral\" style=\"font-size: 17px\">\r\n    \t<p>\r\n    \t\tSomos los encargados de fomentar el desarrollo de las habilidades, las destrezas y actitudes positivas, para que alcancen aprendizajes significativos, logren el desarrollo de su personalidad y lleguen a ser independientes, creativos y seguros de sí mismos.\r\n    \t</p>    \r\n    \t<p>\r\n    \t\tBuscamos la adquisición de hábitos básicos positivos en los niños, así como una elevada autoestima y la práctica de una relación armoniosa con sus compañeros.\r\n    \t</p>\r\n    \t<ul>\r\n    \t\t<li>\r\n    \t\t\tBrindamos una educación de calidad, cimentada en valores cristianos.\r\n    \t\t</li>\r\n    \t\t<li>\r\n    \t\t\tBuscamos desarrollar en nuestros niños su autonomía, seguridad, independencia, madurez social a través de las diversas actividades diarias.\r\n    \t\t</li>\r\n    \t\t<li>\r\n    \t\t\tFomentamos en nuestros niños la adquisición de hábitos sociales (cortesía, alimentación, aseo)\r\n    \t\t</li>\r\n    \t\t<li>\r\n    \t\t\tLos niños aprenden a leer y escribir desde temprana edad.\r\n    \t\t</li>\r\n    \t\t<li>\r\n    \t\t\tPropiciamos el hábito de lectura a través del Plan lector.\r\n    \t\t</li>\r\n    \t\t<li>\r\n    \t\t\tPlanteamos y realizamos actividades para ayudar a los niños a desarrollar sus capacidades de razonamiento, demostración, comunicación matemática y resolución de problemas.\r\n    \t\t</li>\r\n    \t\t<li>\r\n    \t\t\tConsideramos como punto importante el conocimiento, manejo y control del cuerpo a través de actividades psicomotoras y acciones que ejercitan la motricidad fina.\r\n    \t\t</li>\r\n    \t\t<li>\r\n    \t\t\tExponemos a los niños a experiencias que les brindan aprendizajes significativos.\r\n    \t\t</li>\r\n    \t</ul>\r\n    </div>\r\n\r\n  </div>\r\n</div>\t\r\n\r\n\r\n<div class=\"card border-light mb-3\">\r\n  <div class=\"card-body\">\r\n    <h5 class=\"card-title card-header subtitulo\"><strong class=\"plomo\">Primaria</strong></h5>\r\n    <div class=\"card-text container textogeneral\" style=\"font-size: 17px\">\r\n    \t<p>\r\n    \t\tBuscamos desarrollar personas competentes con una alta autoestima, conocimientos, habilidades sociales y una sólida formación académica, moral y emocional para que puedan alcanzar el éxito personal y profesional dentro de una sociedad moderna y cambiante. \r\n    \t</p>\r\n    \t<p>Los objetivos de nuestra enseñanza son:</p>\r\n\t\t<ul>\r\n\t\t\t<li>Lograr una formación del conocimiento acorde con los ritmos de aprendizaje.</li>\r\n\t\t\t<li>Desarrollar las capacidades de análisis y pensamiento crítico.</li>\r\n\t\t\t<li>Motivar la curiosidad científica.</li>\r\n\t\t\t<li>Desarrollar las habilidades de comunicación.</li>\r\n\t\t</ul>\r\n\t\t\r\n\t\t<p>Asimismo brindamos una formación personal:</p>\r\n\t\t<ul>\r\n\t\t\t<li>\r\n\t\t\t\tCentrada en el desarrollo de las potencialidades particulares de cada alumno, en sus relaciones consigo mismo (autoconocimiento) y con los otros: La familia y la sociedad.\r\n\t\t\t</li>\r\n\t\t\t<li>\r\n\t\t\t\tCentrada en el afianzamiento de un comportamiento ético e íntegro.\r\n\t\t\t</li>\r\n\t\t\t<li>\r\n\t\t\t\tQue ofrece al estudiante un conjunto de espacios de reflexión sobre su estudio,herramientas para el mejoramiento del rendimiento académico, así como conocimiento personal.\r\n\t\t\t</li>\r\n\t\t\t<li>\r\n\t\t\t\tLa metodología está basada en la pedagogía del afecto; activa y personalizada, con resultados visibles, todo ello teniendo en cuenta los más estrictos controles de calidad, ejecutado por personal altamente capacitado.\r\n\t\t\t</li>\r\n\t\t\t<li>\r\n\t\t\t\tProporcionamos a todos nuestros alumnos una gran variedad de oportunidades para el desarrrollo de nuevas aptitudes: Potenciando el talento y desarrollando el intelecto sin dejar de lado la práctica de valores para una sólida formación.\r\n\t\t\t</li>\r\n\t\t\t<li>\r\n\t\t\t\tLa propuesta educativa  2016 cuenta con una gran variedad de proyectos innovadores encaminados a lograr el desarrollo integral de nuestros alumnos:\r\n\t\t\t</li>\r\n\t\t</ul>\r\n    </div>    \r\n  </div>\r\n</div>\t"

/***/ }),

/***/ "../../../../../src/app/vistas/misionvision.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card border-light mb-3\">\r\n  <div class=\"card-body\">\r\n    <h5 class=\"card-title card-header subtitulo\"><strong class=\"plomo\">Misión</strong></h5>\r\n    <p class=\"card-text container textogeneral\" style=\"font-size: 17px\">Somos una Institución Educativa Privada denominada “Santa María Reyna del Sur”, que brindará una educación científico humanista en los Niveles Inicial, Primaria y Secundaria EBR, que ofrece una educación integral a nuestros estudiantes, fomentando una convivencia basada en valores, liderazgo y desarrollando las potencialidades que les permitan integrarse al campo laboral a través de su formación académica y técnica para enfrentarse a los retos que se les presenten en su vida futura, dentro de una sociedad globalizada y desarrollo científico y humanístico, impregnado en costumbres, tradiciones e idioma ingles contando para ello con el compromiso de toda la comunidad educativa.</p>\r\n  </div>\r\n</div>\t\r\n\r\n<div class=\"card border-light mb-3\">\r\n  <div class=\"card-body\">\r\n    <h5 class=\"card-title card-header subtitulo\" ><strong class=\"plomo\">Visión</strong></h5>\r\n    <p class=\"card-text container textogeneral\" style=\"font-size: 17px\">\r\n    \tSer reconocida como una institución educativa que oferta y desarrolla  una educación integral y de calidad acorde con los últimos avances de la ciencia y tecnología, elevando el nivel de aprendizaje de nuestros estudiantes , empleando métodos activo – participativos, fomentando la generación y aplicación de proyectos de innovación adecuados a la realidad y necesidad de la institución educativa y comunidad,  fortaleciendo las relaciones entre  escuela y  comunidad, logrando formar ciudadanos que se integren a la productividad , con competitividad  de un mundo globalizado. Centrando el trabajo educativo en el aprendizaje significativo, el desarrollo intelectual - motor y socio afectivo.\r\n\t\t  Nuestro trabajo pedagógico y académico en la Institución educativa Privada “Santa María Reyna del Sur” tendrá como eje principal el amor que irradiaremos todos los días como maestros y maestras cumpliendo nuestra labor docente con los estudiantes, porque el trabajo será asumido con mucho compromiso, con mucho amor y vocación de servir a los demás, toda vez que sabemos que con amor se lograra el aprendizaje de ellos \r\n\t\t  El amor a la virgen María  es la fuerza centrípeta del universo. El amor a María  es también poder cohesivo que mantiene al universo unido; y todo lo que es, ha sido o alguna vez será creado por el supremo hacedor de las cosas en el universo.\r\n    </p>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row container\">\r\n\r\n  <div class=\"col\">\r\n\r\n    <img src=\"../assets/img/salon1.jpg\" class=\"rounded-circle\" alt=\"Cinque Terre\" width=\"304\" height=\"236\"> \r\n\r\n  </div>\r\n\r\n  <div class=\"col\">\r\n    <img src=\"../assets/img/salon2.jpg\" class=\"rounded-circle\" alt=\"Cinque Terre\" width=\"304\" height=\"236\"> \r\n  </div>\r\n\r\n</div>\r\n\r\n<div class=\"card border-light mb-3\">\r\n  <div class=\"card-body\">\r\n    <h5 class=\"card-title card-header subtitulo\" ><strong class=\"plomo\">Sobre nuestra insignia</strong></h5>\r\n    <p class=\"card-text container textogeneral\" style=\"font-size: 17px\">\r\n      Las nuevas ideas que estamos sacando a la luz, recreando y co-creando, poniendo en nuevas palabras que incluyen el oculto y evidente conocimiento de la humanidad y del Universo. Estas ideas ya han sido creadas en algún espacio y tiempo, en la evolución de la humanidad y ahora se han convertido en Seres con corazones puros, energía pura.              \r\n    </p>\r\n    <div class=\"card-text container textogeneral\" style=\"font-size: 17px\">\r\n      <p>La Flor de Lis es la portadora de un mensaje:</p>    \r\n        <ul>\r\n          <li>La promesa de que algo va a cambiar y que tiene la habilidad de expresarse a sí misma a la Humanidad.</li>\r\n          <li>Que transmite las buenas noticias por venir y que es un vehículo hacia la LUZ.</li>\r\n          <li>Que es la nueva alianza entre el Cielo y la Tierra, conectando diferentes dimensiones.</li>\r\n        </ul>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row justify-content-center\">\r\n  <div class=\"col-6\">\r\n    <img src=\"../assets/img/sobre_flor_lis.jpg\" class=\"img-thumbnail\" alt=\"Cinque Terre\">\r\n  </div>\r\n  \r\n</div>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/vistas/niveles.html":
/***/ (function(module, exports) {

module.exports = "<!--============================\r\n=            HEADER            =\r\n=============================-->\r\n\r\n<app-header></app-header>\r\n\r\n<!--====  End of HEADER  ====-->\r\n\r\n\r\n<!--=====================================\r\n=            FRASES Y NOTICIAS          =\r\n======================================-->\r\n\r\n<section class=\"container\" style=\"margin-top: 10px;\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-sm-12 col-md-8 col-lg-8 velozEntradaI\">\r\n\t\t\t<app-inicialprimaria></app-inicialprimaria>\r\n\t\t</div>\r\n\t\t<div class=\"col-sm-12 col-md-4 col-lg-4 velozEntradaD\">\r\n\t\t\t<app-panelnoticias></app-panelnoticias>\r\n\t\t</div>\r\n\t</div>\r\n</section>\r\n\r\n<!--====  End of FRASES NOTICIAS  ====-->\r\n\r\n\r\n<!--============================\r\n=            FOOTER            =\r\n=============================-->\r\n\r\n<app-footer></app-footer>\r\n\r\n<!--====  End of FOOTER  ====-->\r\n"

/***/ }),

/***/ "../../../../../src/app/vistas/nosotros.html":
/***/ (function(module, exports) {

module.exports = "<!--============================\r\n=            HEADER            =\r\n=============================-->\r\n\r\n<app-header></app-header>\r\n\r\n<!--====  End of HEADER  ====-->\r\n\r\n\r\n<!--=========================================\r\n=            NOSOTROS Y NOTICIAS            =\r\n==========================================-->\r\n\r\n<section class=\"container\" style=\"margin-top: 10px;\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-sm-12 col-md-8 col-lg-8 velozEntradaI\">\r\n\t\t\t<app-misionvision></app-misionvision>\r\n\t\t</div>\r\n\t\t<div class=\"col-sm-12 col-md-4 col-lg-4 velozEntradaD\">\r\n\t\t\t<app-panelnoticias></app-panelnoticias>\r\n\t\t</div>\r\n\t</div>\r\n</section>\r\n\r\n<!--====  End of FRASES NOTICIAS  ====-->\r\n\r\n\r\n<!--============================\r\n=            FOOTER            =\r\n=============================-->\r\n\r\n<app-footer></app-footer>\r\n\r\n<!--====  End of FOOTER  ====-->\r\n"

/***/ }),

/***/ "../../../../../src/app/vistas/panelnoticias.component.html":
/***/ (function(module, exports) {

module.exports = "<!--=====================================\r\n=           AREA DE NOTICIAS            =\r\n======================================-->\r\n\r\n<!-- <div class=\"col-sm-12 col-md-4 col-lg-4\">\r\n-->  <div style=\"background-color: #FF9800\" class=\"velozEntradaD\">\r\n    <strong class=\"col-12 subtitulo\">NOTICIAS</strong>\r\n    <div class=\"col-12 cambiacolor textogeneral\">\r\n      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas doloremque deserunt qui quia iste, nemo laboriosam? Non mollitia, provident aut neque dolore dolores facere libero, dolorum, illum accusantium explicabo amet.</p>\r\n    </div>\r\n\r\n    <div class=\"col-12 cambiacolor textogeneral\">\r\n      <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque voluptate ipsum molestias quibusdam, commodi! Molestiae praesentium dolores corrupti, deserunt, facilis culpa nobis, quia voluptates temporibus sit harum, pariatur sequi accusantium!</p>\r\n    </div>\r\n\r\n    <div class=\"col-12 cambiacolor textogeneral\">\r\n      <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi laborum iste in porro natus omnis esse! Saepe eius explicabo id incidunt, nesciunt sint libero amet tempore nostrum adipisci! Mollitia, porro.</p>\r\n    </div>\r\n\r\n    <div class=\"col-12 cambiacolor textogeneral\">\r\n      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, ipsa, delectus. Ducimus vel excepturi sequi repudiandae nihil. Velit debitis, incidunt ullam voluptatem cumque omnis. Cupiditate corporis recusandae alias accusamus veritatis!</p>\r\n    </div>\r\n  </div>\r\n<!-- </div>\r\n --><!--====  End of AREA DE NOTICIAS  ====-->\r\n"

/***/ }),

/***/ "../../../../../src/assets/css/estilos.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*!\n * Start Bootstrap - Half Slider (https://startbootstrap.com/template-overviews/half-slider)\n * Copyright 2013-2017 Start Bootstrap\n * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-half-slider/blob/master/LICENSE)\n */\n\n.carousel-item {\n  height: 65vh;\n  min-height: 300px;\n  background: no-repeat center center scroll;\n  background-size: cover;\n}\n\nnav{\n  background-color: #001C34 !important;\n  -webkit-box-shadow: 0px 5px #a51c30;\n          box-shadow: 0px 5px #a51c30;\n}\n\n.card-text{\n\tfont-family: 'Questrial', sans-serif;\n\tfont-size: 20px;\n}\n\n.menu li {\n   background: #001C34;\n   padding: 3px 8px;\n   display: inline-block;\n   transition: background .25s ease-in-out;\n   -moz-transition: background .25s ease-in-out;\n   -webkit-transition: background .25s ease-in-out;\n   }\n\n.menu li:hover {\n  background: #a51c30;\n}\n\n/*  */\n\n.velozEntradaI{\n    -webkit-animation: 1s veloz 1;\n}\n\n@-webkit-keyframes veloz{\n    0%{\n        opacity: 0;\n        -webkit-transform:  translateX(-500%)\n                            skewX(50deg);\n    }\n\n}\n\n.velozEntradaD{\n    -webkit-animation: 1s velozEntradaD 1;\n\n}\n\n@-webkit-keyframes velozEntradaD{\n    0%{\n        opacity: 0;\n        -webkit-transform:  translateX(500%)\n                            skewX(-50deg);\n    }    \n}\n\n/*.veloz{\n\tanimation: 1s veloz 1;\n\n}\n\n@-webkit-keyframes veloz{\n\t0%{\n\t\topacity: 0;\n\t\t-webkit-transform: translate(-200%) skewX(30deg);\n\t}\n\t60%{\n\t\topacity: 1;\n\t\t-webkit-transform: translate(-20%) skewX(30deg);\n\t}\n\t80%{\n\t\t-webkit-transform: translate(-0%) skewX(15deg);\n\t}\n}*/\n\n.crece{\n\t-webkit-transition-duration: 0.3s;\n\t        transition-duration: 0.3s;\n}\n\n.crece:hover{\n\t-webkit-transform: scale(1.1);\n\t        transform: scale(1.1);\n}\n\n.cambiacolor{\n\t-webkit-transition-duration: 0.5s;\n\t        transition-duration: 0.5s;\n}\n\n.cambiacolor:hover{\n\tbackground-color: #FFC100;\n}\n\n.subtitulo{\n\tfont-family: 'Roboto', sans-serif;\n\tfont-size: 30px;\n}\n\n.textogeneral{\n\tfont-family: 'Questrial', sans-serif;\n}\n\n.cabeza{\n\t-webkit-box-shadow: 0px -5px #293352;\n\t        box-shadow: 0px -5px #293352;\n}\n\n.letraNav{\n\tfont-family: 'Roboto', sans-serif;\n\tfont-size: 20px;\n}\n\n.plomo{\n\tcolor: #607D8B;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
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

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map