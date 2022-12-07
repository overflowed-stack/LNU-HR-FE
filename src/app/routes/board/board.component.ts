import { Component, OnInit } from '@angular/core';
import { IPage } from '@core/interfaces';
import { PagesService } from '@core/services/pages.service';
import { tap } from 'rxjs';

@Component({
    selector: 'app-home',
    templateUrl: './board.component.html',
    styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
    public currentPageNumber: number = 1;
    public currentPage: IPage = {
        pagesAmount: 0,
        personnel: [],
    };

    constructor(private readonly pagesService: PagesService) {}

    public ngOnInit(): void {
        this.pagesService
            .getPage(1)
            .pipe(
                tap((page: IPage) => {
                    this.currentPage = page;
                })
            )
            .subscribe();
    }

    public onPageChange(newPage: number): void {
        this.currentPageNumber = newPage;
    }
}
