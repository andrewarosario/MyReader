webpackJsonp([0],{

/***/ 24:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 24;

/***/ }),

/***/ 27:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 27;

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./src/providers/reddit-service/reddit-service.ts
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RedditService = (function () {
    function RedditService(http) {
        this.http = http;
    }
    RedditService.prototype.carregarConteudo = function (url) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(url)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.feeds = data.data.children;
                _this.feeds.forEach(function (e, i, a) {
                    if (!e.data.thumbnail || e.data.thumbnail.indexOf('b.thumbs.redditmedia.com') === -1) {
                        e.data.thumbnail = 'http://www.redditstatic.com/icon.png';
                    }
                });
                resolve(_this.feeds);
            }, function (err) { return console.log(err); });
        });
    };
    return RedditService;
}());
RedditService = __decorate([
    __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */](),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], RedditService);

//# sourceMappingURL=reddit-service.js.map
// CONCATENATED MODULE: ./src/pages/home/home.ts
/* harmony import */ var home___WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_debounceTime__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_distinctUntilChanged__);
var home___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var home___metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var HomePage = (function () {
    function HomePage(navCtrl, http, loadingCtrl, actionSheetCtrl, redditService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.redditService = redditService;
        this.url = "https://www.reddit.com/new.json";
        this.postsAntigos = "https://www.reddit.com/new.json?after=";
        this.postsNovos = "https://www.reddit.com/new.json?before=";
        this.possuiFiltro = false;
        this.termoBuscar = '';
        this.carregarConteudo();
        this.termoBuscarControle = new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormControl */]();
        this.termoBuscarControle.
            valueChanges.
            debounceTime(1000).
            distinctUntilChanged().
            subscribe(function (busca) {
            if (busca !== '' && busca) {
                _this.buscar();
            }
        });
    }
    HomePage.prototype.buscar = function () {
        var _this = this;
        this.possuiFiltro = false;
        this.feeds = this.feedSemFiltro.filter(function (item) {
            return item.data.title.toLowerCase().indexOf(_this.termoBuscar.toLowerCase()) > -1;
        });
    };
    HomePage.prototype.carregarConteudo = function () {
        var _this = this;
        var carregando = this.loadingCtrl.create({
            content: "Carregando Conteúdo..."
        });
        this.redditService.carregarConteudo(this.url)
            .then(function (data) {
            _this.feeds = data;
            _this.feedSemFiltro = _this.feeds;
            carregando.dismiss();
        });
    };
    HomePage.prototype.selecionarItem = function (url) {
        var browser = new __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__["a" /* InAppBrowser */]();
        browser.create(url, '_system');
    };
    HomePage.prototype.doInfinito = function (scrollInfinito) {
        var _this = this;
        var paramsUrl = (this.feeds.length > 0) ? this.feeds[this.feeds.length - 1].data.name : "";
        this.http.get(this.postsAntigos + paramsUrl)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.feeds = _this.feeds.concat(data.data.children);
            _this.feeds.forEach(function (e, i, a) {
                if (!e.data.thumbnail || e.data.thumbnail.indexOf('b.thumbs.redditmedia.com') === -1) {
                    e.data.thumbnail = 'http://www.redditstatic.com/icon.png';
                }
            });
            _this.feedSemFiltro = _this.feeds;
            _this.possuiFiltro = false;
            scrollInfinito.complete();
        });
    };
    HomePage.prototype.doRefresh = function (refresher) {
        var _this = this;
        var paramsUrl = this.feeds[0].data.name;
        this.http.get(this.postsNovos + paramsUrl).map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.feeds = data.data.children.concat(_this.feeds);
            _this.feeds.forEach(function (e, i, a) {
                if (!e.data.thumbnail || e.data.thumbnail.indexOf('b.thumbs.redditmedia.com') === -1) {
                    e.data.thumbnail = 'http://www.redditstatic.com/icon.png';
                }
            });
            _this.feedSemFiltro = _this.feeds;
            _this.possuiFiltro = false;
            refresher.complete();
        });
    };
    HomePage.prototype.mostrarFiltros = function () {
        var _this = this;
        this.content.scrollToTop();
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Opções de Filtro:',
            buttons: [
                {
                    text: 'Música',
                    handler: function () {
                        _this.feeds = _this.feedSemFiltro.filter(function (item) { return item.data.subreddit.toLowerCase() === "music"; });
                        _this.possuiFiltro = true;
                    }
                },
                {
                    text: 'Filmes',
                    handler: function () {
                        _this.feeds = _this.feedSemFiltro.filter(function (item) { return item.data.subreddit.toLowerCase() === "movies"; });
                        _this.possuiFiltro = true;
                    }
                },
                {
                    text: 'Games',
                    handler: function () {
                        _this.feeds = _this.feedSemFiltro.filter(function (item) { return item.data.subreddit.toLowerCase() === "gaming"; });
                        _this.possuiFiltro = true;
                    }
                },
                {
                    text: 'Livros',
                    handler: function () {
                        _this.feeds = _this.feedSemFiltro.filter(function (item) { return item.data.subreddit.toLowerCase() === "books"; });
                        _this.possuiFiltro = true;
                    }
                }, {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function () {
                        _this.feeds = _this.feedSemFiltro;
                        _this.possuiFiltro = false;
                    }
                },
            ]
        });
        actionSheet.present();
    };
    return HomePage;
}());
home___decorate([
    home___WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */](__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */]),
    home___metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */]) === "function" && _a || Object)
], HomePage.prototype, "content", void 0);
HomePage = home___decorate([
    home___WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */]({
        selector: 'page-home',template:/*ion-inline-start:"C:\Users\AndrewRosario\Documents\Projetos\MyReader\src\pages\home\home.html"*/'<ion-header>\n    <ion-navbar color="primary">\n      <ion-title>\n          <ion-searchbar\n              [(ngModel)]="termoBuscar"\n              [formControl]="termoBuscarControle"\n              [showCancelButton]=true\n              (ionInput)="buscar()"\n              placeholder="Buscar conteúdo">\n          </ion-searchbar>\n      </ion-title>\n\n      <ion-buttons end>\n          <button ion-button icon-only (click)="mostrarFiltros()">\n              <ion-icon name="funnel" [style.color]="possuiFiltro ? \'orange\' : \'inherit\'"></ion-icon>\n          </button>\n      </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n    <ion-refresher (ionRefresh)="doRefresh($event)" [pullMin]=90>\n        <ion-refresher-content\n            pullingIcon="arrow-dropDown"\n            pullingText="Deslize para atualizar"\n            refreshingSpinner="circles"\n            refreshingText="Atualizando...">\n        </ion-refresher-content>\n    </ion-refresher>\n\n    <ion-list>\n        <button ion-item *ngFor="let feed of feeds" (click)="selecionarItem(feed.data.url)">\n            <ion-thumbnail item-left>\n                <img [src]="feed.data.thumbnail">\n            </ion-thumbnail>\n\n            <h2>{{feed.data.title}}</h2>\n\n            <div [ngSwitch]=feed.data.subreddit.toLowerCase()>\n                <p *ngSwitchCase="\'askreddit\'"><ion-icon name="help-circle"></ion-icon> {{feed.data.domain}}</p>\n                <p *ngSwitchCase="\'gaming\'"><ion-icon name="logo-playstation"></ion-icon> {{feed.data.domain}}</p>\n                <p *ngSwitchCase="\'music\'"><ion-icon name="musical-notes"></ion-icon> {{feed.data.domain}}</p>\n                <p *ngSwitchCase="\'movies\'"><ion-icon name="film"></ion-icon> {{feed.data.domain}}</p>\n                <p *ngSwitchCase="\'pics\'"><ion-icon name="image"></ion-icon> {{feed.data.domain}}</p>\n                <p *ngSwitchDefault>{{feed.data.domain}}</p>\n            </div>\n            \n        </button>\n    </ion-list>\n\n    <ion-infinite-scroll (ionInfinite)="doInfinito($event)">\n        <ion-infinite-scroll-content loadingText="Carregando mais postagens...">\n        </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n</ion-content>\n'/*ion-inline-end:"C:\Users\AndrewRosario\Documents\Projetos\MyReader\src\pages\home\home.html"*/
    }),
    home___metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]) === "function" && _e || Object, typeof (_f = typeof RedditService !== "undefined" && RedditService) === "function" && _f || Object])
], HomePage);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=home.js.map
// CONCATENATED MODULE: ./src/app/app.component.ts
/* harmony import */ var app_component___WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var app_component___WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(28);
var app_component___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var app_component___metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var app_component_MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = HomePage;
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            statusBar.backgroundColorByHexString('#ffffff');
        });
    }
    return MyApp;
}());
app_component_MyApp = app_component___decorate([
    app_component___WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */]({template:/*ion-inline-start:"C:\Users\AndrewRosario\Documents\Projetos\MyReader\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\AndrewRosario\Documents\Projetos\MyReader\src\app\app.html"*/
    }),
    app_component___metadata("design:paramtypes", [typeof (app_component__a = typeof app_component___WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */] !== "undefined" && app_component___WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */]) === "function" && app_component__a || Object, typeof (app_component__b = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && app_component__b || Object, typeof (app_component__c = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && app_component__c || Object])
], app_component_MyApp);

var app_component__a, app_component__b, app_component__c;
//# sourceMappingURL=app.component.js.map
// CONCATENATED MODULE: ./src/app/app.module.ts
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(61);
/* harmony import */ var app_module___WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(15);
var app_module___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = app_module___decorate([
    __WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */]({
        declarations: [
            app_component_MyApp,
            HomePage
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(app_component_MyApp)
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
        entryComponents: [
            app_component_MyApp,
            HomePage
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            app_module___WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
            RedditService
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map
// CONCATENATED MODULE: ./src/app/main.ts
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(32);


__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */]().bootstrapModule(AppModule);
//# sourceMappingURL=main.js.map

/***/ })

},[31]);
//# sourceMappingURL=main.js.map