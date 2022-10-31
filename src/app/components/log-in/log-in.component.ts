import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import Theme from 'src/app/constants/theme';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  @Input() theme : Theme = Theme.LIGHT_THEME;
  @Output() closeEventEmitter = new EventEmitter<void>();
  @Output() openRegisterEventEmitter = new EventEmitter<void>();
  @Output() openForgotPasswordEventEmitter = new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {
  }

  close() {
    this.closeEventEmitter.emit();
  }

  logIn() {

  }

  register() {
    this.close();
    this.openRegisterEventEmitter.emit();
  }

  forgotPassword() {
    this.close();
    this.openForgotPasswordEventEmitter.emit();
  }

  faXmark = faXmark;

}
