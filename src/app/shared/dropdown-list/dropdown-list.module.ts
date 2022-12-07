import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IconModule } from '@shared/icon/icon.module';
import { DropdownItemComponent } from './dropdown-item/dropdown-item.component';
import { DropdownListComponent } from './dropdown-list.component';

@NgModule({
    declarations: [DropdownListComponent, DropdownItemComponent],
    imports: [CommonModule, IconModule],
    exports: [DropdownListComponent],
})
export class DropdownListModule {}
