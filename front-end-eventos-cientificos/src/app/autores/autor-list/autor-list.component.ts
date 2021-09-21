import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Autor } from '../shared/autor';
import { AutorService } from '../shared/autor.service';

@Component({
  selector: 'app-autor-list',
  templateUrl: './autor-list.component.html',
  styleUrls: ['./autor-list.component.scss']
})
export class AutorListComponent implements OnInit {

  autores: Autor[] = [];

  displayedColumns = ['Autor','ordem','email','primeiroNome','nomeDoMeio','sobrenome','afiliacao','afiliacaoIngles','NomeDoMeio','Delete'];
  dataSource: MatTableDataSource<Autor>;

  constructor(private autorService: AutorService,
    private router: Router) { }

  get hasData() {
    return this.dataSource != null;
  }

  ngOnInit(): void {
    //this.loadAutores();
  }

  deletarAutor(autor: Autor) {
    this.autorService.deleteAutor(autor).subscribe(response => {
      //this.loadAutores();
    });
  }

  verAutor(AutorId: number) {
    this.router.navigate([ AutorId ]);
  }

  // private loadAutores() {
  //   return this.autorService.getAutores(this.volumeId)
  //     .subscribe(response => {
  //       this.autores = response;
  //       this.dataSource = new MatTableDataSource<Autor>(this.autores);
  //     });
  // }
}
