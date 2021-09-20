import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VolumeCreateComponent } from './volume-create/volume-create.component';
import { VolumeEditComponent } from './volume-edit/volume-edit.component';
import { VolumeListComponent } from './volume-list/volume-list.component';
import { VolumeComponent } from './volume/volume.component';

const routes: Routes = [
  {
    path: '',
    component: VolumeListComponent
  },
  {
    path: 'create',
    component: VolumeCreateComponent
  },
  {
    path: ':id',
    component: VolumeComponent
  },
  {
    path: ':id/edit',
    component: VolumeEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VolumeRoutingModule { }
