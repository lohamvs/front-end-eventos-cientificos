import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VolumeService } from './shared/volume.service';
import { VolumeListComponent } from './volume-list/volume-list.component';
import { MaterialModule } from '../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { VolumeRoutingModule } from './volume-routing.module';

@NgModule({
  declarations: [
    VolumeListComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    VolumeRoutingModule
  ],
  exports: [
    VolumeListComponent
  ],
  providers: [
    VolumeService
  ]
})
export class VolumeModule { }
