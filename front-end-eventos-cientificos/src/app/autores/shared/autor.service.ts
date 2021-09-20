import { Injectable } from '@angular/core';
import { CommonRestService } from 'src/app/shared/services/common-rest.service';
import { environment } from 'src/environments/environment';
import { Autor } from './autor';

@Injectable({
  providedIn: 'root'
})
export class AutorService {

  private resource = environment.apiBaseUri.concat('/autores');

  constructor(private rest: CommonRestService) { }

  getAutores() {
    const url = this.resource;
    return this.rest.get<Array<Autor>>(url);
  }

  getAutor(autorId: number) {
    const url = this.resource.concat(`/${autorId}`);
    return this.rest.get<Autor>(url);
  }

  createAutor(autor: Autor) {
    const url = this.resource;
    return this.rest.post<Autor>(url, autor);
  }

  putAutor(autor: Autor) {
    const url = this.resource;
    return this.rest.put<Autor>(url, autor);
  }

  deleteAutor(autor: Autor) {
    const url = this.resource;
    return this.rest.delete<Autor>(url, autor);
  }
}
