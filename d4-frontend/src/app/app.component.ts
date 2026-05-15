import { Component, OnInit, Renderer2 } from '@angular/core';
import { TranslationService } from './_services/translation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'd4-frontend';

  private isDarkMode = false;

  constructor(private renderer: Renderer2, private translationService: TranslationService) {
    // Verifica o tema atual ao iniciar o aplicativo
    this.isDarkMode = localStorage.getItem('theme') === 'dark';
    this.applyTheme();
  }
  ngOnInit(): void {
    const lang = localStorage.getItem('lang') || 'enUS';
    this.translationService.setCurrentLang(lang);
  }

  toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode;
    localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
    this.applyTheme();
  }

  private applyTheme(): void {
    if (this.isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')

    }
  }
}
