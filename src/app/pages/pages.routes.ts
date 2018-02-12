import {RouterModule, Routes} from '@angular/router';
import {ProgressComponent} from './progress/progress.component';
import {GraficasComponent} from './graficas/graficas.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {PagesComponent} from './pages.component';
import {AccountSettingsComponent} from './account-settings/account-settings.component';

const Pages_Routes: Routes = [
   {
     path: '',
     component: PagesComponent,
     children: [
       { path: 'progress', component: ProgressComponent},
       { path: 'graficas', component: GraficasComponent},
       { path: 'dashboard', component: DashboardComponent},
       {path: 'account-settings', component: AccountSettingsComponent},
       { path: '', redirectTo: '/dashboard', pathMatch: 'full'}
     ]
   }
 ];

export const PAGES_ROUTES = RouterModule.forChild(Pages_Routes);
