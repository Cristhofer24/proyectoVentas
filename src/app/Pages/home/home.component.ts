import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import*as producData from '../../../../public/jason/ProducData.json';

import { Product } from '../../Utils/product';

function randomInt(max: number) {
  return Math.floor(Math.random() * max);

}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
Product:Product[]=(producData as any).default;
indicePokemonSemana: number = randomInt(3);

constructor() {}
ngOnInit(): void {
  console.log(producData);
}
}
