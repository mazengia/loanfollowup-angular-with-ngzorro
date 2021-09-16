import { Injectable } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private authService:OAuthService) { }

  getUsername()
  {
    var claims = this.authService.getIdentityClaims();
    if(claims)
    {
      return null;
    }
    return  (<any>claims).given_name;
  }

  getToken()
  {
    return localStorage.getItem('access_token');
  }

  getTokenDetails()
  {
    return jwtDecode(this.getToken());
  }

  getUserRoles()
  {
    return (<any>this.getTokenDetails()).realm_access;
  }
}
