import { Directive, Host, HostListener, Input, Optional } from '@angular/core';
import { DeepLinker } from '../../navigation/deep-linker';
import { NavController } from '../../navigation/nav-controller';
/**
 * @name NavPush
 * @description
 * Directive to declaratively push a new page to the current nav
 * stack.
 *
 * @usage
 * ```html
 * <button ion-button [navPush]="pushPage"></button>
 * ```
 *
 * To specify parameters you can use array syntax or the `navParams`
 * property:
 *
 * ```html
 * <button ion-button [navPush]="pushPage" [navParams]="params">Go</button>
 * ```
 *
 * Where `pushPage` and `params` are specified in your component,
 * and `pushPage` contains a reference to a
 * component you would like to push:
 *
 * ```ts
 * import { LoginPage } from './login';
 *
 * @Component({
 *   template: `<button ion-button [navPush]="pushPage" [navParams]="params">Go</button>`
 * })
 * class MyPage {
 *   constructor(){
 *     this.pushPage = LoginPage;
 *     this.params = { id: 42 };
 *   }
 * }
 * ```
 *
 * @demo /docs/v2/demos/src/navigation/
 * @see {@link /docs/v2/components#navigation Navigation Component Docs}
 * @see {@link ../NavPop NavPop API Docs}
 *
 */
export class NavPush {
    constructor(_nav) {
        this._nav = _nav;
        if (!_nav) {
            console.error('navPush must be within a NavController');
        }
    }
    /**
     * @private
     */
    onClick() {
        if (this._nav && this.navPush) {
            this._nav.push(this.navPush, this.navParams).catch(() => {
                (void 0) /* console.debug */;
            });
            return false;
        }
        return true;
    }
}
NavPush.decorators = [
    { type: Directive, args: [{
                selector: '[navPush]'
            },] },
];
/** @nocollapse */
NavPush.ctorParameters = [
    { type: NavController, decorators: [{ type: Optional },] },
];
NavPush.propDecorators = {
    'navPush': [{ type: Input },],
    'navParams': [{ type: Input },],
    'onClick': [{ type: HostListener, args: ['click',] },],
};
/**
 * @private
 */
export class NavPushAnchor {
    constructor(host, linker) {
        this.host = host;
        this.linker = linker;
    }
    updateHref() {
        if (this.host && this.linker) {
            this._href = this.linker.createUrl(this.host._nav, this.host.navPush, this.host.navParams) || '#';
        }
        else {
            this._href = '#';
        }
    }
    ngAfterContentInit() {
        this.updateHref();
    }
}
NavPushAnchor.decorators = [
    { type: Directive, args: [{
                selector: 'a[navPush]',
                host: {
                    '[attr.href]': '_href'
                }
            },] },
];
/** @nocollapse */
NavPushAnchor.ctorParameters = [
    { type: NavPush, decorators: [{ type: Host },] },
    { type: DeepLinker, decorators: [{ type: Optional },] },
];
//# sourceMappingURL=nav-push.js.map