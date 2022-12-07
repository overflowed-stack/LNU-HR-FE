import { Component, Input } from '@angular/core';
import { INameAndId } from '@core/interfaces';

@Component({
    selector: 'app-subjects-interests',
    templateUrl: './subjects-interests.component.html',
    styleUrls: ['./subjects-interests.component.scss'],
})
export class SubjectsInterestsComponent {
    @Input() public subjects: INameAndId[] = [];
    @Input() public interests: string[] = [];
}
