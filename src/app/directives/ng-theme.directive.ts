import { Directive, HostBinding } from '@angular/core';

@Directive({selector: '[appNgTheme]'})
export class NgThemeDirective {
  constructor() {}
  theme: string = localStorage.getItem('theme') || 'Dark';
  @HostBinding('class.light-theme') lightTheme: boolean = this.theme === 'Light';
  @HostBinding('class.dark-theme') darkTheme: boolean = this.theme === 'Dark';

  toggleTheme(): void {
    if (this.theme === 'Light') {
      this.lightTheme = false;
      this.darkTheme = true;
      this.theme = 'Dark';
    } else {
      this.darkTheme = false;
      this.lightTheme = true;
      this.theme = 'Light';
    }
    localStorage.setItem('theme', this.theme);
  }
}