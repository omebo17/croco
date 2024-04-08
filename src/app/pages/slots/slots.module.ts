import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SlotsRoutingModule } from './slots-routing.module';
import { SlotsComponent } from './slots.component';
import { CategoriesComponent } from 'src/app/components/categories/categories.component';
import { FormsModule } from '@angular/forms';
import { ProvidersComponent } from 'src/app/components/providers/providers.component';
import { SlotComponent } from 'src/app/components/slot/slot.component';


@NgModule({
  declarations: [SlotsComponent],
  imports: [
    CommonModule,
    SlotsRoutingModule,
    CategoriesComponent,
    ProvidersComponent,
    SlotComponent
  ]
})
export class SlotsModule { }
