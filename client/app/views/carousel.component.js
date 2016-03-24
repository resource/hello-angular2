System.register(["angular2/core"], function(exports_1, context_1) {
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
    var core_1;
    var CarouselComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            CarouselComponent = (function () {
                function CarouselComponent() {
                    // this.images = images;
                }
                __decorate([
                    core_1.Input('images'), 
                    __metadata('design:type', Array)
                ], CarouselComponent.prototype, "images", void 0);
                CarouselComponent = __decorate([
                    core_1.Component({
                        selector: 'carousel',
                        template: "\n\n        <div id=\"carousel-example-generic\" class=\"carousel slide\" data-ride=\"carousel\">\n            \n            <div class=\"carousel-inner\" role=\"listbox\">\n                <img data-src=\"{{images[0].source}}\" active />\n                <div *ngFor=\"#image of images\" class=\"carousel-item\">\n                    <img data-src=\"{{image.source}}\"/>\n                </div>\n            </div>\n            \n            <a class=\"left carousel-control\" href=\"#carousel-example-generic\" role=\"button\" data-slide=\"prev\">\n                <span class=\"icon-prev\" aria-hidden=\"true\"></span>\n                <span class=\"sr-only\">Previous</span>\n            </a>\n            \n            <a class=\"right carousel-control\" href=\"#carousel-example-generic\" role=\"button\" data-slide=\"next\">\n                <span class=\"icon-next\" aria-hidden=\"true\"></span>\n                <span class=\"sr-only\">Next</span>\n            </a>\n            \n        </div>\n        \n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], CarouselComponent);
                return CarouselComponent;
            }());
            exports_1("CarouselComponent", CarouselComponent);
        }
    }
});
//# sourceMappingURL=carousel.component.js.map