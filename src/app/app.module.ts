import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ListaComponentComponent } from './lista-component/lista-component.component';
import { PerfilComponentComponent } from './perfil-component/perfil-component.component';
import { HttpClientModule } from '@angular/common/http';
import { PeopleService } from './people.service';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ListaComponentComponent,
    PerfilComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
    RouterModule.forRoot([
      /*
      { path: '', component: AppComponent },
      */
      { path: '', component: ListaComponentComponent },
      { path: 'peoples', component: ListaComponentComponent },
      { path: 'peoples/:deta', component: PerfilComponentComponent  },
    ])
  
  ],
  providers: [PeopleService],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
