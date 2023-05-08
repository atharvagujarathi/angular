import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { serverComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { AppFirstCompoComponent } from './app-first-compo/app-first-compo.component';
import { SecondCompoComponent } from './second-compo/second-compo.component';
import { AppApiComponent } from './app-api/app-api.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule } from "@angular/forms"

@NgModule({
  declarations: [
    AppComponent,
    serverComponent,
    ServersComponent,
    AppFirstCompoComponent,
    SecondCompoComponent,
    AppApiComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
