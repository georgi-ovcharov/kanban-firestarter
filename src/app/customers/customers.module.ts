import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ListPageComponent } from './list-page/list-page.component';
import { DetailPageComponent } from './detail-page/detail-page.component';

@NgModule({
  declarations: [ListPageComponent, DetailPageComponent],
  imports: [CommonModule, CustomersRoutingModule, SharedModule],
})
export class CustomersModule {}
