import {NgModule} from '@angular/core';
import {BreadcrumbsComponent} from './breadcrumbs/breadcrumbs.component';
import {HeaderComponent} from './header/header.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {NotFoundComponent} from './not-found/not-found.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent,
    NotFoundComponent
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent,
    NotFoundComponent
  ]
})

export class SharedModule {}
