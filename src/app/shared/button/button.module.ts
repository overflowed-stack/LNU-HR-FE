import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { IconModule } from '@shared/icon/icon.module';

import { ButtonComponent } from './button.component';

@NgModule({
    declarations: [ButtonComponent],
    imports: [CommonModule, IconModule],
    exports: [ButtonComponent],
})
export class ButtonModule {}
