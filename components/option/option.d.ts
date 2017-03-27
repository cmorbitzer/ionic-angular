import { ElementRef, EventEmitter } from '@angular/core';
/**
 * @name Option
 * @description
 * `ion-option` is a child component of `ion-select`. Similar to the native option element, `ion-option` can take a value and a selected property.
 *
 * @demo /docs/v2/demos/src/select/
 */
export declare class Option {
    private _elementRef;
    _selected: any;
    _disabled: any;
    _value: any;
    /**
     * @output {any} Event to evaluate when option is selected.
     */
    ionSelect: EventEmitter<any>;
    constructor(_elementRef: ElementRef);
    /**
     * @input {boolean} If true, the element is selected.
     */
    selected: any;
    /**
     * @input {any} The value of the option.
     */
    value: any;
    /**
     * @input {boolean} If true, the user cannot interact with this element.
     */
    disabled: boolean;
    /**
     * @private
     */
    readonly text: any;
}
