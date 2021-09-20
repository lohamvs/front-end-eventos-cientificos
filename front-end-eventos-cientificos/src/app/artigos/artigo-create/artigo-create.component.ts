import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Util } from 'src/app/shared/Util';
import { Volume } from 'src/app/volumes/shared/volume';
import { VolumeService } from 'src/app/volumes/shared/volume.service';
import { Artigo } from '../shared/artigo';
import { ArtigoService } from '../shared/artigo.service';
import { Idioma } from '../shared/idioma.enum';

@Component({
  selector: 'app-artigo-create',
  templateUrl: './artigo-create.component.html',
  styleUrls: ['./artigo-create.component.scss']
})
export class ArtigoCreateComponent implements OnInit {

  volumeId: number;
  artigo: Artigo = new Artigo();
  volume: Volume;

  idiomas = Util.enumSelector(Idioma);
  
  constructor(private volumeService: VolumeService,
    private artigoService: ArtigoService,
    private router: Router,
    private route: ActivatedRoute) {
    
    const routeParams = this.route.snapshot.paramMap;
    this.volumeId = Number(routeParams.get('volumeId'));
  }

  ngOnInit() {
    this.volumeService.getVolume(this.volumeId).subscribe(response => {
      this.volume = response;
    });
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.createArtigo();
    }
  }

  createArtigo() {
    this.artigoService.createArtigo(this.volumeId, this.artigo).subscribe(response => {
      this.router.navigate(['../volumes', this.volumeId,'artigos', response.id]);
    });
  }
}
