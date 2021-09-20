import { Injectable } from '@angular/core';
import { CommonRestService } from 'src/app/shared/services/common-rest.service';
import { environment } from 'src/environments/environment';
import { Artigo } from './artigo';

@Injectable({
  providedIn: 'root'
})
export class ArtigoService {
  
  private resource = environment.apiBaseUri.concat('/volumes');
  
  constructor(private rest: CommonRestService) { }
  
  getArtigos(volumeId: number) {
    const url = this.resource.concat(`/${volumeId}/artigos`);
    return this.rest.get<Array<Artigo>>(url);
  }

  getArtigo(volumeId: number, artigoId: number) {
    const url = this.resource.concat(`/${volumeId}/artigos/${artigoId}`);
    return this.rest.get<Artigo>(url);
  }

  createArtigo(volumeId: number, artigo: Artigo) {
    const url = this.resource.concat(`/${volumeId}/artigos`);
    return this.rest.post<Artigo>(url, artigo);
  }

  putArtigo(volumeId: number, artigo: Artigo) {
    const url = this.resource.concat(`/${volumeId}/artigos`);
    return this.rest.put<Artigo>(url, artigo);
  }

  deleteArtigo(volumeId: number, artigo: Artigo) {
    const url = this.resource.concat(`/${volumeId}/artigos`);
    return this.rest.delete<Artigo>(url, artigo);
  }
}
