import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Volume } from '../shared/volume';
import { VolumeService } from '../shared/volume.service';

@Component({
  selector: 'app-volume-edit',
  templateUrl: './volume-edit.component.html',
  styleUrls: ['./volume-edit.component.scss']
})
export class VolumeEditComponent implements OnInit {

  volumeId: number;
  volume: Volume;

  constructor(private volumeService: VolumeService,
    private router: Router,
    private route: ActivatedRoute) {

    const routeParams = this.route.snapshot.paramMap;
    this.volumeId = Number(routeParams.get('id'));
  }

  ngOnInit(): void {
    this.loadVolume();
  }

  private loadVolume() {
    return this.volumeService.getVolume(this.volumeId)
      .subscribe(response => {
        this.volume = response;
      });
  }

  onSubmit(form: NgForm) {
    console.log(form);
    this.editVolume();
  }
  
  editVolume() {
    this.volumeService.putVolume(this.volume).subscribe(response => {
      this.router.navigate(['../../volumes', response.id]);
    });
  }
}
