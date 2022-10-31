import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import Theme from 'src/app/constants/theme';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  @Input() theme : Theme = Theme.LIGHT_THEME;
  @Output() closeEventEmitter = new EventEmitter<void>();
  @Output() openLogInEventEmitter = new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {
  }

  close() {
    this.closeEventEmitter.emit();
  }

  logIn() {
    this.close();
    this.openLogInEventEmitter.emit();
  }
  register() {
    
  }

  faXmark = faXmark;

}
