import { Component, Input } from '@angular/core';
import { INameAndId } from '@core/interfaces';

@Component({
    selector: 'app-objects-list',
    templateUrl: './objects-list.component.html',
    styleUrls: ['./objects-list.component.scss'],
})
export class ObjectsListComponent {
    @Input() public iconId: string = '';
    @Input() public title: string = '';
    @Input() public resetable: boolean = false;
    @Input() public items: INameAndId[] = [];
}
