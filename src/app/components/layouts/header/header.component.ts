import { Component, OnInit } from '@angular/core';
import { browserRefresh } from 'src/app/app.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isDarkTheme: boolean;
  iconThemeMode: string;
  iconMoon = 'fal fa-solid fa-moon';
  iconSun = 'fal fa-solid fa-sun';
  constructor() { }

  ngOnInit(): void {
    this.updateThemeAndToggle();
  }

  updateThemeAndToggle(): void{
    this.isDarkTheme = localStorage.getItem('theme-mode') === 'dark';
    this.iconThemeMode = this.isDarkTheme ? this.iconMoon : this.iconSun ;
    if (browserRefresh && this.isDarkTheme){
      document.body.classList.toggle('dark-theme');
    }
  }

  toggleDarkTheme(): void {
    document.body.classList.toggle('dark-theme');
    this.iconThemeMode = this.updateSwithThemeMode();
    localStorage.setItem('theme-mode', localStorage.getItem('theme-mode') === 'dark' ? 'light' : 'dark');
  }

  updateSwithThemeMode(): string{
    return this.isDarkTheme ? this.iconSun : this.iconMoon;
  }
}
