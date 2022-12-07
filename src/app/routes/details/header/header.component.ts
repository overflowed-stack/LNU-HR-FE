import { Component, Input } from '@angular/core';
import { Gender, INameAndId } from '@core/interfaces';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
    @Input() public name: string = '';
    @Input() public degree: INameAndId = {
        id: '',
        name: '',
    };
    @Input() public birthDate: Date = new Date(0);
    @Input() public experience: number = 0;
    @Input() public gender: Gender = Gender.Male;
    @Input() public phone: string = '';
    @Input() public mail: string = '';
    @Input() public photo: string = '';

    public getGenderString(gender: Gender): string {
        switch (gender) {
            case Gender.Male:
                return 'Чоловік';

            case Gender.Female:
                return 'Жінка';
        }
    }
}
