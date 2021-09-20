import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Util } from 'src/app/shared/Util';
import { Volume } from '../shared/volume';
import { VolumeService } from '../shared/volume.service';

@Component({
  selector: 'app-volume-create',
  templateUrl: './volume-create.component.html',
  styleUrls: ['./volume-create.component.scss']
})
export class VolumeCreateComponent {

  volume: Volume = new Volume();

  constructor(private volumeService: VolumeService,
      private router: Router) { }
  
  onSubmit(form: NgForm) {
    console.log(form);
    if (form.valid) {
      this.volume.dataInicio = Util.dateNowAsString();
      this.createVolume();
    }
  }

  createVolume() {
    this.volumeService.createVolume(this.volume).subscribe(response => {
      this.router.navigate(['../../volumes', response.id]);
    }); 
  }
}
