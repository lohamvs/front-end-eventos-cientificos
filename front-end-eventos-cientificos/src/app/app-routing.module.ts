import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'volumes',
    loadChildren: () => import('./volumes/volume.module').then(m => m.VolumeModule)
  },
  {
    path: 'volumes/:volumeId/artigos',
    loadChildren: () => import('./artigos/artigo.module').then(m => m.ArtigoModule)
  },
  {
    path: 'volumes/:volumeId/artigos/:artigoId/autores',
    loadChildren: () => import('./autores/autor.module').then(m => m.AutorModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
