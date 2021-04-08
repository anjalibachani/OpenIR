(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data.service */ "./src/app/data.service.ts");
/* harmony import */ var _tweet_expanded_tweet_expanded_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tweet-expanded/tweet-expanded.component */ "./src/app/tweet-expanded/tweet-expanded.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _news_article_news_article_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./news-article/news-article.component */ "./src/app/news-article/news-article.component.ts");
/* harmony import */ var _tweet_tweet_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tweet/tweet.component */ "./src/app/tweet/tweet.component.ts");







function AppComponent_app_news_article_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-news-article", 20);
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("newsArticle", item_r3);
} }
function AppComponent_app_tweet_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-tweet", 21);
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tweet", item_r5);
} }
const _c0 = function (a0, a1) { return { "loader": a0, "not_loader": a1 }; };
class AppComponent {
    constructor(dataservice, changeDetection) {
        this.dataservice = dataservice;
        this.changeDetection = changeDetection;
        this.title = 'openIR';
        this.tweets = null;
        this.newsArticles = [];
        this.loader_show = false;
        this.start = 0;
        this.query = "";
        this.rows = 20;
        this.dataservice.getNews("covid").subscribe((news) => {
            this.newsArticles = news["articles"];
        });
    }
    getTweets(search, start, rows, is_new = false) {
        this.loader_show = true;
        this.query = search;
        this.dataservice.getTweets(search, start, rows).subscribe((tweets) => {
            console.log("tweets", tweets["response"]["docs"]);
            if (this.tweets != null && is_new == false) {
                console.log(this.tweets);
                console.log(tweets["response"]["docs"]);
                this.tweets = this.tweets.concat(tweets["response"]["docs"]);
            }
            else {
                this.tweets = tweets["response"]["docs"];
            }
            console.log("Changing", this.tweets);
            this.start = this.tweets.length + 1;
            this.rows = 1;
            if (this.start + this.rows >= tweets["response"]["numFound"]) {
                this.rows = 0;
            }
        });
        this.loader_show = false;
        this.dataservice.getNews(search).subscribe((news) => {
            this.newsArticles = news["articles"];
        });
        this.changeDetection.detectChanges();
    }
    onScroll(event) {
        // visible height + pixel scrolled >= total height 
        this.getTweets(this.query, this.start, this.rows, false);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], hostBindings: function AppComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function AppComponent_scroll_HostBindingHandler($event) { return ctx.onScroll($event); });
    } }, decls: 32, vars: 6, consts: [[1, "main-container", "h100", "w100"], [1, "body", "h100", "w100"], [1, "left_body", "h100", "m0", "inline"], [1, "title"], [1, "visualizations"], [1, "left_title"], [1, "right_body", "fr", "h100", "inline"], [1, "news_title"], [3, "newsArticle", 4, "ngFor", "ngForOf"], [1, "center_body", "fr", "h100", "inline", 3, "scroll"], [1, "search_bar"], ["placeholder", "Type your search query here", 1, "search", 3, "keyup.enter"], ["search", ""], [1, "filters_box"], [1, "sort", "inline"], [1, "filter", "inline"], [3, "tweet", 4, "ngFor", "ngForOf"], [3, "ngClass"], ["src", "../assets/loading.gif", 1, "inline", 2, "width", "50px"], [1, "inline", 2, "vertical-align", "middle", "padding-bottom", "21%"], [3, "newsArticle"], [3, "tweet"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " OpenIR ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Analytics and Visualizations");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Advanced Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-tweet-expanded");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Related Feed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AppComponent_app_news_article_13_Template, 1, 1, "app-news-article", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function AppComponent_Template_div_scroll_14_listener($event) { return ctx.onScroll($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function AppComponent_Template_input_keyup_enter_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17); return ctx.getTweets(_r1.value, 0, 20, true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Sort By: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Influence");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Relevance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, AppComponent_app_tweet_27_Template, 1, 1, "app-tweet", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Fetching more tweets");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.newsArticles);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tweets);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](3, _c0, ctx.loader_show === true, ctx.loader_show === false));
    } }, directives: [_tweet_expanded_tweet_expanded_component__WEBPACK_IMPORTED_MODULE_2__["TweetExpandedComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _news_article_news_article_component__WEBPACK_IMPORTED_MODULE_4__["NewsArticleComponent"], _tweet_tweet_component__WEBPACK_IMPORTED_MODULE_5__["TweetComponent"]], styles: [".m0[_ngcontent-%COMP%]{\r\n    margin:0 !important;\r\n}\r\n\r\n.p0[_ngcontent-%COMP%]{\r\n    padding:0 !important;\r\n}\r\n\r\n.w100[_ngcontent-%COMP%]{\r\n  width: 100% !important;  \r\n}\r\n\r\n.h100[_ngcontent-%COMP%]{\r\n    height:100% !important;\r\n}\r\n\r\n.left_body[_ngcontent-%COMP%]{\r\n    width: 20%;\r\n    height: 100%;\r\n    background-color: #6f6e6e;\r\n}\r\n\r\n.right_body[_ngcontent-%COMP%]{\r\n    width: 30%;\r\n    height: 100%;\r\n    background-color: #6f6e6e;\r\n}\r\n\r\n.search[_ngcontent-%COMP%]{\r\n    border-radius: 21px;\r\n    box-sizing: border-box;\r\n    height: 27px;\r\n    outline: 0;\r\n    border: 0;\r\n    background-color: white;\r\n    font-family: 'Open Sans';\r\n    font-size: 1.5em;\r\n    padding: 3.9%;\r\n    border: 2px solid #eaeaea;\r\n    color: black;\r\n    width: 100%;\r\n    box-shadow: 0px 2px 4px #e2e2e2;\r\n}\r\n\r\n.center_body[_ngcontent-%COMP%]{\r\n    width: 50%;\r\n    height: 100%;\r\n    overflow-y: scroll;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n    width: 3px;  \r\n    background: transparent;  \r\n}\r\n\r\n\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n    background: black;\r\n}\r\n\r\n.title[_ngcontent-%COMP%]{\r\n    font-family: 'Roboto';\r\n    color: white;\r\n    padding: 4.3%;\r\n    font-weight: 800;\r\n    font-size: 3em;\r\n    padding-left: 25%;\r\n    border-bottom: 4px solid #e2e2e2;\r\n    margin: 4%;\r\n    box-shadow: 0px 2px 25px #0000005e;\r\n    border: none;\r\n    border-radius: 56px;\r\n    padding: 1%;\r\n    padding-left: 22%;\r\n    padding-top: 2%;\r\n    padding-bottom: 3%;\r\n    margin-bottom: 25%;\r\n}\r\n\r\n.loader[_ngcontent-%COMP%]{\r\n    padding: 10px;\r\n    position: absolute;\r\n    bottom: 0;\r\n    background-color: #f1f2f3;\r\n    left: 41%;\r\n    font-family: Roboto;\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n    font-weight: 700;\r\n    color: #6a6a6a;\r\n    transition: 1s;\r\n    border-radius: 10px;\r\n    border-bottom-left-radius: 0;\r\n    border-bottom-right-radius: 0;\r\n}\r\n\r\n.not_loader[_ngcontent-%COMP%]{\r\n    padding: 10px;\r\n    position: absolute;\r\n    bottom: -100px;\r\n    background-color: #f1f2f3;\r\n    left: 41%;\r\n    font-family: Roboto;\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n    font-weight: 700;\r\n    color: #6a6a6a;\r\n    transition: 1s;\r\n    border-radius: 10px;\r\n    border-bottom-left-radius: 0;\r\n    border-bottom-right-radius: 0;\r\n}\r\n\r\n.right_body[_ngcontent-%COMP%]{\r\n    overflow: scroll;\r\n}\r\n\r\n.search_bar[_ngcontent-%COMP%]{\r\n    margin: 2%;\r\n}\r\n\r\n.visualizations[_ngcontent-%COMP%]{\r\n    font-family: 'ROBOTO';\r\n    color: white;\r\n    font-size: 1.2em;\r\n    font-weight: 800;\r\n    padding: 6%;\r\n    margin-right: 22%;\r\n    margin: 3%;\r\n    text-align: center;\r\n    border: 4px solid white;\r\n    cursor: pointer;\r\n}\r\n\r\n.filters_box[_ngcontent-%COMP%]{\r\n    background-color: white;\r\n    padding: 1%;\r\n    font-family: 'Open sans';\r\n    box-shadow: 0px 2px 4px #e2e2e2;\r\n    border-radius: 48px;\r\n    padding-left: 2%;\r\n    margin-top: 2%;\r\n}\r\n\r\n.sort[_ngcontent-%COMP%]{\r\n    \r\n    padding: 1%;\r\n    border-radius: 20px;\r\n    padding-left: 2%;\r\n    padding-right: 2%;\r\n    color: #504f4f;\r\n    font-weight: 800;\r\n    border: 0px solid #e2e2e2;\r\n}\r\n\r\n.filter[_ngcontent-%COMP%]{\r\n\r\n    \r\n    padding: 1%;\r\n    border-radius: 20px;\r\n    padding-left: 2%;\r\n    padding-right: 2%;\r\n    color: #504f4f;\r\n    font-weight: 800;\r\n    border: 0px solid #e2e2e2;\r\n}\r\n\r\n.visualizations[_ngcontent-%COMP%]:hover{\r\n    background-color: white;\r\n    color: #6f6e6e;\r\n}\r\n\r\n.search_btm[_ngcontent-%COMP%]{\r\n    display: inline-block;\r\n    font-family: 'Roboto';\r\n    font-size: 2em;\r\n    color: #e2e2e2;\r\n    font-weight: 300;\r\n    padding: 3%;\r\n    margin-left: 3%;\r\n}\r\n\r\n.news_title[_ngcontent-%COMP%]{\r\n    font-family: 'Roboto';\r\n    padding: 3%;\r\n    font-size: 1.4em;\r\n    color: white;\r\n    font-weight: 800;\r\n}\r\n\r\n.left_title[_ngcontent-%COMP%]{\r\n    padding: 3%;\r\n    font-family: 'Roboto';\r\n    font-weight: 600;\r\n    color:white;\r\n}\r\n\r\n.inline[_ngcontent-%COMP%]{\r\n    display: inline-block;\r\n}\r\n\r\n.fr[_ngcontent-%COMP%]{\r\n    float:right;\r\n}\r\n\r\n.fl[_ngcontent-%COMP%]{\r\n    float: left;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxvQkFBb0I7QUFDeEI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixZQUFZO0lBQ1oseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osVUFBVTtJQUNWLFNBQVM7SUFDVCx1QkFBdUI7SUFDdkIsd0JBQXdCO0lBQ3hCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixXQUFXO0lBQ1gsK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxVQUFVLEdBQUcsMkJBQTJCO0lBQ3hDLHVCQUF1QixHQUFHLDRDQUE0QztBQUMxRTs7QUFDQSw2Q0FBNkM7O0FBQzdDO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsZ0NBQWdDO0lBQ2hDLFVBQVU7SUFDVixrQ0FBa0M7SUFDbEMsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QseUJBQXlCO0lBQ3pCLFNBQVM7SUFDVCxtQkFBbUI7SUFDbkIsMEJBQWtCO0lBQWxCLHVCQUFrQjtJQUFsQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLDRCQUE0QjtJQUM1Qiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIsU0FBUztJQUNULG1CQUFtQjtJQUNuQiwwQkFBa0I7SUFBbEIsdUJBQWtCO0lBQWxCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsNEJBQTRCO0lBQzVCLDZCQUE2QjtBQUNqQzs7QUFHQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsV0FBVztJQUNYLHdCQUF3QjtJQUN4QiwrQkFBK0I7SUFDL0IsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksK0JBQStCO0lBQy9CLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtBQUM3Qjs7QUFFQTs7SUFFSSwrQkFBK0I7SUFDL0IsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLGNBQWM7SUFDZCxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxlQUFlO0FBQ25COztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm0we1xyXG4gICAgbWFyZ2luOjAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnAwe1xyXG4gICAgcGFkZGluZzowICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi53MTAwe1xyXG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7ICBcclxufVxyXG5cclxuLmgxMDB7XHJcbiAgICBoZWlnaHQ6MTAwJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubGVmdF9ib2R5e1xyXG4gICAgd2lkdGg6IDIwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2ZjZlNmU7XHJcbn1cclxuXHJcbi5yaWdodF9ib2R5e1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2ZjZlNmU7XHJcbn1cclxuXHJcbi5zZWFyY2h7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMXB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGhlaWdodDogMjdweDtcclxuICAgIG91dGxpbmU6IDA7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJztcclxuICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICBwYWRkaW5nOiAzLjklO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI2VhZWFlYTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDJweCA0cHggI2UyZTJlMjtcclxufVxyXG5cclxuLmNlbnRlcl9ib2R5e1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxufVxyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICB3aWR0aDogM3B4OyAgLyogUmVtb3ZlIHNjcm9sbGJhciBzcGFjZSAqL1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7ICAvKiBPcHRpb25hbDoganVzdCBtYWtlIHNjcm9sbGJhciBpbnZpc2libGUgKi9cclxufVxyXG4vKiBPcHRpb25hbDogc2hvdyBwb3NpdGlvbiBpbmRpY2F0b3IgaW4gcmVkICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgYmFja2dyb3VuZDogYmxhY2s7XHJcbn1cclxuXHJcbi50aXRsZXtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDQuMyU7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgZm9udC1zaXplOiAzZW07XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDI1JTtcclxuICAgIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCAjZTJlMmUyO1xyXG4gICAgbWFyZ2luOiA0JTtcclxuICAgIGJveC1zaGFkb3c6IDBweCAycHggMjVweCAjMDAwMDAwNWU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1NnB4O1xyXG4gICAgcGFkZGluZzogMSU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIyJTtcclxuICAgIHBhZGRpbmctdG9wOiAyJTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAzJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDI1JTtcclxufVxyXG5cclxuLmxvYWRlcntcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMmYzO1xyXG4gICAgbGVmdDogNDElO1xyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBjb2xvcjogIzZhNmE2YTtcclxuICAgIHRyYW5zaXRpb246IDFzO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcclxufVxyXG5cclxuLm5vdF9sb2FkZXJ7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAtMTAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMmYzO1xyXG4gICAgbGVmdDogNDElO1xyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBjb2xvcjogIzZhNmE2YTtcclxuICAgIHRyYW5zaXRpb246IDFzO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcclxufVxyXG5cclxuXHJcbi5yaWdodF9ib2R5e1xyXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcclxufVxyXG5cclxuLnNlYXJjaF9iYXJ7XHJcbiAgICBtYXJnaW46IDIlO1xyXG59XHJcblxyXG4udmlzdWFsaXphdGlvbnN7XHJcbiAgICBmb250LWZhbWlseTogJ1JPQk9UTyc7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIHBhZGRpbmc6IDYlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMiU7XHJcbiAgICBtYXJnaW46IDMlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyOiA0cHggc29saWQgd2hpdGU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5maWx0ZXJzX2JveHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMSU7XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gc2Fucyc7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDRweCAjZTJlMmUyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNDhweDtcclxuICAgIHBhZGRpbmctbGVmdDogMiU7XHJcbiAgICBtYXJnaW4tdG9wOiAyJTtcclxufVxyXG5cclxuLnNvcnR7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3OyAqL1xyXG4gICAgcGFkZGluZzogMSU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyJTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIlO1xyXG4gICAgY29sb3I6ICM1MDRmNGY7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgYm9yZGVyOiAwcHggc29saWQgI2UyZTJlMjtcclxufVxyXG5cclxuLmZpbHRlcntcclxuXHJcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3OyAqL1xyXG4gICAgcGFkZGluZzogMSU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyJTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIlO1xyXG4gICAgY29sb3I6ICM1MDRmNGY7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgYm9yZGVyOiAwcHggc29saWQgI2UyZTJlMjtcclxufVxyXG5cclxuLnZpc3VhbGl6YXRpb25zOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBjb2xvcjogIzZmNmU2ZTtcclxufVxyXG5cclxuLnNlYXJjaF9idG17XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XHJcbiAgICBmb250LXNpemU6IDJlbTtcclxuICAgIGNvbG9yOiAjZTJlMmUyO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIHBhZGRpbmc6IDMlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMlO1xyXG59XHJcblxyXG4ubmV3c190aXRsZXtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcclxuICAgIHBhZGRpbmc6IDMlO1xyXG4gICAgZm9udC1zaXplOiAxLjRlbTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbn1cclxuXHJcbi5sZWZ0X3RpdGxle1xyXG4gICAgcGFkZGluZzogMyU7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbn1cclxuXHJcbi5pbmxpbmV7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5mcntcclxuICAgIGZsb2F0OnJpZ2h0O1xyXG59XHJcblxyXG4uZmx7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { onScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['scroll', ['$event']]
        }] }); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _tweet_tweet_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tweet/tweet.component */ "./src/app/tweet/tweet.component.ts");
