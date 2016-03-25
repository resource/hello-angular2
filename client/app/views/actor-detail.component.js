System.register(['angular2/core', 'angular2/router', "angular2/http", "../services/actors.service"], function(exports_1, context_1) {
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
    var core_1, router_1, http_1, actors_service_1;
    var ActorDetailComponent;
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
            function (actors_service_1_1) {
                actors_service_1 = actors_service_1_1;
            }],
        execute: function() {
            ActorDetailComponent = (function () {
                function ActorDetailComponent(_service, _routeParams) {
                    this._service = _service;
                    this._routeParams = _routeParams;
                    this.aid = _routeParams.get('id');
                }
                ActorDetailComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._service.getActorById(this.aid).subscribe(function (aid) {
                        _this.actor = aid;
                        _this.descriptionParagraphs = _this.actor.description.split('\r');
                    }, function (error) {
                        _this.error = error;
                    });
                };
                ActorDetailComponent = __decorate([
                    core_1.Component({
                        directives: [router_1.RouterOutlet, router_1.ROUTER_DIRECTIVES],
                        providers: [http_1.HTTP_PROVIDERS, actors_service_1.ActorsService],
                        template: "\n        <div *ngIf=\"actor\" class=\"actor-detail\">\n            <h3>{{actor.name}}</h3>\n            <img src=\"{{actor.images[1].source}}\" alt=\"\"/>\n            <p *ngFor=\"#paragraph of descriptionParagraphs\">{{paragraph}}</p>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [actors_service_1.ActorsService, router_1.RouteParams])
                ], ActorDetailComponent);
                return ActorDetailComponent;
            }());
            exports_1("ActorDetailComponent", ActorDetailComponent);
        }
    }
});
//# sourceMappingURL=actor-detail.component.js.map