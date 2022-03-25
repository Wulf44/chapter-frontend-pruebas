import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorpageComponent } from './Error/errorpage/errorpage.component';
import { ListadoComponent } from './component/listado/listado.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrorpageComponent,
    
    ListadoComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
