import { Component, OnInit, Input } from '@angular/core';
import { faSitemap, faBook, faPeopleGroup, faPlus } from '@fortawesome/free-solid-svg-icons';
import Theme from 'src/app/constants/theme';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() theme : Theme = Theme.LIGHT_THEME;
  constructor() { }

  ngOnInit(): void {
  }
  faSitemap = faSitemap;
  faBook = faBook;
  faPeopleGroup = faPeopleGroup;
  faPlus = faPlus;
}
