import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Util } from 'src/app/shared/Util';
import { Volume } from 'src/app/volumes/shared/volume';
import { VolumeService } from 'src/app/volumes/shared/volume.service';
import { Artigo } from '../shared/artigo';
import { ArtigoService } from '../shared/artigo.service';
import { Idioma } from '../shared/idioma.enum';

@Component({
  selector: 'app-artigo-edit',
  templateUrl: './artigo-edit.component.html',
  styleUrls: ['./artigo-edit.component.scss']
})
export class ArtigoEditComponent implements OnInit {

  volumeId: number;
  artigoId: number;
  artigo: Artigo = new Artigo();
  volume: Volume;

  idiomas = Util.enumSelector(Idioma);
  
  constructor(private volumeService: VolumeService,
    private artigoService: ArtigoService,
    private router: Router,
    private route: ActivatedRoute) {
    
    const routeParams = this.route.snapshot.paramMap;
    this.volumeId = Number(routeParams.get('volumeId'));
    this.artigoId = Number(routeParams.get('id'));
  }

  ngOnInit() {
    this.volumeService.getVolume(this.volumeId).subscribe(response => {
      this.volume = response;
    });
    this.artigoService.getArtigo(this.volumeId, this.artigoId).subscribe(response => {
      this.artigo = response;
    });
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.createArtigo();
    }
  }

  createArtigo() {
    this.artigoService.putArtigo(this.volumeId, this.artigo).subscribe(response => {
      this.router.navigate(['../volumes', this.volumeId,'artigos', response.id]);
    });
  }
}
