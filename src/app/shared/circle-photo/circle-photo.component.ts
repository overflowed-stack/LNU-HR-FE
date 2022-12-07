import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-circle-photo',
    templateUrl: './circle-photo.component.html',
    styleUrls: ['./circle-photo.component.scss'],
})
export class CirclePhotoComponent {
    @Input() imageSource: string = '';
}
