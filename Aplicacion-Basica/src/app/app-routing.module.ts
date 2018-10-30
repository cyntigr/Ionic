import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'Ejercicio1', loadChildren: './ejercicio1/ejercicio1.module#Ejercicio1PageModule' },
  { path: 'Ejercicio2', loadChildren: './ejercicio2/ejercicio2.module#Ejercicio2PageModule' },
  { path: 'Ejercicio3', loadChildren: './ejercicio3/ejercicio3.module#Ejercicio3PageModule' },
  { path: 'Ejercicio4', loadChildren: './ejercicio4/ejercicio4.module#Ejercicio4PageModule' },
  { path: 'Ejercicio5', loadChildren: './ejercicio5/ejercicio5.module#Ejercicio5PageModule' },
  { path: 'Ejercicio6', loadChildren: './ejercicio6/ejercicio6.module#Ejercicio6PageModule' },
  { path: 'Ejercicio7', loadChildren: './ejercicio7/ejercicio7.module#Ejercicio7PageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
