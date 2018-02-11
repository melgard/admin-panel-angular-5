import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {ProgressComponent} from './pages/progress/progress.component';
import {GraficasComponent} from './pages/graficas/graficas.component';
import {NotFoundComponent} from './shared/not-found/not-found.component';
import {PagesComponent} from './pages/pages.component';
import {DashboardComponent} from './pages/dashboard/dashboard.component';

const appRoutes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: 'progress', component: ProgressComponent},
      { path: 'graficas', component: GraficasComponent},
      { path: 'dashboard', component: DashboardComponent},
      { path: '', redirectTo: '/dashboard', pathMatch: 'full'}
    ]
  },
  { path: 'login', component: LoginComponent},
  { path: 'register', component: LoginComponent},
  { path: '**', component: NotFoundComponent}
];


export const APP_ROUTES = RouterModule.forRoot(appRoutes, {useHash: true});
