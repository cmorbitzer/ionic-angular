import { HammerGestureConfig } from '@angular/platform-browser';
/**
 * @private
 * This class overrides the default Angular gesture config.
 */
export declare class IonicGestureConfig extends HammerGestureConfig {
    buildHammer(element: HTMLElement): any;
}
