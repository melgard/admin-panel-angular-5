import {Component, OnInit} from '@angular/core';
import {SettingsService} from '../../services/services.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor(private _ajustes: SettingsService) {
  }

  static aplicarCheck(link: any) {
    const selectores: any = document.getElementsByClassName('selector');
    for (const ref of selectores) {
      ref.classList.remove('working');
    }
    link.classList.add('working');
  }

  ngOnInit() {
    this.colocarCheck();
  }

  cambiarTheme(theme: string, link: any) {
    AccountSettingsComponent.aplicarCheck(link);
    this._ajustes.applyTheme(theme);
  }


  colocarCheck() {
    const theme = this._ajustes.ajustes.theme;
    const selectores: any = document.getElementsByClassName('selector');
    for (const ref of selectores) {
      if (ref.getAttribute('data-theme') === theme) {
        ref.classList.add('working');
        break;
      }
    }
  }

}
