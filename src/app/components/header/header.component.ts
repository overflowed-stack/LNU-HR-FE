import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import Theme from 'src/app/constants/theme';
import { ThemeService } from 'src/app/services/themeService';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() modalChangeEventEmitter = new EventEmitter<boolean>();

  constructor(private themeService: ThemeService) {
    this.theme = themeService.getTheme();
  }

  ngOnInit(): void {
  }

  theme : Theme = Theme.LIGHT_THEME;
  isLogInModalOpen = false;
  isRegisterModalOpen = false;
  isForgotPasswordModalOpen = false;
  isChangePasswordModalOpen = false;

  open(modalName: string) {
    if (modalName === 'isLogInModalOpen') {
      this.isLogInModalOpen = true;
    } else if (modalName === 'isRegisterModalOpen') {
      this.isRegisterModalOpen = true;
    } else if (modalName === 'isForgotPasswordModalOpen') {
      this.isForgotPasswordModalOpen = true;
    } else if (modalName === 'isChangePasswordModalOpen') {
      this.isChangePasswordModalOpen = true;
    }
    this.modalChangeEventEmitter.emit(true);
  }

  close(modalName: string) {
    if (modalName === 'isLogInModalOpen') {
      this.isLogInModalOpen = false;
    } else if (modalName === 'isRegisterModalOpen') {
      this.isRegisterModalOpen = false;
    } else if (modalName === 'isForgotPasswordModalOpen') {
      this.isForgotPasswordModalOpen = false;
    } else if (modalName === 'isChangePasswordModalOpen') {
      this.isChangePasswordModalOpen = false;
    }
    this.modalChangeEventEmitter.emit(false);
  }

  user = null;

}
