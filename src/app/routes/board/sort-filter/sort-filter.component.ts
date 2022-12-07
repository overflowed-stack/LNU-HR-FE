import { Component, OnInit } from '@angular/core';
import { sortOptions } from '@core/constants';
import { INameAndId } from '@core/interfaces';
import { DegreesService } from '@core/services/degrees.service';
import { SubjectsService } from '@core/services/subjects.service';
import { tap } from 'rxjs';

@Component({
    selector: 'app-sort-filter',
    templateUrl: './sort-filter.component.html',
    styleUrls: ['./sort-filter.component.scss'],
})
export class SortFilterComponent implements OnInit {
    public degrees: INameAndId[] = [];
    public subjects: INameAndId[] = [];
    public ascendingSort: boolean = true;
    public readonly sortOptions: INameAndId[] = sortOptions;

    constructor(
        private readonly degreesService: DegreesService,
        private readonly subjectsService: SubjectsService
    ) {}

    public ngOnInit(): void {
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

    public toggleSortDirection(): void {
        this.ascendingSort = !this.ascendingSort;
    }
}
