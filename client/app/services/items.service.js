System.register(["./logger", "angular2/http", "angular2/core", "rxjs/Observable", 'rxjs/Rx'], function(exports_1, context_1) {
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
    var logger_1, http_1, core_1, Observable_1;
    var ItemsService;
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
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (_1) {}],
        execute: function() {
            ItemsService = (function () {
                // ============================================================
                // === Initialization =========================================
                // ============================================================
                function ItemsService(_http) {
                    this._http = _http;
                }
                // ============================================================
                // === Public API =============================================
                // ============================================================
                ItemsService.prototype.getItems = function () {
                    return this._http.get('/api/items')
                        .map(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                ItemsService.prototype.getItemById = function (id) {
                    return this._http.get('/api/item/' + id)
                        .map(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                // ============================================================
                // === Private API ============================================
                // ============================================================
                ItemsService.prototype.handleError = function (error) {
                    // in a real world app, we may send the error to some remote logging infrastructure
                    // instead of just logging it to the console
                    logger_1.Logger.error(error);
                    return Observable_1.Observable.throw(error.json().error || 'Server error');
                };
                ItemsService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], ItemsService);
                return ItemsService;
            }());
            exports_1("ItemsService", ItemsService);
        }
    }
});
//# sourceMappingURL=items.service.js.map