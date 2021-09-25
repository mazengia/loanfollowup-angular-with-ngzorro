import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Sector} from '../pages/model/sector';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RequestService {
  constructor( private http: HttpClient) { }
  getSector(): Observable<Sector[]> {
    return this.http.get<Sector[]>(`${environment.Url}/sectors`);
  }
}
