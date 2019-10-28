import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
//
import { AdminThemeModule } from './admin-theme.module';
import { AdminRoutingModule } from './admin-routing.module';
//
import { AdminHomeComponent } from './layouts/admin-home/admin-home.component';
import { EditionFormComponent } from './components/edition-form/edition-form.component';
import { ItemListComponent } from './components/item-list/item-list.component';
import { ModalEditionFormComponent } from './components/modal-edition-form/modal-edition-form.component';
//
import * as Store from './store/penality.reducer';
import { ModalRemoveItemComponent } from './components/modal-remove-item/modal-remove-item.component';

@NgModule({
  declarations: [
    AdminHomeComponent,
    EditionFormComponent,
    ItemListComponent,
    ModalEditionFormComponent,
    ModalRemoveItemComponent
  ],
  imports: [
    CommonModule,
    AdminThemeModule,
    ReactiveFormsModule,
    AdminRoutingModule,
    FormsModule,
    StoreModule.forRoot({ admin: Store.reducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25 // Retains last 25 states
    })
  ],
  entryComponents: [ModalEditionFormComponent, ModalRemoveItemComponent]
})
export class AdminModule {}
