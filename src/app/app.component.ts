import { authConfig } from './config/authConfig';
import { Component, OnInit } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'loan-follow-up-frontend';
  isCollapsed = false;

  toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
  }
  constructor(private oauthService: OAuthService, private router: Router) {}
  ngOnInit(): void {
    this.init();

  }

  public login() {
    this.oauthService.initImplicitFlow();
  }

  public logout() {
    this.oauthService.logOut();
  }

  public get userName() {
    const cliams = this.oauthService.getIdentityClaims();
    if (!cliams) { return null; }

    return (cliams as any).given_name;
  }

  public init() {
    // tslint:disable-next-line:no-unused-expression
    this.router.navigate['/'];
    this.oauthService.configure(authConfig);
    this.oauthService.loadDiscoveryDocumentAndLogin();
    this.oauthService.setStorage(localStorage);
    this.oauthService.setupAutomaticSilentRefresh();
  }
}
