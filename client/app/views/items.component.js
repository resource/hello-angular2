System.register(['angular2/core', 'angular2/router', "angular2/http", "../services/items.service"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, http_1, items_service_1;
    var ItemsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (items_service_1_1) {
                items_service_1 = items_service_1_1;
            }],
        execute: function() {
            ItemsComponent = (function () {
                function ItemsComponent(_service, _router) {
                    this._service = _service;
                    this._router = _router;
                }
                ItemsComponent.prototype.ngOnInit = function () {
                    this.getItems();
                };
                ItemsComponent.prototype.getItems = function () {
                    var _this = this;
                    this._service.getItems().subscribe(function (items) {
                        _this.items = items;
                    }, function (error) {
                        _this.error = error;
                    });
                };
                ItemsComponent.prototype.gotoDetail = function (actor) {
                    var link = ['ItemDetail', { id: actor.id }];
                    this._router.navigate(link);
                };
                ItemsComponent = __decorate([
                    core_1.Component({
                        directives: [router_1.RouterOutlet, router_1.ROUTER_DIRECTIVES],
                        providers: [http_1.HTTP_PROVIDERS, items_service_1.ItemsService],
                        template: "       \n        <div class=\"items\">\n            <div class=\"card-deck\">\n                <div id=\"{{item.id}}\" class=\"card\" *ngFor=\"#item of items\">     \n                    <img class=\"card-img-top\" width=\"100%\" src=\"{{item.poster}}\" alt=\"Card image cap\">\n                    <div class=\"card-block\">\n                        <h4 class=\"card-title\">{{item.name}}</h4>\n                        <p class=\"card-text\">{{item.shortDescription}}</p>\n                        <a (click)=\"gotoDetail(item)\" class=\"btn btn-info-outline\">See More</a>\n                    </div>\n                </div>\n            </div>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [items_service_1.ItemsService, router_1.Router])
                ], ItemsComponent);
                return ItemsComponent;
            }());
            exports_1("ItemsComponent", ItemsComponent);
        }
    }
});
//# sourceMappingURL=items.component.js.map