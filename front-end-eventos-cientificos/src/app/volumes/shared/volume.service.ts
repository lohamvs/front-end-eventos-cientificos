import { Injectable } from '@angular/core';
import { CommonRestService } from 'src/app/shared/services/common-rest.service';
import { environment } from 'src/environments/environment';
import { Volume } from './volume';

@Injectable({
  providedIn: 'root'
})
export class VolumeService {

  private resource = environment.apiBaseUri.concat('/volumes');

  constructor(private rest: CommonRestService) { }

  getVolumes() {
    const url = this.resource;
    return this.rest.get<Array<Volume>>(url);
  }
}
