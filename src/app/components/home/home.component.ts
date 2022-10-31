import { Component, OnInit } from '@angular/core';
import Theme from 'src/app/constants/theme';
import { ThemeService } from 'src/app/services/themeService';
import IUser from '../../interfaces/IUser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private themeService: ThemeService) {
    this.theme = themeService.getTheme();
    console.log(this.theme);
    for (let i = 0; i < 20; ++i) {
      this.users.push({
        pib: 'Борисюк Ярина Євгенівна',
        sex: 'Жінка',
        age: '69 днів після 4.20',
        phoneNumber: '+(032)239-41-78',
        role: 'admin',
        img: 'https://i1.sndcdn.com/avatars-000620693316-ukl0j7-t500x500.jpg'
      });
    }
  }

  theme : Theme = Theme.LIGHT_THEME;

  ngOnInit(): void {
  }

  users: IUser[]  = []

}