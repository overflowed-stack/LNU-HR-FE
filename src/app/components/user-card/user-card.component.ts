import { Component, Input, OnInit } from '@angular/core';
import { faMarsAndVenus, faCakeCandles, faPhone, faPencil, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import Theme from 'src/app/constants/theme';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {

  @Input() pib: string = '';
  @Input() sex: string = '';
  @Input() age: string = '';
  @Input() phoneNumber: string = '';
  @Input() role: string = '';
  @Input() img: string = '';
  @Input() theme : Theme = Theme.LIGHT_THEME;
  
  constructor() { }

  ngOnInit(): void {
  }
  
  faMarsAndVenus = faMarsAndVenus;
  faCakeCandles = faCakeCandles;
  faPhone = faPhone;
  faPencil = faPencil;
  faTrashCan = faTrashCan;

  openDetails() {
    
  }
  openEdit() {
    
  }
  delete() {
    
  }
}
