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
    var ActorsComponent;
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
            ActorsComponent = (function () {
                function ActorsComponent(_service, _router) {
                    this._service = _service;
                    this._router = _router;
                }
                ActorsComponent.prototype.ngOnInit = function () {
                    this.getProjects();
                };
                ActorsComponent.prototype.getProjects = function () {
                    var _this = this;
                    this._service.getActors().subscribe(function (actors) {
                        _this.actors = actors;
                    }, function (error) {
                        _this.error = error;
                    });
                };
                ActorsComponent.prototype.gotoDetail = function (actor) {
                    var link = ['ActorDetail', { id: actor.id }];
                    this._router.navigate(link);
                };
                ActorsComponent = __decorate([
                    core_1.Component({
                        directives: [router_1.RouterOutlet, router_1.ROUTER_DIRECTIVES],
                        providers: [http_1.HTTP_PROVIDERS, actors_service_1.ActorsService],
                        template: "       \n        <div class=\"actors\">\n            <div class=\"card-deck\">\n                <div id=\"{{actor.id}}\" class=\"card\" *ngFor=\"#actor of actors\">     \n                    <img class=\"card-img-top\" width=\"100%\" src=\"{{actor.poster}}\" alt=\"Card image cap\">\n                    <div class=\"card-block\">\n                        <h4 class=\"card-title\">{{actor.name}}</h4>\n                        <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n                        <a (click)=\"gotoDetail(actor)\" class=\"btn btn-info-outline\">See More</a>\n                    </div>\n                </div>\n            </div>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [actors_service_1.ActorsService, router_1.Router])
                ], ActorsComponent);
                return ActorsComponent;
            }());
            exports_1("ActorsComponent", ActorsComponent);
        }
    }
});
//# sourceMappingURL=actors.component.js.map