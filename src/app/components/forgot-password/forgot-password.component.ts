import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import Theme from 'src/app/constants/theme';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  @Input() theme : Theme = Theme.LIGHT_THEME;
  @Output() closeEventEmitter = new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {
  }

  close() {
    this.closeEventEmitter.emit();
  }

  restore() {
    // this.close();
  }

  faXmark = faXmark;


}
