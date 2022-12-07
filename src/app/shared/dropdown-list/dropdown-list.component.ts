import { Component, Input } from '@angular/core';
import { INameAndId } from '@core/interfaces';

@Component({
    selector: 'app-dropdown-list',
    templateUrl: './dropdown-list.component.html',
    styleUrls: ['./dropdown-list.component.scss'],
})
export class DropdownListComponent {
    @Input() public placeholder: string = 'Оберіть...';
    @Input() public items: INameAndId[] = [];

    public isOpened: boolean = false;
    public selectedItem: INameAndId | null = null;

    public toggleState(): void {
        this.isOpened = !this.isOpened;
    }

    public selectItem(item: INameAndId): void {
        this.isOpened = false;

        this.selectedItem = item;
    }
}
