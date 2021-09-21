import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Autor } from '../shared/autor';
import { AutorService } from '../shared/autor.service';

@Component({
  selector: 'app-autor',
  templateUrl: './autor.component.html',
  styleUrls: ['./autor.component.scss']
})
export class AutorComponent implements OnInit {

  autor: Autor;
  autorId: number;

  constructor(private autorService: AutorService,
    private route: ActivatedRoute) {
    
    const routeParams = this.route.snapshot.paramMap;
    this.autorId = Number(routeParams.get('id'));
  }

  ngOnInit(): void {
    this.loadAutor();
  }

  loadAutor() {
    this.autorService.getAutor(this.autorId).subscribe(response => {
      this.autor = response;
    });
  }
}
