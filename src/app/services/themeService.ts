import { Injectable } from '@angular/core';
import Theme from '../constants/theme';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {

  theme : Theme;

  constructor() {
    this.theme = localStorage.getItem('theme') === 'dark-theme' ? Theme.DARK_THEME : Theme.LIGHT_THEME;
  }

  getTheme() : Theme {
    return localStorage.getItem('theme') === 'dark-theme' ? Theme.DARK_THEME : Theme.LIGHT_THEME;
  }

  setTheme(newTheme: Theme) {
    localStorage.setItem('theme', newTheme);
  }

}