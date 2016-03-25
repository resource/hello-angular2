System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Logger;
    return {
        setters:[],
        execute: function() {
            Logger = (function () {
                function Logger() {
                }
                Logger.log = function (msg) {
                    var message = "%c[" + new Date().toDateString() + "] %c<LOG> %c" + msg;
                    console.log(message, 'color: #666', 'color: #000', 'color: #222');
                };
                Logger.error = function (msg) {
                    var message = "%c[" + new Date().toDateString() + "] %c<ERROR> %c" + msg;
                    console.log(message, 'color: #666', 'color: #ff0000', 'color: #000');
                };
                Logger.warn = function (msg) {
                    var message = "%c[" + new Date().toDateString() + "] %c<WARN> %c" + msg;
                    console.log(message, 'color: #666', 'color: #00ff00', 'color: #000');
                };
                return Logger;
            }());
            exports_1("Logger", Logger);
        }
    }
});
//# sourceMappingURL=logger.js.map