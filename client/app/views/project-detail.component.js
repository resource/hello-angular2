System.register(['angular2/core', 'angular2/router', '../services/projects.service'], function(exports_1, context_1) {
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
    var core_1, router_1, projects_service_1;
    var ProjectDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (projects_service_1_1) {
                projects_service_1 = projects_service_1_1;
            }],
        execute: function() {
            ProjectDetailComponent = (function () {
                function ProjectDetailComponent(_projectService, _routeParams) {
                    this._projectService = _projectService;
                    this._routeParams = _routeParams;
                }
                ProjectDetailComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var id = this._routeParams.get('id');
                    this._projectService.getProjectById(id).then(function (project) { return _this.project = project; });
                };
                ProjectDetailComponent = __decorate([
                    core_1.Component({
                        providers: [projects_service_1.ProjectsService],
                        template: "\n        <div *ngIf=\"project\">\n            <h3>{{project.name}}</h3>\n            <p>{{project.description}}</p>\n            <div id=\"{{image.id}}\" *ngFor=\"#image of project.images\" class=\"\">\n                <figure class=\"figure-img\">\n                    <img width=\"100\" height=\"100\" src=\"{{image.source}}\" />\n                    <figcaption class=\"figure-caption\">{{image.caption}}</figcaption>\n                </figure>\n            </div>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [projects_service_1.ProjectsService, router_1.RouteParams])
                ], ProjectDetailComponent);
                return ProjectDetailComponent;
            }());
            exports_1("ProjectDetailComponent", ProjectDetailComponent);
        }
    }
});
//# sourceMappingURL=project-detail.component.js.map