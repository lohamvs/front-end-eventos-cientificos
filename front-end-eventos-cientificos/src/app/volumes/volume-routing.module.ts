import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VolumeListComponent } from './volume-list/volume-list.component';
import { VolumeComponent } from './volume/volume.component';

const routes: Routes = [
  {
    path: '',
    component: VolumeListComponent
  },
  {
    path: ':id',
    component: VolumeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VolumeRoutingModule { }
