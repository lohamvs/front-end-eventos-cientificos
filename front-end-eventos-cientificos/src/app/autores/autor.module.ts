import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutorComponent } from './autor/autor.component';
import { AutorCreateComponent } from './autor-create/autor-create.component';
import { AutorEditComponent } from './autor-edit/autor-edit.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { AutorRoutingModule } from './autor-routing.module';
import { AutorService } from './shared/autor.service';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { AutorListComponent } from './autor-list/autor-list.component';

@NgModule({
  declarations: [
    AutorComponent,
    AutorCreateComponent,
    AutorEditComponent,
    AutorListComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    AutorRoutingModule
  ],
  exports: [
    AutorComponent,
    AutorCreateComponent,
    AutorEditComponent
  ],
  providers: [
    AutorService,
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'fill'} }
  ]
})
export class AutorModule { }
