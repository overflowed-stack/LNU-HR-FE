import { Component, Input, OnInit } from '@angular/core';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Theme from 'src/app/constants/theme';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  @Input() theme : Theme = Theme.LIGHT_THEME;
  constructor() { }

  ngOnInit(): void {
  }

  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;

}
