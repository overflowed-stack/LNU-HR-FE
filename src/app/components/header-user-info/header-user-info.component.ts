import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Theme from 'src/app/constants/theme';

@Component({
  selector: 'app-header-user-info',
  templateUrl: './header-user-info.component.html',
  styleUrls: ['./header-user-info.component.scss']
})
export class HeaderUserInfoComponent implements OnInit {

  @Input() img: string = '';
  @Input() name: string = '';
  @Input() theme : Theme = Theme.LIGHT_THEME;
  @Output() openChangePasswordEventEmitter = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  changePassword() {
    this.openChangePasswordEventEmitter.emit();
  }

  showMenu = false;

  faChevronDown = faChevronDown;

}
