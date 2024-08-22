import { Component } from '@angular/core';
import { Abaout } from '../../Utils/Abaout';
import*as abaoutDta from '../../../../public/jason/abaoutDta.json';
function randomInt(max: number) {
  return Math.floor(Math.random() * max);

}
@Component({
  selector: 'app-abaout',
  standalone: true,
  imports: [],
  templateUrl: './abaout.component.html',
  styleUrl: './abaout.component.css'
})
export class AbaoutComponent {
  Abaout:Abaout[]=(abaoutDta as any).default;
  indiceProducto: number = randomInt(3);
  
  constructor() {}
  ngOnInit(): void {
    console.log(abaoutDta);
  }
}
