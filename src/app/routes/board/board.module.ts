import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PagesService } from '@core/services/pages.service';
import { ButtonModule } from '@shared/button/button.module';
import { CirclePhotoModule } from '@shared/circle-photo/circle-photo.module';
import { DropdownListModule } from '@shared/dropdown-list/dropdown-list.module';
import { IconModule } from '@shared/icon/icon.module';
import { InputModule } from '@shared/input/input.module';

import { BoardRoutingModule } from './board-routing.module';

import { BoardComponent } from './board.component';
import { PaginationComponent } from './pagination/pagination.component';
import { SortFilterComponent } from './sort-filter/sort-filter.component';
import { UserCardComponent } from './user-card/user-card.component';

@NgModule({
    declarations: [
        BoardComponent,
        PaginationComponent,
        SortFilterComponent,
        UserCardComponent,
    ],
    providers: [PagesService],
    imports: [
        CommonModule,
        BoardRoutingModule,
        IconModule,
        CirclePhotoModule,
        ButtonModule,
        DropdownListModule,
        InputModule,
    ],
})
export class BoardModule {}
