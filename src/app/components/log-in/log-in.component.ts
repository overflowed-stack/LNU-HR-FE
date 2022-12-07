import { DialogRef } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { UserService } from '@core/services/user.service';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';

@Component({
    selector: 'app-log-in',
    templateUrl: './log-in.component.html',
    styleUrls: ['./log-in.component.scss'],
})
export class LogInComponent {
    constructor(
        private readonly dialogRef: DialogRef,
        private readonly dialog: MatDialog,
        private readonly userService: UserService
    ) {}

    public closeClick(): void {
        this.dialogRef.close();
    }

    public forgotPasswordClick(): void {
        const forgotPasswordPopupRef: MatDialogRef<ForgotPasswordComponent> =
            this.dialog.open(ForgotPasswordComponent);
    }

    public logInClick(): void {
        this.userService.auth();

        this.dialogRef.close();
    }
}
