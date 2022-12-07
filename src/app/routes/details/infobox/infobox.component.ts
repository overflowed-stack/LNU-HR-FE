import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-infobox',
    templateUrl: './infobox.component.html',
    styleUrls: ['./infobox.component.scss'],
})
export class InfoboxComponent {
    @Input() iconId: string = '';
    @Input() title: string = '';
    @Input() content: string = '';
}
