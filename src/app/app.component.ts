import { authConfig } from './config/authConfig';
import { Component, OnInit } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'loan-follow-up-frontend';

  constructor(private oauthService:OAuthService,private router:Router){}
  ngOnInit(): void {
    this.init();

  }

  public login()
  {
    this.oauthService.initImplicitFlow();
  }

  public logout()
  {
    this.oauthService.logOut();
  }

  public get userName()
  {
    var cliams = this.oauthService.getIdentityClaims();
    if(!cliams) return null;

    return (<any>cliams).given_name;
  }

  public init()
  {
    this.router.navigate['/'];
    this.oauthService.configure(authConfig);
    this.oauthService.loadDiscoveryDocumentAndLogin();
    this.oauthService.setStorage(localStorage);
    this.oauthService.setupAutomaticSilentRefresh();
  }
}
