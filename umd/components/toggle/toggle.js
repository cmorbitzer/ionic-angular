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
        define(["require", "exports", "@angular/core", "@angular/forms", "../../config/config", "../../platform/dom-controller", "../../util/form", "../../gestures/gesture-controller", "../../tap-click/haptic", "../../util/util", "../../util/base-input", "../item/item", "../../platform/key", "../../platform/platform", "./toggle-gesture"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var core_1 = require("@angular/core");
    var forms_1 = require("@angular/forms");
    var config_1 = require("../../config/config");
    var dom_controller_1 = require("../../platform/dom-controller");
    var form_1 = require("../../util/form");
    var gesture_controller_1 = require("../../gestures/gesture-controller");
    var haptic_1 = require("../../tap-click/haptic");
    var util_1 = require("../../util/util");
    var base_input_1 = require("../../util/base-input");
    var item_1 = require("../item/item");
    var key_1 = require("../../platform/key");
    var platform_1 = require("../../platform/platform");
    var toggle_gesture_1 = require("./toggle-gesture");
    exports.TOGGLE_VALUE_ACCESSOR = {
        provide: forms_1.NG_VALUE_ACCESSOR,
        useExisting: core_1.forwardRef(function () { return Toggle; }),
        multi: true
    };
    /**
     * \@name Toggle
     * \@description
     * A toggle technically is the same thing as an HTML checkbox input,
     * except it looks different and is easier to use on a touch device.
     * Toggles can also have colors assigned to them, by adding any color
     * attribute.
     *
     * See the [Angular 2 Docs](https://angular.io/docs/ts/latest/guide/forms.html)
     * for more info on forms and inputs.
     *
     * \@usage
     * ```html
     *
     *  <ion-list>
     *
     *    <ion-item>
     *      <ion-label>Pepperoni</ion-label>
     *      <ion-toggle [(ngModel)]="pepperoni"></ion-toggle>
     *    </ion-item>
     *
     *    <ion-item>
     *      <ion-label>Sausage</ion-label>
     *      <ion-toggle [(ngModel)]="sausage" disabled="true"></ion-toggle>
     *    </ion-item>
     *
     *    <ion-item>
     *      <ion-label>Mushrooms</ion-label>
     *      <ion-toggle [(ngModel)]="mushrooms"></ion-toggle>
     *    </ion-item>
     *
     *  </ion-list>
     * ```
     *
     * \@demo /docs/demos/src/toggle/
     * @see {\@link /docs/components#toggle Toggle Component Docs}
     */
    var Toggle = (function (_super) {
        __extends(Toggle, _super);
        /**
         * @param {?} form
         * @param {?} config
         * @param {?} _plt
         * @param {?} elementRef
         * @param {?} renderer
         * @param {?} _haptic
         * @param {?} item
         * @param {?} _gestureCtrl
         * @param {?} _domCtrl
         * @param {?} _cd
         */
        function Toggle(form, config, _plt, elementRef, renderer, _haptic, item, _gestureCtrl, _domCtrl, _cd) {
            var _this = _super.call(this, config, elementRef, renderer, 'toggle', false, form, item, null) || this;
            _this._plt = _plt;
            _this._haptic = _haptic;
            _this._gestureCtrl = _gestureCtrl;
            _this._domCtrl = _domCtrl;
            _this._cd = _cd;
            _this._activated = false;
            _this._msPrv = 0;
            return _this;
        }
        Object.defineProperty(Toggle.prototype, "checked", {
            /**
             * \@input {boolean} If true, the element is selected.
             * @return {?}
             */
            get: function () {
                return this.value;
            },
            /**
             * @param {?} val
             * @return {?}
             */
            set: function (val) {
                this.value = val;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @hidden
         * @return {?}
         */
        Toggle.prototype.ngAfterViewInit = function () {
            this._initialize();
            this._gesture = new toggle_gesture_1.ToggleGesture(this._plt, this, this._gestureCtrl, this._domCtrl);
            this._gesture.listen();
        };
        /**
         * @hidden
         * @param {?} val
         * @return {?}
         */
        Toggle.prototype._inputNormalize = function (val) {
            return util_1.isTrueProperty(val);
        };
        /**
         * @hidden
         * @return {?}
         */
        Toggle.prototype._inputUpdated = function () {
            this._item && this._item.setElementClass('item-toggle-checked', this.value);
            this._cd.detectChanges();
        };
        /**
         * @hidden
         * @param {?} startX
         * @return {?}
         */
        Toggle.prototype._onDragStart = function (startX) {
            (void 0) /* assert */;
            (void 0) /* console.debug */;
            this._startX = startX;
            this._fireFocus();
            this._activated = true;
        };
        /**
         * @hidden
         * @param {?} currentX
         * @return {?}
         */
        Toggle.prototype._onDragMove = function (currentX) {
            if (!this._startX) {
                (void 0) /* assert */;
                return;
            }
            (void 0) /* console.debug */;
            if (this._value) {
                if (currentX + 15 < this._startX) {
                    this.value = false;
                    this._haptic.selection();
                    this._startX = currentX;
                    this._activated = true;
                }
            }
            else if (currentX - 15 > this._startX) {
                this.value = true;
                this._haptic.selection();
                this._startX = currentX;
                this._activated = (currentX < this._startX + 5);
            }
        };
        /**
         * @hidden
         * @param {?} endX
         * @return {?}
         */
        Toggle.prototype._onDragEnd = function (endX) {
            if (!this._startX) {
                (void 0) /* assert */;
                return;
            }
            (void 0) /* console.debug */;
            if (this._value) {
                if (this._startX + 4 > endX) {
                    this.value = false;
                    this._haptic.selection();
                }
            }
            else if (this._startX - 4 < endX) {
                this.value = true;
                this._haptic.selection();
            }
            this._activated = false;
            this._fireBlur();
            this._startX = null;
        };
        /**
         * @hidden
         * @param {?} ev
         * @return {?}
         */
        Toggle.prototype._keyup = function (ev) {
            if (ev.keyCode === key_1.KEY_SPACE || ev.keyCode === key_1.KEY_ENTER) {
                (void 0) /* console.debug */;
                ev.preventDefault();
                ev.stopPropagation();
                this.value = !this.value;
            }
        };
        /**
         * @hidden
         * @return {?}
         */
        Toggle.prototype.initFocus = function () {
            this._elementRef.nativeElement.querySelector('button').focus();
        };
        /**
         * @hidden
         * @return {?}
         */
        Toggle.prototype.ngOnDestroy = function () {
            _super.prototype.ngOnDestroy.call(this);
            this._gesture && this._gesture.destroy();
        };
        return Toggle;
    }(base_input_1.BaseInput));
    Toggle.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'ion-toggle',
                    template: '<div class="toggle-icon" [class.toggle-checked]="_value" [class.toggle-activated]="_activated">' +
                        '<div class="toggle-inner"></div>' +
                        '</div>' +
                        '<button role="checkbox" ' +
                        'type="button" ' +
                        'ion-button="item-cover" ' +
                        '[id]="id" ' +
                        '[attr.aria-checked]="_value" ' +
                        '[attr.aria-labelledby]="_labelId" ' +
                        '[attr.aria-disabled]="_disabled" ' +
                        'class="item-cover">' +
                        '</button>',
                    host: {
                        '[class.toggle-disabled]': '_disabled'
                    },
                    providers: [exports.TOGGLE_VALUE_ACCESSOR],
                    encapsulation: core_1.ViewEncapsulation.None,
                },] },
    ];
    /**
     * @nocollapse
     */
    Toggle.ctorParameters = function () { return [
        { type: form_1.Form, },
        { type: config_1.Config, },
        { type: platform_1.Platform, },
        { type: core_1.ElementRef, },
        { type: core_1.Renderer, },
        { type: haptic_1.Haptic, },
        { type: item_1.Item, decorators: [{ type: core_1.Optional },] },
        { type: gesture_controller_1.GestureController, },
        { type: dom_controller_1.DomController, },
        { type: core_1.ChangeDetectorRef, },
    ]; };
    Toggle.propDecorators = {
        'checked': [{ type: core_1.Input },],
        '_keyup': [{ type: core_1.HostListener, args: ['keyup', ['$event'],] },],
    };
    exports.Toggle = Toggle;
    function Toggle_tsickle_Closure_declarations() {
        /** @type {?} */
        Toggle.decorators;
        /**
         * @nocollapse
         * @type {?}
         */
        Toggle.ctorParameters;
        /** @type {?} */
        Toggle.propDecorators;
        /** @type {?} */
        Toggle.prototype._activated;
        /** @type {?} */
        Toggle.prototype._startX;
        /** @type {?} */
        Toggle.prototype._msPrv;
        /** @type {?} */
        Toggle.prototype._gesture;
        /** @type {?} */
        Toggle.prototype._plt;
        /** @type {?} */
        Toggle.prototype._haptic;
        /** @type {?} */
        Toggle.prototype._gestureCtrl;
        /** @type {?} */
        Toggle.prototype._domCtrl;
        /** @type {?} */
        Toggle.prototype._cd;
    }
});
//# sourceMappingURL=toggle.js.map