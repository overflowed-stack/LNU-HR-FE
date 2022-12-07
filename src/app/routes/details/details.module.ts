import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IconModule } from '@shared/icon/icon.module';

import { DetailsRoutingModule } from './details-routing.module';
import { DetailsComponent } from './details.component';
import { HeaderComponent } from './header/header.component';
import { InfoboxComponent } from './infobox/infobox.component';
import { SubjectsInterestsComponent } from './subjects-interests/subjects-interests.component';

@NgModule({
    declarations: [
        DetailsComponent,
        SubjectsInterestsComponent,
        HeaderComponent,
        InfoboxComponent,
    ],
    imports: [CommonModule, DetailsRoutingModule, IconModule],
})
export class DetailsModule {}
