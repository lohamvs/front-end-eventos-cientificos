import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VolumeService } from './shared/volume.service';
import { VolumeListComponent } from './volume-list/volume-list.component';
import { MaterialModule } from '../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { VolumeRoutingModule } from './volume-routing.module';
import { VolumeEditComponent } from './volume-edit/volume-edit.component';
import { FormsModule } from '@angular/forms';
import { VolumeCreateComponent } from './volume-create/volume-create.component';
import { VolumeComponent } from './volume/volume.component';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';

@NgModule({
  declarations: [
    VolumeListComponent,
    VolumeComponent,
    VolumeEditComponent,
    VolumeCreateComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    VolumeRoutingModule
  ],
  exports: [
    VolumeListComponent,
    VolumeComponent,
    VolumeEditComponent,
    VolumeCreateComponent
  ],
  providers: [
    VolumeService,
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'fill'} }
  ]
})
export class VolumeModule { }
