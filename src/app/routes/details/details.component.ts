import { Component, OnInit } from '@angular/core';
import { Gender, IPerson } from '@core/interfaces';
import { PersonService } from '@core/services/persons.service';
import { tap } from 'rxjs';

@Component({
    selector: 'app-user-page',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
    public person: IPerson = {
        bio: '',
        birthday: new Date(0),
        degree: {
            id: '',
            name: '',
        },
        id: '',
        email: '',
        experience: 0,
        firstName: '',
        gender: Gender.Male,
        interests: [],
        lastName: '',
        phone: '',
        photo: '',
        publications: [],
        subjects: [],
        surname: '',
    };

    public get personName(): string {
        return `${this.person.lastName} ${this.person.firstName} ${this.person.surname}`;
    }

    public get publications(): string {
        return this.person.publications.reduce(
            (accumulator: string, currentPublication: string) =>
                accumulator + currentPublication,
            ''
        );
    }

    constructor(private readonly personService: PersonService) {}

    public ngOnInit(): void {
        this.personService
            .getPerson('')
            .pipe(
                tap((person: IPerson) => {
                    this.person = person;
                })
            )
            .subscribe();
    }
}
