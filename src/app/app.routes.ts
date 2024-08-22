import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { ProductsComponent } from './Pages/products/products.component';
import { AbaoutComponent } from './Pages/abaout/abaout.component';
import { Error404Component } from './error404/error404.component';

export const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'Productos',component:ProductsComponent},
  {path:'AcercaDe',component:AbaoutComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: '**', component:Error404Component}
];
