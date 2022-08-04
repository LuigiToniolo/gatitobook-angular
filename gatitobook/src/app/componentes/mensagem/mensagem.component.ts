import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mensagem',
  templateUrl: './mensagem.component.html',
  styleUrls: ['./mensagem.component.css']
})
export class MensagemComponent implements OnInit {

  //tornar a 'mensagem.component.html' dinâmico para colocarmos onde quiser

  @Input()
  mensagem = '';

  constructor() { }

  ngOnInit(): void {
  }

}
