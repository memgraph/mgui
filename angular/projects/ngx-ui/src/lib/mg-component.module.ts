import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {LegalComponent} from './components/legal/legal.component';
import {
  PaginationComponent
} from './components/pagination/pagination.component';
import {ViewTitleComponent} from './components/view-title/view-title.component';

@NgModule({
  declarations : [
    LegalComponent,
    PaginationComponent,
    ViewTitleComponent,
  ],
  imports : [
    CommonModule,
  ],
  exports : [
    LegalComponent,
    PaginationComponent,
    ViewTitleComponent,
  ]
})
export class MgComponentModule {
}
