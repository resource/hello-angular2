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
    var ItemDetailComponent;
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
            ItemDetailComponent = (function () {
                function ItemDetailComponent(_service, _routeParams) {
                    this._service = _service;
                    this._routeParams = _routeParams;
                    this.aid = _routeParams.get('id');
                }
                ItemDetailComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._service.getItemById(this.aid).subscribe(function (aid) {
                        _this.item = aid;
                    }, function (error) {
                        _this.error = error;
                    });
                };
                ItemDetailComponent = __decorate([
                    core_1.Component({
                        directives: [router_1.RouterOutlet, router_1.ROUTER_DIRECTIVES],
                        providers: [http_1.HTTP_PROVIDERS, items_service_1.ItemsService],
                        template: "\n        <div *ngIf=\"item\" class=\"item-detail\">\n            <h3>{{item.name}}</h3>\n            <img src=\"{{item.poster}}\" class=\"img-fluid\" alt=\"Responsive image\"/>\n            <p>{{item.longDescription}}</p>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [items_service_1.ItemsService, router_1.RouteParams])
                ], ItemDetailComponent);
                return ItemDetailComponent;
            }());
            exports_1("ItemDetailComponent", ItemDetailComponent);
        }
    }
});
//# sourceMappingURL=item-detail.component.js.map