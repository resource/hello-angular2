System.register(['angular2/core', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, router_1;
    var DisclaimerComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            DisclaimerComponent = (function () {
                function DisclaimerComponent() {
                }
                DisclaimerComponent = __decorate([
                    core_1.Component({
                        directives: [router_1.RouterOutlet],
                        template: "\n        <div class=\"disclaimer\">\n            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ipsum ante, ornare eu congue ut, congue at lacus. Nam sapien sapien, suscipit nec lacus vel, vestibulum pulvinar risus. Vestibulum molestie lectus sed odio bibendum, ullamcorper imperdiet libero lobortis. Vivamus vitae ornare lacus. Sed lobortis nibh ut mattis vulputate. Nunc facilisis est eu lectus dictum consectetur. Duis finibus rutrum fermentum. Praesent sagittis ante augue, tincidunt bibendum nulla posuere nec. Nulla id libero at arcu fringilla pretium.</p>\n            <p>Quisque in arcu ut libero laoreet pellentesque et tincidunt mi. Cras imperdiet convallis dapibus. Etiam tristique pretium augue quis commodo. Cras ut tellus est. Phasellus a feugiat nisl. Cras vel ultricies mauris. Phasellus ultricies, quam hendrerit varius dignissim, mi nulla consectetur lectus, in feugiat nisi orci sit amet est. Nulla vestibulum iaculis erat, in luctus justo sollicitudin vel. Maecenas est enim, convallis eget ultrices vitae, placerat vitae nisl. Sed vel egestas ante, at vehicula justo. Aliquam feugiat sodales nibh, et maximus magna. Ut vitae efficitur mi. Duis sit amet tellus mi. Integer urna libero, pellentesque quis sapien sed, vestibulum hendrerit metus.</p>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], DisclaimerComponent);
                return DisclaimerComponent;
            }());
            exports_1("DisclaimerComponent", DisclaimerComponent);
        }
    }
});
//# sourceMappingURL=disclaimer.component.js.map