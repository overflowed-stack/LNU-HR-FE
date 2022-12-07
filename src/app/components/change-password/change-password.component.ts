import { DialogRef } from '@angular/cdk/dialog';
import { Component } from '@angular/core';

@Component({
    selector: 'app-change-password',
    templateUrl: './change-password.component.html',
    styleUrls: ['./change-password.component.scss'],
})
export class ChangePasswordComponent {
    constructor(private readonly dialogRef: DialogRef) {}

    public closeClick(): void {
        this.dialogRef.close();
    }

    public changeClick(): void {
        this.dialogRef.close();
    }
}
