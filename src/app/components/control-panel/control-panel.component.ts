import { Component, OnInit } from '@angular/core';
import Theme from 'src/app/constants/theme';
import { ThemeService } from 'src/app/services/themeService';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.scss']
})
export class ControlPanelComponent implements OnInit {

  constructor(private themeService: ThemeService) {
    this.theme = themeService.getTheme();
  }

  theme : Theme = Theme.LIGHT_THEME;

  ngOnInit(): void {
  }

}
