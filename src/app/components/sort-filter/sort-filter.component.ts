import { Component, Input, OnInit } from '@angular/core';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import Theme from 'src/app/constants/theme';

@Component({
  selector: 'app-sort-filter',
  templateUrl: './sort-filter.component.html',
  styleUrls: ['./sort-filter.component.scss']
})
export class SortFilterComponent implements OnInit {

  @Input() theme : Theme = Theme.LIGHT_THEME;

  constructor() { }

  ngOnInit(): void {
  }

  faFilter = faFilter;

}
