System.register(['angular2/core', 'angular2/router', './projects.component', './about.component', './project-detail.component'], function(exports_1, context_1) {
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
    var core_1, router_1, projects_component_1, about_component_1, project_detail_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (projects_component_1_1) {
                projects_component_1 = projects_component_1_1;
            },
            function (about_component_1_1) {
                about_component_1 = about_component_1_1;
            },
            function (project_detail_component_1_1) {
                project_detail_component_1 = project_detail_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        template: "\n        <div class=\"container-fluid\">\n            <nav class=\"navbar navbar-light bg-faded\">\n                <div class=\"navbar-brand\"><img src=\"/images/logo.png\" alt=\"logo\" width=\"44\" height=\"44\"></div>\n                <ul class=\"nav navbar-nav\">\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link\" [routerLink]=\"['Projects']\">Projects</a>\n                    </li>\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link\" [routerLink]=\"['About']\">About</a>\n                    </li>\n                </ul>\n            </nav>\n            <router-outlet></router-outlet>\n        </div>\n    "
                    }),
                    router_1.RouteConfig([
                        { path: '/', redirectTo: ['Projects'] },
                        { path: '/projects', name: 'Projects', component: projects_component_1.ProjectsComponent },
                        { path: '/project/:id', name: 'ProjectDetail', component: project_detail_component_1.ProjectDetailComponent },
                        { path: '/about', name: 'About', component: about_component_1.AboutComponent }
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