import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {NotFoundComponent} from './shared/not-found/not-found.component';

const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: LoginComponent},
  {path: '**', component: NotFoundComponent}
];


export const APP_ROUTES = RouterModule.forRoot(appRoutes, {useHash: true});
