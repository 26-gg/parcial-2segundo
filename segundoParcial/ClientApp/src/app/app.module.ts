import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { ModalsComponent } from './@base/modals/modals.component';
import { AppRoutingModule } from './app-routing.module';
import { RegistroComponent } from './Entidad/registro/registro.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({

  imports: [
    FormsModule,
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    NgbModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
    ]),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    ModalsComponent,
    RegistroComponent
  ],
  entryComponents:[
    ModalsComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
