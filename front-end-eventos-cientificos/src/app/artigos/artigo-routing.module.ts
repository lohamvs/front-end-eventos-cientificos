import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtigoCreateComponent } from './artigo-create/artigo-create.component';
import { ArtigoEditComponent } from './artigo-edit/artigo-edit.component';
import { ArtigoComponent } from './artigo/artigo.component';

const routes: Routes = [
  {
    path: 'create',
    component: ArtigoCreateComponent
  },
  {
    path: ':id',
    component: ArtigoComponent
  },
  {
    path: ':id/edit',
    component: ArtigoEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArtigoRoutingModule { }
