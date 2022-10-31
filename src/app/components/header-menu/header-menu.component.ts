import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faUser, faArrowsRotate, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import Theme from 'src/app/constants/theme';
import { ThemeService } from 'src/app/services/themeService';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.scss']
})
export class HeaderMenuComponent implements OnInit {

  @Input() theme : Theme = Theme.LIGHT_THEME;
  @Output() openChangePasswordEventEmitter = new EventEmitter<void>();
  
  themeService: ThemeService;
  
  constructor(private _themeService: ThemeService) {
    this.theme = _themeService.getTheme();
    this.themeService = _themeService;
  }
  

  ngOnInit(): void {
  }

  changePassword() {
    this.openChangePasswordEventEmitter.emit();
  }

  changeTheme() {
    if (this.themeService.getTheme() === Theme.DARK_THEME) {
      this.themeService.setTheme(Theme.LIGHT_THEME);
    } else {
      this.themeService.setTheme(Theme.DARK_THEME);
    }
    
    window.location.reload();
  }

  faUser = faUser;
  faArrowsRotate = faArrowsRotate;
  faRightFromBracket = faRightFromBracket;

}
