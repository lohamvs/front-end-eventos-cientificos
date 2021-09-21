import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Artigo } from 'src/app/artigos/shared/artigo';
import { ArtigoService } from 'src/app/artigos/shared/artigo.service';
import { Util } from 'src/app/shared/Util';
import { Autor } from '../shared/autor';
import { AutorService } from '../shared/autor.service';
import { Pais } from '../shared/pais.enum';

@Component({
  selector: 'app-autor-edit',
  templateUrl: './autor-edit.component.html',
  styleUrls: ['./autor-edit.component.scss']
})
export class AutorEditComponent implements OnInit {

  autorId: number;
  autor: Autor;

  artigoId: number;
  artigo: Artigo;

  volumeId: number;

  paises = Util.enumSelector(Pais);

  constructor(private autorService: AutorService,
    private artigoService: ArtigoService,
    private router: Router,
    private route: ActivatedRoute) {

    const routeParams = this.route.snapshot.paramMap;
    this.artigoId = Number(routeParams.get('artigoId'));
    this.volumeId = Number(routeParams.get('volumeId'));
    this.autorId = Number(routeParams.get('id'));
  }

  ngOnInit(): void {
    this.loadAutor();
    this.loadArtigo();
  }

  loadArtigo() {
    this.artigoService.getArtigo(this.volumeId, this.artigoId).subscribe(response => {
      this.artigo = response;
    });
  }

  private loadAutor() {
    return this.autorService.getAutor(this.autorId)
      .subscribe(response => {
        this.autor = response;
      });
  }

  onSubmit(form: NgForm) {
    if(form.valid) {
      this.autor.artigo = this.artigo;
      this.editAutor();
    }
  }
  
  editAutor() {
    console.log(this.autor);
    this.autorService.putAutor(this.autor).subscribe(response => {
      this.router.navigate(['../volumes', this.volumeId,'artigos', this.artigoId, 'autores', response.id]);
    });
  }
}
