import {Inject, Injectable} from '@angular/core';
import {DOCUMENT} from '@angular/platform-browser';

@Injectable()
export class SettingsService {

  ajustes: IAJustes = {
    theme: 'default',
    themeUrl: 'assets/css/colors/default.css'
  };

  constructor(@Inject(DOCUMENT) private _document) {
    this.getAjustes();
    this.applyTheme(this.ajustes.theme);
  }

  setAjustes() {
    localStorage.setItem('ajustes', JSON.stringify(this.ajustes));
  }

  getAjustes() {
    if (localStorage.getItem('ajustes')) {
      this.ajustes = JSON.parse(localStorage.getItem('ajustes'));
    }
    this.applyTheme(this.ajustes.theme);
  }

  applyTheme(theme: string) {
    const url = `assets/css/colors/${theme}.css`;
    this._document.getElementById('app-theme').setAttribute('href', url);
    this.ajustes.theme = theme;
    this.ajustes.themeUrl = url;
    this.setAjustes();
  }

}

interface IAJustes {
  themeUrl: string;
  theme: string;
}
