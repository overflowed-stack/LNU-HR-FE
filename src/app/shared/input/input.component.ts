import {
    Component,
    EventEmitter,
    Input,
    OnDestroy,
    OnInit,
    Output
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit, OnDestroy {
    @Input() public placeholder: string = '';
    @Input() public value: unknown;
    @Input() public innerLinkText: string = '';

    @Output() private readonly valueChange: EventEmitter<unknown> =
        new EventEmitter<unknown>();
    @Output() private readonly innerLinkClick: EventEmitter<void> =
        new EventEmitter<void>();

    public readonly formControl: FormControl;
    private readonly subscription: Subscription = new Subscription();

    constructor() {
        this.formControl = new FormControl();
    }

    public ngOnInit(): void {
        const valueChangesSub: Subscription =
            this.formControl.valueChanges.subscribe((currentValue: unknown) => {
                this.valueChange.emit(currentValue);
            });

        this.subscription.add(valueChangesSub);
    }

    public ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    public onInnerLinkClick(): void {
        this.innerLinkClick.emit();
    }
}
