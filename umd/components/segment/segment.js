var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@angular/core", "@angular/forms", "../../config/config", "../../util/base-input", "./segment-button"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var core_1 = require("@angular/core");
    var forms_1 = require("@angular/forms");
    var config_1 = require("../../config/config");
    var base_input_1 = require("../../util/base-input");
    var segment_button_1 = require("./segment-button");
    /**
     * \@name Segment
     * \@description
     * A Segment is a group of buttons, sometimes known as Segmented Controls, that allow the user to interact with a compact group of a number of controls.
     * Segments provide functionality similar to tabs, selecting one will unselect all others. You should use a tab bar instead of a segmented control when you want to let the user move back and forth between distinct pages in your app.
     * You could use Angular's `ngModel` or `FormBuilder` API. For an overview on how `FormBuilder` works, checkout [Angular Forms](http://learnangular2.com/forms/), or [Angular FormBuilder](https://angular.io/docs/ts/latest/api/forms/index/FormBuilder-class.html)
     *
     *
     * ```html
     * <!-- Segment in a header -->
     * <ion-header>
     *   <ion-toolbar>
     *     <ion-segment [(ngModel)]="icons" color="secondary">
     *       <ion-segment-button value="camera">
     *         <ion-icon name="camera"></ion-icon>
     *       </ion-segment-button>
     *       <ion-segment-button value="bookmark">
     *         <ion-icon name="bookmark"></ion-icon>
     *       </ion-segment-button>
     *     </ion-segment>
     *   </ion-toolbar>
     * </ion-header>
     *
     * <ion-content>
     *   <!-- Segment in content -->
     *   <ion-segment [(ngModel)]="relationship" color="primary" (ionChange)="segmentChanged($event)">
     *     <ion-segment-button value="friends">
     *       Friends
     *     </ion-segment-button>
     *     <ion-segment-button value="enemies">
     *       Enemies
     *     </ion-segment-button>
     *   </ion-segment>
     *
     *   <!-- Segment in a form -->
     *   <form [formGroup]="myForm">
     *     <ion-segment formControlName="mapStyle" color="danger">
     *       <ion-segment-button value="standard">
     *         Standard
     *       </ion-segment-button>
     *       <ion-segment-button value="hybrid">
     *         Hybrid
     *       </ion-segment-button>
     *       <ion-segment-button value="sat">
     *         Satellite
     *       </ion-segment-button>
     *     </ion-segment>
     *   </form>
     * </ion-content>
     * ```
     *
     *
     * \@demo /docs/demos/src/segment/
     * @see {\@link /docs/components#segment Segment Component Docs}
     * @see [Angular Forms](http://learnangular2.com/forms/)
     */
    var Segment = (function (_super) {
        __extends(Segment, _super);
        /**
         * @param {?} config
         * @param {?} elementRef
         * @param {?} renderer
         * @param {?} ngControl
         */
        function Segment(config, elementRef, renderer, ngControl) {
            return _super.call(this, config, elementRef, renderer, 'segment', null, null, null, ngControl) || this;
        }
        /**
         * @hidden
         * @return {?}
         */
        Segment.prototype.ngAfterContentInit = function () {
            var _this = this;
            this._initialize();
            this._buttons.forEach(function (button) {
                button.ionSelect.subscribe(function (selectedButton) {
                    _this.value = selectedButton.value;
                    _this._fireTouched();
                });
            });
        };
        /**
         * @hidden
         * Write a new value to the element.
         * @return {?}
         */
        Segment.prototype._inputUpdated = function () {
            if (!this._buttons) {
                (void 0) /* assert */;
                return;
            }
            var /** @type {?} */ buttons = this._buttons.toArray();
            var /** @type {?} */ value = this.value;
            for (var _i = 0, buttons_1 = buttons; _i < buttons_1.length; _i++) {
                var button = buttons_1[_i];
                button.isActive = (button.value === value);
            }
        };
        return Segment;
    }(base_input_1.BaseInput));
    Segment.decorators = [
        { type: core_1.Directive, args: [{
                    selector: 'ion-segment',
                    host: {
                        '[class.segment-disabled]': '_disabled'
                    }
                },] },
    ];
    /**
     * @nocollapse
     */
    Segment.ctorParameters = function () { return [
        { type: config_1.Config, },
        { type: core_1.ElementRef, },
        { type: core_1.Renderer, },
        { type: forms_1.NgControl, decorators: [{ type: core_1.Optional },] },
    ]; };
    Segment.propDecorators = {
        '_buttons': [{ type: core_1.ContentChildren, args: [segment_button_1.SegmentButton,] },],
    };
    exports.Segment = Segment;
    function Segment_tsickle_Closure_declarations() {
        /** @type {?} */
        Segment.decorators;
        /**
         * @nocollapse
         * @type {?}
         */
        Segment.ctorParameters;
        /** @type {?} */
        Segment.propDecorators;
        /**
         * @hidden
         * @type {?}
         */
        Segment.prototype._buttons;
    }
});
//# sourceMappingURL=segment.js.map