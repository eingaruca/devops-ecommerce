import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-analytics',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './analytics.component.html',
  styleUrl: './analytics.component.css'
})
export class AnalyticsComponent implements OnInit {
  graficos: string[] = [
      // 'assets/images/fondo.jpg', 
      // 'assets/images/fondo3.jpg', 
      // 'assets/images/fondo4.jpg', 'assets/images/fondo4.jpg'
      'https://firebasestorage.googleapis.com/v0/b/beta-shopping-fa365.appspot.com/o/analytics%2Fhistograma.jpg?alt=media&token=d2018272-e72f-48c4-ae1e-79404d2dde34',
      'https://firebasestorage.googleapis.com/v0/b/beta-shopping-fa365.appspot.com/o/analytics%2Fhistograma.jpg?alt=media&token=d2018272-e72f-48c4-ae1e-79404d2dde34',
      'https://firebasestorage.googleapis.com/v0/b/beta-shopping-fa365.appspot.com/o/analytics%2Fhistograma.jpg?alt=media&token=d2018272-e72f-48c4-ae1e-79404d2dde34',
      'https://firebasestorage.googleapis.com/v0/b/beta-shopping-fa365.appspot.com/o/analytics%2Fhistograma.jpg?alt=media&token=d2018272-e72f-48c4-ae1e-79404d2dde34',
      'https://firebasestorage.googleapis.com/v0/b/beta-shopping-fa365.appspot.com/o/analytics%2Fhistograma.jpg?alt=media&token=d2018272-e72f-48c4-ae1e-79404d2dde34',
      'https://firebasestorage.googleapis.com/v0/b/beta-shopping-fa365.appspot.com/o/analytics%2Fhistograma.jpg?alt=media&token=d2018272-e72f-48c4-ae1e-79404d2dde34'
    ];
  graficoSeleccionado: string = this.graficos[0]; // Grafico seleccionado inicialmente

  constructor() { }

  ngOnInit(): void {
    // Establecer el primer gráfico como seleccionado por defecto
    this.graficoSeleccionado = this.graficos[0];
  }

  cambiarGrafico(grafico: string) {
    this.graficoSeleccionado = grafico;
  }




  imagenSeleccionada: string = '';

  seleccionarImagen(grafico: string): void {
    this.imagenSeleccionada = grafico;
  }

  cerrarImagen(): void {
    this.imagenSeleccionada = '';
  }

}