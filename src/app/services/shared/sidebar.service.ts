import {Injectable} from '@angular/core';

@Injectable()
export class SidebarService {

  public menu: IMenu[] = [
    {
      titulo: 'Principal',
      icono: 'mdi mdi-gauge',
      submenu: [
        {
          titulo: 'Dashboard',
          url: '/dashboard'
        },
        {
          titulo: 'Progress',
          url: '/progress'
        },
        {
          titulo: 'Gráficas',
          url: '/graficas'
        }
      ],
    }
  ];

  constructor() { }

}

interface IMenu {
  titulo: string;
  icono?: string;
  submenu?: IMenu[];
  url?: string;
}
