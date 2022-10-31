import { Component, OnInit } from '@angular/core';
import Theme from 'src/app/constants/theme';
import { ThemeService } from 'src/app/services/themeService';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private themeService: ThemeService) {
    this.theme = themeService.getTheme();
  }

  theme : Theme = Theme.LIGHT_THEME;

  ngOnInit(): void {
  }

}
