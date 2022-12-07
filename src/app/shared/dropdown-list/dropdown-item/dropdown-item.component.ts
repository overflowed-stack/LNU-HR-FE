import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-dropdown-item',
    templateUrl: './dropdown-item.component.html',
    styleUrls: ['./dropdown-item.component.scss'],
})
export class DropdownItemComponent {
    @Input() public displayText: string = '';
}
