import { Component, OnInit } from '@angular/core';
import { INameAndId } from '@core/interfaces';
import { DegreesService } from '@core/services/degrees.service';
import { PersonService } from '@core/services/persons.service';
import { SubjectsService } from '@core/services/subjects.service';
import { tap } from 'rxjs';

@Component({
    selector: 'app-control-panel',
    templateUrl: './control-panel.component.html',
    styleUrls: ['./control-panel.component.scss'],
})
export class ControlPanelComponent implements OnInit {
    public personnel: INameAndId[] = [];
    public degrees: INameAndId[] = [];
    public subjects: INameAndId[] = [];

    constructor(
        private readonly personService: PersonService,
        private readonly degreesService: DegreesService,
        private readonly subjectsService: SubjectsService
    ) {}

    public ngOnInit(): void {
        this.personService
            .getPersonnel()
            .pipe(
                tap((personnel: INameAndId[]) => {
                    this.personnel = personnel;
                })
            )
            .subscribe();

        this.degreesService
            .getDegrees()
            .pipe(
                tap((degrees: INameAndId[]) => {
                    this.degrees = degrees;
                })
            )
            .subscribe();

        this.subjectsService
            .getSubjects()
            .pipe(
                tap((subjects: INameAndId[]) => {
                    this.subjects = subjects;
                })
            )
            .subscribe();
    }
}
