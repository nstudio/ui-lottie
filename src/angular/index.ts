import { Directive, NgModule } from '@angular/core';
import { registerElement } from '@nativescript/angular';
import { LottieView } from '..';

@Directive({ selector: 'LottieView' })
export class LottieViewDirective {}

@NgModule({
    declarations: [LottieViewDirective],
    exports: [LottieViewDirective]
})
export class NativeScriptLottieModule {}

registerElement('LottieView', () => LottieView);
