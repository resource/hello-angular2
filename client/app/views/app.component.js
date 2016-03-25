System.register(['angular2/core', 'angular2/router', '../services/logger', "./actors.component", "./actor-detail.component"], function(exports_1, context_1) {
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
    var core_1, router_1, logger_1, actors_component_1, actor_detail_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (logger_1_1) {
                logger_1 = logger_1_1;
            },
            function (actors_component_1_1) {
                actors_component_1 = actors_component_1_1;
            },
            function (actor_detail_component_1_1) {
                actor_detail_component_1 = actor_detail_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    logger_1.Logger.log('AppComponent constructed');
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'actors-app',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        template: "\n        <div class=\"container-fluid\">\n            <nav class=\"navbar navbar-static-top navbar-light bg-faded\">\n                <a class=\"navbar-brand\" [routerLink]=\"['Actors']\">BAIH</a>\n                 <ul class=\"nav navbar-nav\">\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link\" [routerLink]=\"['Actors']\">Actors</a>\n                    </li>\n                </ul>\n            </nav>\n            <div class=\"content\">\n                <router-outlet></router-outlet>\n            </div>\n        </div>\n    "
                    }),
                    router_1.RouteConfig([
                        { path: '/', redirectTo: ['Actors'] },
                        { path: '/actors', name: 'Actors', component: actors_component_1.ActorsComponent },
                        { path: '/actor/:id', name: 'ActorDetail', component: actor_detail_component_1.ActorDetailComponent },
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map