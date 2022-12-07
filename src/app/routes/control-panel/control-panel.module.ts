import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from '@shared/button/button.module';
import { IconModule } from '@shared/icon/icon.module';

import { ControlPanelRoutingModule } from './control-panel-routing.module';
import { ControlPanelComponent } from './control-panel.component';
import { ObjectsListComponent } from './objects-list/objects-list.component';

@NgModule({
    declarations: [ControlPanelComponent, ObjectsListComponent],
    imports: [
        CommonModule,
        ControlPanelRoutingModule,
        IconModule,
        ButtonModule,
    ],
})
export class ControlPanelModule {}
