import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { itemComponent } from './item/item.component';
import { itemsComponent } from './items.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [itemsComponent, itemComponent],
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports: [itemsComponent],
})
export class itemsModule {}
