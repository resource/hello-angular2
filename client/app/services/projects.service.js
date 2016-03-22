System.register(["./logger", "angular2/http", "angular2/core"], function(exports_1, context_1) {
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
    var logger_1, http_1, core_1;
    var ProjectsService;
    return {
        setters:[
            function (logger_1_1) {
                logger_1 = logger_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ProjectsService = (function () {
                function ProjectsService(_http) {
                    this._http = _http;
                }
                /**
                 * @returns {Promise<T>|Promise<R>|Promise}
                 */
                ProjectsService.prototype.getProjects = function () {
                    logger_1.Logger.log('getting projects');
                    return this._http.get('http://localhost:3000/api/projects').map(function (res) { return res.json(); }).catch(error, function (any) {
                        logger_1.Logger.error(error);
                    });
                    /*
                return this._http.get("/api/projects").map(res => <Project[]> res.json().data).catch(error => {
                    Logger.error(error);
                });
                */
                };
                /**
                 * @returns {Promise<T>|Promise<R>|Promise}
                 */
                ProjectsService.prototype.getProjectById = function (id) {
                    // return new Promise((resolve,reject) => {
                    //
                    // });
                };
                ProjectsService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], ProjectsService);
                return ProjectsService;
            }());
            exports_1("ProjectsService", ProjectsService);
        }
    }
});
//# sourceMappingURL=projects.service.js.map