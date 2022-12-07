import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'app-forgot-password',
    templateUrl: './forgot-password.component.html',
    styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent {
    constructor(
        private readonly dialogRef: MatDialogRef<ForgotPasswordComponent>
    ) {}

    public closeClick(): void {
        this.dialogRef.close();
    }

    public restoreClick(): void {}
}
