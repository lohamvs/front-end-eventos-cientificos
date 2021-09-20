import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Volume } from '../shared/volume';
import { VolumeService } from '../shared/volume.service';

@Component({
  selector: 'app-volume-list',
  templateUrl: './volume-list.component.html',
  styleUrls: ['./volume-list.component.scss']
})
export class VolumeListComponent implements OnInit {

  volumes: Volume[] = [];

  displayedColumns = ['Volume', 'Edicao', 'Sigla', 'Cidade', 'DataInicio', 'Delete'];
  dataSource: MatTableDataSource<Volume>;

  constructor(private volumeService: VolumeService,
    private router: Router) { }

  get hasData() {
    return this.dataSource != null;
  }

  ngOnInit(): void {
    this.loadVolumes();
  }

  deletarVolume(volume: Volume) {
    this.volumeService.deleteVolume(volume).subscribe(response => {
      this.loadVolumes();
    });
  }

  verVolume(volumeId: number) {
    this.router.navigate([ volumeId ]);
  }

  private loadVolumes() {
    return this.volumeService.getVolumes()
      .subscribe(response => {
        this.volumes = response;
        this.dataSource = new MatTableDataSource<Volume>(this.volumes);
      });
  }
}
