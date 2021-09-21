import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutorCreateComponent } from './autor-create/autor-create.component';
import { AutorEditComponent } from './autor-edit/autor-edit.component';
import { AutorListComponent } from './autor-list/autor-list.component';
import { AutorComponent } from './autor/autor.component';

const routes: Routes = [
  {
    path: '',
    component: AutorListComponent
  },
  {
    path: 'create',
    component: AutorCreateComponent
  },
  {
    path: ':id',
    component: AutorComponent
  },
  {
    path: ':id/edit',
    component: AutorEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutorRoutingModule { }
