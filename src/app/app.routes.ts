import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { ProductsComponent } from './Pages/products/products.component';
import { AbaoutComponent } from './Pages/abaout/abaout.component';

export const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'Productos',component:ProductsComponent},
  {path:'AcercaDe',component:AbaoutComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];
