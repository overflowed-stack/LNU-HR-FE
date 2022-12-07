import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { IconsRegistryService } from '@core/services/icons-registry.service';
import { ThemeService } from '@core/services/theme.service';
import { UserService } from '@core/services/user.service';
import { LogInComponent } from './components/log-in/log-in.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
    public readonly appName: string = 'HR Management';

    constructor(
        public readonly userService: UserService,
        private readonly themeService: ThemeService,
        private readonly dialog: MatDialog,
        private readonly iconsRegistry: IconsRegistryService
    ) {}

    public ngOnInit(): void {
        this.themeService.themeInit();
    }

    public ngAfterViewInit(): void {
        this.iconsRegistry.setIconSet('/assets/icon-set.svg');
    }

    public openSignInPopup(): void {
        const signInPopupRef: MatDialogRef<LogInComponent> = this.dialog.open(
            LogInComponent,
            {
                panelClass: 'dialog',
            }
        );
    }
}
