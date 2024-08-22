
import { Component } from '@angular/core';
import*as producData from '../../../../public/jason/ProducData.json';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Product } from '../../Utils/product';
function randomInt(max: number) {
  return Math.floor(Math.random() * max);

}
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent{
  Product:Product[]=(producData as any).default;
  indiceProducto: number = randomInt(3);
  
  constructor() {}
  ngOnInit(): void {
    console.log(producData);
  }


}
