import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContatosListagemComponentComponent } from './contatos-listagem-component/contatos-listagem-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ContatosListagemComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
