import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OAuthModule } from 'angular-oauth2-oidc';
import { HttpClientModule } from '@angular/common/http';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import {NzLayoutModule} from 'ng-zorro-antd/layout';
import {NzButtonModule} from 'ng-zorro-antd/button';
import { MainNavComponent } from './pages/main-nav/main-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    MainNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OAuthModule.forRoot(
      {
        resourceServer:{
          allowedUrls:['http://api.enatbanksc.com/'],
          sendAccessToken:true
        }
      }
    ),
    HttpClientModule,
    NzLayoutModule,
    NzButtonModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
