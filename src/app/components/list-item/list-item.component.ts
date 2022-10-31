import { Component, OnInit, Input } from '@angular/core';
import { faArrowsRotate, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import Theme from 'src/app/constants/theme';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

  @Input() theme : Theme = Theme.LIGHT_THEME;
  constructor() { }

  ngOnInit(): void {
  }

  faArrowsRotate = faArrowsRotate;
  faEdit = faEdit;
  faTrash = faTrash;

}
