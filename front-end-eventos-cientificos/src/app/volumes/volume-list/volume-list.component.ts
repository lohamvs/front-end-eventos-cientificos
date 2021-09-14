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

  displayedColumns = ['Id','Edicao','Sigla','Cidade','DataInicio', 'Edit', 'Remove'];
  dataSource: MatTableDataSource<Volume>;

  constructor(private volumeService: VolumeService,
              private router: Router) { }

  ngOnInit(): void {
    this.loadVolumes();
  }

  private loadVolumes() {
    return this.volumeService.getVolumes()
    .subscribe(response => {
      this.dataSource = new MatTableDataSource<Volume>(response);
    });
  }
}
