import { Component, OnInit } from '@angular/core';
import {Jugador}from '../../jugador';
import {JUGADORES} from '../../Clases/Lista';
@Component({
  selector: 'app-jugadores',
  templateUrl: './jugadores.component.html',
  styleUrls: ['./jugadores.component.css']
})
export class JugadoresComponent implements OnInit {
  lista=JUGADORES;
  public Clase: boolean;
  selectedJugador: Jugador;
  onSelect(jugador: Jugador): void {
  this.selectedJugador = jugador;  
  this.Clase=true;
} 
  constructor() {}
  ngOnInit(): void {}
 
  CambiarValor(): void{
      this.Clase=false;
  }
}
