import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminEstilosComponent } from './components/admin-estilos/admin-estilos.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/login/login.component';
import { PanelAdminComponent } from './components/panel-admin/panel-admin.component';
import { RegistroComponent } from './components/registro/registro.component';
import {EditaEstiloComponent} from './components/edita-estilo/edita-estilo.component';
import {FcitasComponent} from './components/fcitas/fcitas.component';
import {PanelUsuarioComponent} from './components/panel-usuario/panel-usuario.component';

const routes: Routes = [
  {
    path: '',
    component: InicioComponent
  },
  {
    path: 'ingreso',
    component: LoginComponent
  },
  {
    path: 'registro',
    component: RegistroComponent
  },
  {
    path: 'admin',
    component: PanelAdminComponent
  },
  {
    path: 'usuario/:id',
    component: PanelUsuarioComponent
  },
  {
    path: 'adminEstilos',
    component: AdminEstilosComponent
  },
  {
    path: 'editaEstilo/:id',
    component: EditaEstiloComponent
  },
  {
    path: 'apartarCitas',
    component: FcitasComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
