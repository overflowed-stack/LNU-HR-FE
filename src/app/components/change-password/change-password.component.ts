import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import Theme from 'src/app/constants/theme';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  @Input() theme : Theme = Theme.LIGHT_THEME;
  @Output() closeEventEmitter = new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {
  }

  close() {
    this.closeEventEmitter.emit();
  }

  change() {
    // this.close();
  }

  faXmark = faXmark;

}
