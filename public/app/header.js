System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var HeaderComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            HeaderComponent = (function () {
                function HeaderComponent() {
                    this.headerLinks = [{ title: "One" }, { title: "Two" }, { title: "Three" }];
                }
                HeaderComponent.prototype.navItemSelected = function (item) {
                    console.log(item.title + " was selected");
                };
                HeaderComponent.prototype.ngOnInit = function () {
                    console.log("init header component");
                };
                HeaderComponent = __decorate([
                    core_1.Component({
                        selector: 'app-header',
                        template: "\n        <header>\n            <nav class=\"navbar navbar-light bg-faded\">\n                <div class=\"nav navbar-nav\">\n                    <a class=\"navbar-brand\" href=\"#\">Brand</a>\n                    <a href=\"#\" *ngFor=\"#headerLink of headerLinks\" (click)=\"navItemSelected(headerLink)\" class=\"nav-item nav-link\">\n                        {{headerLink.title}}\n                    </a>\n                </div>\n            </nav>\n        </header>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], HeaderComponent);
                return HeaderComponent;
            })();
            exports_1("HeaderComponent", HeaderComponent);
        }
    }
});
//# sourceMappingURL=header.js.map