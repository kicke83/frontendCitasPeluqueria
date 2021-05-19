import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { CitasComponent } from './components/citas/citas.component';
import { EstilosComponent } from './components/estilos/estilos.component';
import { EquipoComponent } from './components/equipo/equipo.component';
import { FcitasComponent } from './components/fcitas/fcitas.component';
import { FooterComponent } from './components/footer/footer.component';
import { PanelAdminComponent } from './components/panel-admin/panel-admin.component';
import { AdminEstilosComponent } from './components/admin-estilos/admin-estilos.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AngularFileUploaderModule } from "angular-file-uploader";
import { EditaEstiloComponent } from './components/edita-estilo/edita-estilo.component';
import { PanelUsuarioComponent } from './components/panel-usuario/panel-usuario.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    InicioComponent,
    NavbarComponent,
    HeaderComponent,
    ServiciosComponent,
    CitasComponent,
    EstilosComponent,
    EquipoComponent,
    FcitasComponent,
    FooterComponent,
    PanelAdminComponent,
    AdminEstilosComponent,
    EditaEstiloComponent,
    PanelUsuarioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    AngularFileUploaderModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