/* harmony import */ var _tweet_expanded_tweet_expanded_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tweet-expanded/tweet-expanded.component */ "./src/app/tweet-expanded/tweet-expanded.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _news_article_news_article_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./news-article/news-article.component */ "./src/app/news-article/news-article.component.ts");









class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _tweet_tweet_component__WEBPACK_IMPORTED_MODULE_4__["TweetComponent"],
        _tweet_expanded_tweet_expanded_component__WEBPACK_IMPORTED_MODULE_5__["TweetExpandedComponent"],
        _news_article_news_article_component__WEBPACK_IMPORTED_MODULE_7__["NewsArticleComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _tweet_tweet_component__WEBPACK_IMPORTED_MODULE_4__["TweetComponent"],
                    _tweet_expanded_tweet_expanded_component__WEBPACK_IMPORTED_MODULE_5__["TweetExpandedComponent"],
                    _news_article_news_article_component__WEBPACK_IMPORTED_MODULE_7__["NewsArticleComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/data.service.ts":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");





class DataService {
    constructor(http) {
        this.http = http;
    }
    handleError(operation = 'operation', result) {
        return (error) => {
            console.error(error); // log to console instead
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result);
        };
    }
    getNews(search) {
        return this.http.get("http://newsapi.org/v2/everything?q=" + search + "&from=2020-11-02&sortBy=publishedAt&apiKey=0b73d59bb8114d7991582ea5a3a81c13").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('getProjects', [])));
    }
    getTweets(search, start, rows) {
        return this.http.get("http://ec2-3-227-30-89.compute-1.amazonaws.com:8983/solr/tweets/select?q=tweet_text%3A" + search + "&rows=" + rows.toString() + "&start=" + start).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('getProjects', [])));
    }
}
DataService.ɵfac = function DataService_Factory(t) { return new (t || DataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DataService, factory: DataService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/news-article/news-article.component.ts":
/*!********************************************************!*\
  !*** ./src/app/news-article/news-article.component.ts ***!
  \********************************************************/
/*! exports provided: NewsArticleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsArticleComponent", function() { return NewsArticleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class NewsArticleComponent {
    constructor() { }
    ngOnInit() {
    }
}
NewsArticleComponent.ɵfac = function NewsArticleComponent_Factory(t) { return new (t || NewsArticleComponent)(); };
NewsArticleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NewsArticleComponent, selectors: [["app-news-article"]], inputs: { newsArticle: "newsArticle" }, decls: 10, vars: 5, consts: [[1, "main_container"], [1, "image_container", "inline"], [1, "image", 3, "src"], [1, "title", "inline"], [1, "desc"], [1, "url"], [1, "articleurl", 3, "href"]], template: function NewsArticleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.newsArticle.urlToImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.newsArticle.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.newsArticle.description, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.newsArticle.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.newsArticle.url);
    } }, styles: [".image[_ngcontent-%COMP%]{\r\n    width: 150px;\r\n    object-fit: cover;\r\n    float: right;\r\n    border-radius: 6px;\r\n}\r\n\r\n.main_container[_ngcontent-%COMP%]{\r\n    font-family: Roboto;\r\n    color: white;\r\n    padding: 2%;\r\n    border: 3px solid #5d5959;\r\n    border-radius: 10px;\r\n    margin: 2%;\r\n    background-color: #404040;\r\n}\r\n\r\n.articleurl[_ngcontent-%COMP%]{\r\n    color: #ffcccc;\r\n}\r\n\r\n.desc[_ngcontent-%COMP%]{\r\n    margin-top: 3%;\r\n    margin-bottom: 1%;\r\n}\r\n\r\n.inline[_ngcontent-%COMP%]{\r\n    display: inline;\r\n    vertical-align: top;\r\n}\r\n\r\n.title[_ngcontent-%COMP%]{\r\n    font-weight: 800;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3cy1hcnRpY2xlL25ld3MtYXJ0aWNsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvbmV3cy1hcnRpY2xlL25ld3MtYXJ0aWNsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltYWdle1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbn1cclxuXHJcbi5tYWluX2NvbnRhaW5lcntcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAyJTtcclxuICAgIGJvcmRlcjogM3B4IHNvbGlkICM1ZDU5NTk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgbWFyZ2luOiAyJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0MDQwNDA7XHJcbn1cclxuXHJcbi5hcnRpY2xldXJse1xyXG4gICAgY29sb3I6ICNmZmNjY2M7XHJcbn1cclxuXHJcbi5kZXNje1xyXG4gICAgbWFyZ2luLXRvcDogMyU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxJTtcclxufVxyXG5cclxuLmlubGluZXtcclxuICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbn1cclxuXHJcbi50aXRsZXtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewsArticleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-news-article',
                templateUrl: './news-article.component.html',
                styleUrls: ['./news-article.component.css']
            }]
    }], function () { return []; }, { newsArticle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/tweet-expanded/tweet-expanded.component.ts":
/*!************************************************************!*\
  !*** ./src/app/tweet-expanded/tweet-expanded.component.ts ***!
  \************************************************************/
/*! exports provided: TweetExpandedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TweetExpandedComponent", function() { return TweetExpandedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class TweetExpandedComponent {
    constructor() { }
    ngOnInit() {
    }
}
TweetExpandedComponent.ɵfac = function TweetExpandedComponent_Factory(t) { return new (t || TweetExpandedComponent)(); };
TweetExpandedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TweetExpandedComponent, selectors: [["app-tweet-expanded"]], decls: 11, vars: 0, consts: [[1, "main_container"], [1, "profile_icon", "inline"], ["src", "https://pbs.twimg.com/profile_images/1014731044900167680/lbNmVYlG_400x400.jpg", 1, "icon"], [1, "name", "inline"], [1, "username"], [1, "tweet_text"], [1, "date"]], template: function TweetExpandedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Bhavin Jawade ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " @bhavinjawade ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Now this is something weird, funny and interesting. My friend recorded a bike ride on strava today and the max speed strava recorded was 160 miles per hour. To bring it to context, top speed of tesla model 3 is around 130 miles per hour. @StravaEng @Strava @StravaSupport ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " 12th November 2020 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".icon[_ngcontent-%COMP%]{\r\n    width: 50px;\r\n    border-radius: 45px;\r\n    display: inline-block;\r\n}\r\n\r\n.inline[_ngcontent-%COMP%]{\r\n    display: inline;\r\n}\r\n\r\n.name[_ngcontent-%COMP%]{\r\n    display: inline-block;\r\n    vertical-align: top;\r\n    margin-left: 3%;\r\n    margin-top: 0.5%;\r\n    font-family: 'OPEN SANS';\r\n}\r\n\r\n.username[_ngcontent-%COMP%]{\r\n    padding: 3%;\r\n    background-color: white;\r\n    border: 3px solid #e2e2e2;\r\n    border-radius: 45px;\r\n    width: 100%;\r\n    padding-left: 7%;\r\n    padding-right: 7%;\r\n}\r\n\r\n.main_container[_ngcontent-%COMP%]{\r\n    font-family: 'Open Sans';\r\n    padding: 3%;\r\n    background-color: white;\r\n    border: 4px solid #e2e2e2;\r\n    border-top: none;\r\n    cursor: pointer;\r\n    margin: 2%;\r\n    border-radius: 11px;\r\n    border-top: 4px solid #e2e2e2;\r\n}\r\n\r\n.main_container[_ngcontent-%COMP%]:hover{\r\n    box-shadow: 0px 0px 20px 0px #7e7e7e;\r\n    border: 4px solid #867c7c73;\r\n}\r\n\r\n.tweet_text[_ngcontent-%COMP%]{\r\n    text-align: justify;\r\n    margin-top: 2%\r\n}\r\n\r\n.date[_ngcontent-%COMP%]{\r\n    margin-top: 2%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHdlZXQtZXhwYW5kZWQvdHdlZXQtZXhwYW5kZWQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsV0FBVztJQUNYLHVCQUF1QjtJQUN2Qix5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQywyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkI7QUFDSjs7QUFFQTtJQUNJLGNBQWM7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC90d2VldC1leHBhbmRlZC90d2VldC1leHBhbmRlZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmljb257XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDQ1cHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5pbmxpbmV7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbn1cclxuXHJcbi5uYW1le1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgIG1hcmdpbi1sZWZ0OiAzJTtcclxuICAgIG1hcmdpbi10b3A6IDAuNSU7XHJcbiAgICBmb250LWZhbWlseTogJ09QRU4gU0FOUyc7XHJcbn1cclxuXHJcbi51c2VybmFtZXtcclxuICAgIHBhZGRpbmc6IDMlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjZTJlMmUyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNDVweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiA3JTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDclO1xyXG59XHJcblxyXG4ubWFpbl9jb250YWluZXJ7XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2Fucyc7XHJcbiAgICBwYWRkaW5nOiAzJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyOiA0cHggc29saWQgI2UyZTJlMjtcclxuICAgIGJvcmRlci10b3A6IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBtYXJnaW46IDIlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTFweDtcclxuICAgIGJvcmRlci10b3A6IDRweCBzb2xpZCAjZTJlMmUyO1xyXG59XHJcblxyXG4ubWFpbl9jb250YWluZXI6aG92ZXJ7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggMHB4ICM3ZTdlN2U7XHJcbiAgICBib3JkZXI6IDRweCBzb2xpZCAjODY3YzdjNzM7XHJcbn1cclxuXHJcbi50d2VldF90ZXh0e1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgIG1hcmdpbi10b3A6IDIlXHJcbn1cclxuXHJcbi5kYXRle1xyXG4gICAgbWFyZ2luLXRvcDogMiU7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TweetExpandedComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-tweet-expanded',
                templateUrl: './tweet-expanded.component.html',
                styleUrls: ['./tweet-expanded.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/tweet/tweet.component.ts":
/*!******************************************!*\
  !*** ./src/app/tweet/tweet.component.ts ***!
  \******************************************/
/*! exports provided: TweetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TweetComponent", function() { return TweetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class TweetComponent {
    constructor() {
    }
    ngOnInit() {
        var parts = this.tweet["created_at"][0].split(" ");
        this.tweet["created_at"][0] = parts[0] + ", " + parts[1] + " " + parts[2];
        console.log(this.tweet["user"]);
    }
}
TweetComponent.ɵfac = function TweetComponent_Factory(t) { return new (t || TweetComponent)(); };
TweetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TweetComponent, selectors: [["app-tweet"]], inputs: { tweet: "tweet" }, decls: 11, vars: 5, consts: [[1, "main_container"], [1, "profile_icon", "inline"], [1, "icon", 3, "src"], [1, "name", "inline"], [1, "username"], [1, "tweet_text"], [1, "date"]], template: function TweetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.tweet["user.profile_image_url"][0], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.tweet["user.name"], " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" @", ctx.tweet["user.screen_name"][0], " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.tweet.full_text[0], " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.tweet.created_at, " ");
    } }, styles: [".icon[_ngcontent-%COMP%]{\r\n    width: 50px;\r\n    border-radius: 45px;\r\n    display: inline-block;\r\n}\r\n\r\n.inline[_ngcontent-%COMP%]{\r\n    display: inline;\r\n}\r\n\r\n.name[_ngcontent-%COMP%]{\r\n    display: inline-block;\r\n    vertical-align: top;\r\n    margin-left: 3%;\r\n    margin-top: 0.5%;\r\n    font-family: 'OPEN SANS';\r\n}\r\n\r\n.username[_ngcontent-%COMP%]{\r\n    padding: 3%;\r\n    background-color: white;\r\n    border: 3px solid #e2e2e2;\r\n    border-radius: 45px;\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n    padding-left: 7%;\r\n    padding-right: 7%;\r\n}\r\n\r\n.main_container[_ngcontent-%COMP%]{\r\n    font-family: 'Open Sans';\r\n    padding: 3%;\r\n    background-color: white;\r\n    border: 4px solid #e2e2e2;\r\n    border-top: none;\r\n    cursor: pointer;\r\n}\r\n\r\n.main_container[_ngcontent-%COMP%]:hover{\r\n    box-shadow: 0px 0px 20px 0px #7e7e7e;\r\n    border: 4px solid #fae1e173;\r\n}\r\n\r\n.tweet_text[_ngcontent-%COMP%]{\r\n    text-align: justify;\r\n    margin-top: 2%\r\n}\r\n\r\n.date[_ngcontent-%COMP%]{\r\n    margin-top: 2%;\r\n    text-align: right;\r\n    color: #e2e2e2;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHdlZXQvdHdlZXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsMEJBQWtCO0lBQWxCLHVCQUFrQjtJQUFsQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQywyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkI7QUFDSjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsY0FBYztBQUNsQiIsImZpbGUiOiJzcmMvYXBwL3R3ZWV0L3R3ZWV0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaWNvbntcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNDVweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLmlubGluZXtcclxuICAgIGRpc3BsYXk6IGlubGluZTtcclxufVxyXG5cclxuLm5hbWV7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMlO1xyXG4gICAgbWFyZ2luLXRvcDogMC41JTtcclxuICAgIGZvbnQtZmFtaWx5OiAnT1BFTiBTQU5TJztcclxufVxyXG5cclxuLnVzZXJuYW1le1xyXG4gICAgcGFkZGluZzogMyU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogM3B4IHNvbGlkICNlMmUyZTI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0NXB4O1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA3JTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDclO1xyXG59XHJcblxyXG4ubWFpbl9jb250YWluZXJ7XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2Fucyc7XHJcbiAgICBwYWRkaW5nOiAzJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyOiA0cHggc29saWQgI2UyZTJlMjtcclxuICAgIGJvcmRlci10b3A6IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5tYWluX2NvbnRhaW5lcjpob3ZlcntcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCAwcHggIzdlN2U3ZTtcclxuICAgIGJvcmRlcjogNHB4IHNvbGlkICNmYWUxZTE3MztcclxufVxyXG5cclxuLnR3ZWV0X3RleHR7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgbWFyZ2luLXRvcDogMiVcclxufVxyXG5cclxuLmRhdGV7XHJcbiAgICBtYXJnaW4tdG9wOiAyJTtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgY29sb3I6ICNlMmUyZTI7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TweetComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-tweet',
                templateUrl: './tweet.component.html',
                styleUrls: ['./tweet.component.css']
            }]
    }], function () { return []; }, { tweet: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


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
const environment = {
    production: false
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Bhavin Jawade\Documents\Courses\Information Retrieval\Final_Project\openIR\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map