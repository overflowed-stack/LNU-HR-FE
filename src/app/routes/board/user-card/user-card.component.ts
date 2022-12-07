import { Component, Input } from '@angular/core';
import { Gender, IPersonBase, UserRole } from '@core/interfaces';
import { UserService } from '@core/services/user.service';

@Component({
    selector: 'app-user-card',
    templateUrl: './user-card.component.html',
    styleUrls: ['./user-card.component.scss'],
})
export class UserCardComponent {
    @Input() public person: IPersonBase = {
        birthday: new Date(0),
        id: '',
        firstName: '',
        gender: Gender.Male,
        lastName: '',
        phone: '',
        photo: '',
        surname: '',
    };

    public get personName(): string {
        return `${this.person.lastName} ${this.person.firstName} ${this.person.surname}`;
    }

    public get personGender(): string {
        switch (this.person.gender) {
            case Gender.Male:
                return 'Чоловік';

            case Gender.Female:
                return 'Жінка';
        }
    }

    public get personAge(): number {
        return (
            new Date(
                Date.now() - new Date(this.person.birthday).getMilliseconds()
            ).getFullYear() - 1970
        );
    }

    public get canEdit(): boolean {
        return [UserRole.Admin, UserRole.Personnel].includes(
            this.userService.userRole
        );
    }

    public get canDelete(): boolean {
        return [UserRole.Admin].includes(this.userService.userRole);
    }

    constructor(private readonly userService: UserService) {}
}
