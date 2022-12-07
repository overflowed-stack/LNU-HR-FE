import {
    AfterViewInit,
    Component,
    ElementRef,
    Input,
    OnChanges,
    SimpleChanges,
    ViewChild
} from '@angular/core';
import { IconsRegistryService } from '@core/services/icons-registry.service';
import { tap } from 'rxjs';

@Component({
    selector: 'app-icon',
    templateUrl: './icon.component.html',
    styleUrls: ['./icon.component.scss'],
})
export class IconComponent implements OnChanges, AfterViewInit {
    @Input() public iconId: string = '';

    @ViewChild('iconWrapper') iconWrapper!: ElementRef<SVGElement>;

    constructor(private readonly iconRegistry: IconsRegistryService) {}

    public ngOnChanges(changes: SimpleChanges): void {
        if (!!changes['iconId'] && !!this.iconWrapper) {
            this.setIcon();
        }
    }

    public ngAfterViewInit(): void {
        if (this.iconId) {
            this.setIcon();
        }
    }

    private setIcon(): void {
        this.iconRegistry
            .getIcon(this.iconId)
            .pipe(
                tap((iconContent: string) => {
                    this.iconWrapper.nativeElement.innerHTML = iconContent;
                })
            )
            .subscribe();
    }
}
