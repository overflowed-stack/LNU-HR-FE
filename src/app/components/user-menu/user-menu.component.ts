import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ThemeService } from '@core/services/theme.service';
import { UserService } from '@core/services/user.service';
import { ChangePasswordComponent } from '../change-password/change-password.component';

@Component({
    selector: 'app-user-menu',
    templateUrl: './user-menu.component.html',
    styleUrls: ['./user-menu.component.scss'],
})
export class UserMenuComponent {
    public dropdownOpened: boolean = false;

    constructor(
        public readonly userService: UserService,
        private readonly themeService: ThemeService,
        private readonly dialog: MatDialog
    ) {}

    public dropdownToggle(): void {
        this.dropdownOpened = !this.dropdownOpened;
    }

    public passwordChangeClick(): void {
        const passwordResetPopupRef: MatDialogRef<ChangePasswordComponent> =
            this.dialog.open(ChangePasswordComponent);
    }

    public themeToggleClick(): void {
        this.themeService.toggleTheme();
    }

    public logOutClick(): void {
        this.userService.logout();
    }
}
