import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Artigo } from 'src/app/artigos/shared/artigo';
import { ArtigoService } from 'src/app/artigos/shared/artigo.service';
import { Util } from 'src/app/shared/Util';
import { Autor } from '../shared/autor';
import { AutorService } from '../shared/autor.service';
import { Pais } from '../shared/pais.enum';

@Component({
  selector: 'app-autor-create',
  templateUrl: './autor-create.component.html',
  styleUrls: ['./autor-create.component.scss']
})
export class AutorCreateComponent implements OnInit {

  volumeId: number;
  artigoId: number;
  autor: Autor = new Autor();
  artigo: Artigo = new Artigo();

  paises = Util.enumSelector(Pais);

  constructor(private autorService: AutorService,
    private artigoService: ArtigoService,
    private router: Router,
    private route: ActivatedRoute) {

    const routeParams = this.route.snapshot.paramMap;
    this.volumeId = Number(routeParams.get('volumeId'));
    this.artigoId = Number(routeParams.get('artigoId'));
  }

  ngOnInit(): void {
    this.loadArtigo();
  }

  loadArtigo() {
    this.artigoService.getArtigo(this.volumeId, this.artigoId).subscribe(response => {
      this.artigo = response;
    });
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.autor.artigo = this.artigo;
      this.createAutor();
    }
  }

  createAutor() {
    this.autorService.createAutor(this.autor).subscribe(response => {
      this.router.navigate(['volumes', this.volumeId, 'artigos', this.artigoId, 'autores', response.id]);
    });
  }
}
