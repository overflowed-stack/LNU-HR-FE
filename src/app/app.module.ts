import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PaginationComponent } from './components/pagination/pagination.component';
import { HeaderUserInfoComponent } from './components/header-user-info/header-user-info.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { SortFilterComponent } from './components/sort-filter/sort-filter.component';
import { UserPageComponent } from './components/user-page/user-page.component';
import { RegisterComponent } from './components/register/register.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { HeaderMenuComponent } from './components/header-menu/header-menu.component';
import { ControlPanelComponent } from './components/control-panel/control-panel.component';
import { ListComponent } from './components/list/list.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { NgThemeDirective } from './directives/ng-theme.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    UserCardComponent,
    PaginationComponent,
    HeaderUserInfoComponent,
    LogInComponent,
    SortFilterComponent,
    UserPageComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    ChangePasswordComponent,
    HeaderMenuComponent,
    ControlPanelComponent,
    ListComponent,
    ListItemComponent,
    NgThemeDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
