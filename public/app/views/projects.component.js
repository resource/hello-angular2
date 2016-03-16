System.register(['angular2/core', 'angular2/router', '../services/projects.service'], function(exports_1) {
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
    var ProjectsComponent;
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
            ProjectsComponent = (function () {
                function ProjectsComponent(_projectsService) {
                    this._projectsService = _projectsService;
                    this.projects = [];
                    this.projects = this._projectsService.getProjects();
                }
                ProjectsComponent = __decorate([
                    core_1.Component({
                        directives: [router_1.RouterOutlet],
                        providers: [projects_service_1.ProjectsService],
                        template: "\n        <div>\n            <ul class=\"list-group\">\n                <li id=\"{{project.id}}\" *ngFor=\"#project of projects\" class=\"list-group-item col-md-4\">\n                    <h4 class=\"list-group-item-heading\">{{project.name}}</h4>\n                    <p class=\"list-group-item-text\">{{project.description}}</p>\n                    <img src=\"{{project.poster}}\" class=\"img-fluid center-block\"/>\n                </li>\n            </ul>\n        </div>\n    ",
                        styles: []
                    }), 
                    __metadata('design:paramtypes', [projects_service_1.ProjectsService])
                ], ProjectsComponent);
                return ProjectsComponent;
            })();
            exports_1("ProjectsComponent", ProjectsComponent);
        }
    }
});
//# sourceMappingURL=projects.component.js.map