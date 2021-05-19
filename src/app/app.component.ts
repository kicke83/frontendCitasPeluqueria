import { Component, OnInit, DoBootstrap, DoCheck } from '@angular/core';
import { UsuarioSevicio } from './services/usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [UsuarioSevicio]
})
export class AppComponent implements OnInit, DoCheck {
  title = 'AppCitas';
  public dataUser: any;
  public token: any;
  constructor(
    private _uSrvc: UsuarioSevicio
  ){
    this.dataUser = this._uSrvc.getDataUser();
    this.token = this._uSrvc.getToken();
  }

  ngOnInit(){
    this.dataUser;
    this.token;
    
  }
  ngDoCheck(){
    this.dataUser = this._uSrvc.getDataUser();
  }
}
