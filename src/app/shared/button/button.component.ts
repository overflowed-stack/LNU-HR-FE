import {
    Component,
    EventEmitter,
    HostBinding,
    HostListener,
    Input,
    Output
} from '@angular/core';

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
    @HostBinding('class') @Input() public color:
        | 'blue'
        | 'yellow'
        | 'red'
        | 'gray' = 'blue';
    @HostBinding('class.glowing') @Input() public glowing: boolean = false;
    @HostBinding('class.small') @Input() public small: boolean = false;
    @HostBinding('class.disabled') @Input() public disabled: boolean = false;

    @HostBinding('class.icon-only') public get iconOnly(): boolean {
        return !this.text;
    }

    @Input() public text: string = '';
    @Input() public iconId: string = '';

    @Output() buttonClick: EventEmitter<void> = new EventEmitter<void>();

    @HostListener('click') public onClick(): void {
        if (!this.disabled) {
            this.buttonClick.emit();
        }
    }
}
