import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';

import { ButtonModule } from '@shared/button/button.module';
import { CirclePhotoModule } from '@shared/circle-photo/circle-photo.module';
import { IconModule } from '@shared/icon/icon.module';
import { InputModule } from '@shared/input/input.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { UserMenuComponent } from './components/user-menu/user-menu.component';

@NgModule({
    declarations: [
        AppComponent,
        LogInComponent,
        ForgotPasswordComponent,
        UserMenuComponent,
        ChangePasswordComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        ButtonModule,
        MatDialogModule,
        HttpClientModule,
        IconModule,
        CirclePhotoModule,
        InputModule,
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
