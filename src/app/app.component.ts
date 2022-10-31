import { Component, QueryList, ViewChildren } from '@angular/core';
import { NgThemeDirective } from './directives/ng-theme.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lnu-hr-fe';
  modalOpened = false;

  setModalState(isOpened: boolean) {
    this.modalOpened = isOpened;
  }

  changeTheme() {
    
  }
}
