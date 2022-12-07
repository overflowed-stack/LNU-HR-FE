import {
    Component,
    EventEmitter,
    Input,
    OnChanges,
    Output,
    SimpleChanges
} from '@angular/core';

const visiblePagesAmount: number = 5;

@Component({
    selector: 'app-pagination',
    templateUrl: './pagination.component.html',
    styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnChanges {
    @Input() public currentPageNumber: number = 1;

    @Input() public pagesCount: number = 1;

    @Output() public pageChange: EventEmitter<number> =
        new EventEmitter<number>();

    public pages: number[] = [1];

    public hasManyPreviousPages(): boolean {
        return this.currentPageNumber - Math.floor(visiblePagesAmount / 2) > 1;
    }

    public hasManyNextPages(): boolean {
        return (
            this.currentPageNumber + Math.floor(visiblePagesAmount / 2) <
            this.pagesCount
        );
    }

    public ngOnChanges(changes: SimpleChanges): void {
        if (changes['pagesCount'] || changes['currentPageNumber']) {
            const startingPageNumber: number = this.hasManyPreviousPages()
                ? this.currentPageNumber - Math.floor(visiblePagesAmount / 2)
                : 1;
            const endingPageNumber: number = this.hasManyNextPages()
                ? this.currentPageNumber + Math.floor(visiblePagesAmount / 2)
                : this.pagesCount;

            this.pages = [];

            for (let i = startingPageNumber; i < endingPageNumber + 1; ++i) {
                this.pages.push(i);
            }
        }
    }

    public onPageChange(newPageNumber: number): void {
        this.pageChange.emit(newPageNumber);
    }
}
