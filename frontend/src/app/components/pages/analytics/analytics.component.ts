import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MapaComponent } from '../../partials/mapa/mapa.component';

@Component({
  selector: 'app-analytics',
  standalone: true,
  imports: [
    CommonModule,
    MapaComponent,
  ],
  templateUrl: './analytics.component.html',
  styleUrl: './analytics.component.css'
})
export class AnalyticsComponent implements OnInit {
  graficos: any[] = [
      // 'assets/images/fondo.jpg', 
      // 'assets/images/fondo3.jpg', 
      // 'assets/images/fondo4.jpg', 'assets/images/fondo4.jpg'
      {
        image: 'https://firebasestorage.googleapis.com/v0/b/beta-shopping-fa365.appspot.com/o/analytics%2Fhistograma.jpg?alt=media&token=d2018272-e72f-48c4-ae1e-79404d2dde34',
        desc: "Histograma"
      },
      {
        image: 'https://firebasestorage.googleapis.com/v0/b/beta-shopping-fa365.appspot.com/o/analytics%2FArbolDecisonCategoria.png?alt=media&token=96a27800-6d3b-4d46-91af-30f94944c93c',
        desc: "Arbol de decisión"
      },
      {
        image: 'https://firebasestorage.googleapis.com/v0/b/beta-shopping-fa365.appspot.com/o/analytics%2FImportanciaCaracteristicaModelo.png?alt=media&token=4e890ff2-0523-4647-9779-62f444d3ce9c',
        desc: "Importancia Característica"
      },
      {
        image: 'https://firebasestorage.googleapis.com/v0/b/beta-shopping-fa365.appspot.com/o/analytics%2FGraficoEdad.png?alt=media&token=418db1b3-2933-4bc7-b244-0430b9537c53',
        desc: "Agrupación Clientes Edad"
      },
      {
        image: 'https://firebasestorage.googleapis.com/v0/b/beta-shopping-fa365.appspot.com/o/analytics%2Fmapa_calor_compras.png?alt=media&token=60fe684f-01b6-4c47-bf72-296aa44a36e4',
        desc: "Mapa Calor Compra"
      },
      {
        image: 'https://firebasestorage.googleapis.com/v0/b/beta-shopping-fa365.appspot.com/o/analytics%2Fmapa_burbujas_compras.png?alt=media&token=d163317b-fa3c-4007-b7c2-7bf82acd2fd0',
        desc: "Mapa Burbuja Compra"
      },
    ];
  graficoSeleccionado: string = this.graficos[0].image; // Grafico seleccionado inicialmente

  constructor() { }

  ngOnInit(): void {
    // Establecer el primer gráfico como seleccionado por defecto
    this.graficoSeleccionado = this.graficos[0].image;
  }

  cambiarGrafico(grafico: any) {
    this.graficoSeleccionado = grafico.image;
  }




  imagenSeleccionada: string = '';

  seleccionarImagen(grafico: any): void {
    this.imagenSeleccionada = grafico.image;
  }

  cerrarImagen(): void {
    this.imagenSeleccionada = '';
  }

}