import { Component, OnInit } from '@angular/core';
import { faPhone, faEnvelope, faBook, faChalkboard, faMicroscope } from '@fortawesome/free-solid-svg-icons';
import Theme from 'src/app/constants/theme';
import { ThemeService } from 'src/app/services/themeService';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {

  constructor(private themeService: ThemeService) {
    this.theme = themeService.getTheme();
    console.log(this.theme);
  }

  ngOnInit(): void {
  }

  faPhone = faPhone;
  faEnvelope = faEnvelope;
  faBook = faBook;
  faChalkboard = faChalkboard;
  faMicroscope = faMicroscope;
  theme : Theme = Theme.LIGHT_THEME;
}
