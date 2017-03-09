var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", '@angular/core'], factory);
    }
})(function (require, exports) {
    "use strict";
    var core_1 = require('@angular/core');
    /**
     * \@name IonicErrorHandler
     * \@description
     * The `IonicErrorHandler` intercepts the default `Console` error handling
     * and displays runtime errors as an overlay when using Ionic's Dev Build Server.
     *
     *
     * ### IonicErrorHandler Example
     *
     * ```typescript
     * import { NgModule, ErrorHandler } from '\@angular/core';
     * import { IonicErrorHandler } from 'ionic-angular';
     *
     * \@NgModule({
     *   providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }]
     * })
     * class AppModule {}
     * ```
     *
     *
     * ### Custom Error Handlers
     *
     * Custom error handlers can be built to replace the default, or extend Ionic's
     * error handler.
     *
     * ```typescript
     * class MyErrorHandler implements ErrorHandler {
     *   handleError(err: any): void {
     *     // do something with the error
     *   }
     * }
     *
     * \@NgModule({
     *   providers: [{ provide: ErrorHandler, useClass: MyErrorHandler }]
     * })
     * class AppModule {}
     * ```
     *
     * More information about Angular's [`ErrorHandler`](https://angular.io/docs/ts/latest/api/core/index/ErrorHandler-class.html).
     */
    var IonicErrorHandler = (function (_super) {
        __extends(IonicErrorHandler, _super);
        function IonicErrorHandler() {
            _super.call(this, false);
        }
        /**
         * \@internal
         * @param {?} err
         * @return {?}
         */
        IonicErrorHandler.prototype.handleError = function (err) {
            _super.prototype.handleError.call(this, err);
            try {
                var /** @type {?} */ devServer = ((window))['IonicDevServer'];
                if (devServer) {
                    devServer.handleError(err);
                }
            }
            catch (e) { }
        };
        return IonicErrorHandler;
    }(core_1.ErrorHandler));
    exports.IonicErrorHandler = IonicErrorHandler;
});
//# sourceMappingURL=ionic-error-handler.js.map