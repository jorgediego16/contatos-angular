import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contatos-listagem-component',
  templateUrl: './contatos-listagem-component.component.html',
  styleUrls: ['./contatos-listagem-component.component.sass']
})
export class ContatosListagemComponentComponent implements OnInit {

  contatos = [
    { id: 1, nome: 'Jorge Diego', email: 'jorge.diego@justa.com.vc' },
    { id: 2, nome: 'Guga Melo', email: 'guga.melo@justa.com.vc'},
    { id: 3, nome: 'Matheus', email: 'matheus@justa.com.vc'},
  ]

  constructor() { }

  ngOnInit() {

  }

  listar(): any[] {
    return this.contatos;
  }

}
