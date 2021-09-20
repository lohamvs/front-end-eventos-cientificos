import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Artigo } from 'src/app/artigos/shared/artigo';
import { ArtigoService } from 'src/app/artigos/shared/artigo.service';
import { Volume } from '../shared/volume';
import { VolumeService } from '../shared/volume.service';

@Component({
  selector: 'app-volume',
  templateUrl: './volume.component.html',
  styleUrls: ['./volume.component.scss']
})
export class VolumeComponent implements OnInit {

  volumeId: number;
  volume: Volume;
  artigos: Artigo[] = [];

  dataSource: MatTableDataSource<Artigo>;
  displayedColumns = ['Artigo', 'Ordem', 'Idioma', 'TituloOriginal', 'TituloIngles', 'QuantidadePaginas', 'Delete'];
  @ViewChild(MatSort) sort: MatSort;

  constructor(private volumeService: VolumeService,
    private artigoService: ArtigoService,
    private route: ActivatedRoute) {

    const routeParams = this.route.snapshot.paramMap;
    this.volumeId = Number(routeParams.get('id'));
  }

  get hasData() {
    return this.artigos.length > 0;
  }

  ngOnInit(): void {
    this.loadVolume();
    this.loadArtigos();
  }
  
  deletarArtigo(artigo: Artigo) {
    this.artigoService.deleteArtigo(this.volume.id, artigo).subscribe(response => {
      this.loadArtigos();
    });
  }

  private loadVolume() {
    return this.volumeService.getVolume(this.volumeId)
      .subscribe(response => {
        this.volume = response;
      });
  }

  private loadArtigos() {
    this.artigoService.getArtigos(this.volumeId).subscribe(response => {
      this.artigos = response;
      this.dataSource = new MatTableDataSource<Artigo>(this.artigos);
      this.dataSource.sort = this.sort;
    });
  }

}
