import { NgModule, Component } from '@angular/core';
import { from } from 'rxjs';
//La importacion de RouterModule sirve para que todo tod componente que consuma AppRoutingModule pueda ejecutarlo.
import {RouterModule, Routes} from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Grafica1Component } from './pages/grafica1/grafica1.component';
import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';
import { PagesComponent } from './pages/pages.component';

// crear las rutas de mi aplicacion
//se creara una contante de tipo Routes, que será un arreglo.
//Dentro de el se crearán objetos
//Esto redirecciona según lo que se seleccione
//Lado izquierdo es lo que pueda suceder
//LAdo derecho es la respuesta o redireccion
const routes: Routes =  [
 //hemos movido el html de component.hmtl al PAges.components
  { path: '', component: PagesComponent,
  children: [
      {path:'dashboard',component:DashboardComponent},
      {path: 'progress', component: ProgressComponent},
      {path: 'grafica1', component: Grafica1Component},
      { path: '', redirectTo: '/dashboard', pathMatch: 'full'},

  ]

},
  
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},

  { path: '**', component:NopagefoundComponent },
  
];




@NgModule({
  declarations: [],
  imports: [
RouterModule.forRoot(routes)

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
