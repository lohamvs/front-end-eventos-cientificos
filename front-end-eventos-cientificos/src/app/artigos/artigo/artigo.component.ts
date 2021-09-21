import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Autor } from 'src/app/autores/shared/autor';
import { AutorService } from 'src/app/autores/shared/autor.service';
import { Volume } from 'src/app/volumes/shared/volume';
import { VolumeService } from 'src/app/volumes/shared/volume.service';
import { Artigo } from '../shared/artigo';
import { ArtigoService } from '../shared/artigo.service';

@Component({
  selector: 'app-artigo',
  templateUrl: './artigo.component.html',
  styleUrls: ['./artigo.component.scss']
})
export class ArtigoComponent implements OnInit {
  
  volumeId: number;
  volume: Volume;
  artigoId: number;
  artigo: Artigo;
  autores: Autor[] = [];

  dataSource: MatTableDataSource<Autor>;
  displayedColumns = ['Autor', 'ordem', 'email', 'primeiroNome', 'nomeDoMeio', 'sobrenome', 'afiliacao', 'afiliacaoIngles', 'nacao', 'orcId', 'Delete'];
  
  @ViewChild(MatSort) sort: MatSort;

  constructor(private volumeService: VolumeService,
    private artigoService: ArtigoService,
    private autorService: AutorService,
    private route: ActivatedRoute) {

    const routeParams = this.route.snapshot.paramMap;
    this.volumeId = Number(routeParams.get('volumeId'));
    this.artigoId = Number(routeParams.get('id'));
  }

  get hasData() {
    return this.autores.length > 0;
  }

  ngOnInit(): void {
    this.loadVolume();
    this.loadArtigo();
    this.loadAutores();
  }
  
  deletarAutor(autor: Autor) {
    this.autorService.deleteAutor(autor).subscribe(response => {
      this.loadAutores();
    });
  }

  private loadVolume() {
    return this.volumeService.getVolume(this.volumeId)
      .subscribe(response => {
        this.volume = response;
      });
  }

  private loadArtigo() {
    this.artigoService.getArtigo(this.volumeId, this.artigoId).subscribe(response => {
      this.artigo = response;
    });
  }

  private loadAutores() {
    this.autorService.getAutores(this.volumeId).subscribe(response => {
      console.log(response);
      this.autores = response;
      this.dataSource = new MatTableDataSource<Autor>(this.autores);
      this.dataSource.sort = this.sort;
    });
  }
}
