import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular'; // Asegúrate de importar IonicModule

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [IonicModule], // Asegúrate de agregar IonicModule aquí
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

}
