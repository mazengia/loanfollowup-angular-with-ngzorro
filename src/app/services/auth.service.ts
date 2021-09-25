import { Injectable } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import jwtDecode from 'jwt-decode';
import {Observable} from 'rxjs';
import {Sector} from '../pages/model/sector';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private authService: OAuthService) { }

  getUsername() {
    const claims = this.authService.getIdentityClaims();
    if (claims) {
      return null;
    }
    return  (claims as any).given_name;
  }

  getToken() {
    return localStorage.getItem('access_token');
  }

  getTokenDetails() {
    return jwtDecode(this.getToken());
  }

  getUserRoles() {
    return (this.getTokenDetails() as any).realm_access;
  }


}
