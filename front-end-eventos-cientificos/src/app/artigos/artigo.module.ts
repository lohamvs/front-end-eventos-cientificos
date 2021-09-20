import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtigoCreateComponent } from './artigo-create/artigo-create.component';
import { ArtigoComponent } from './artigo/artigo.component';
import { ArtigoEditComponent } from './artigo-edit/artigo-edit.component';
import { ArtigoRoutingModule } from './artigo-routing.module';
import { ArtigoService } from './shared/artigo.service';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MaterialModule } from '../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ArtigoCreateComponent,
    ArtigoComponent,
    ArtigoEditComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ArtigoRoutingModule
  ],
  exports: [
    ArtigoCreateComponent,
    ArtigoComponent,
    ArtigoEditComponent
  ],
  providers: [
    ArtigoService,
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'fill'} }
  ]
})
export class ArtigoModule { }
