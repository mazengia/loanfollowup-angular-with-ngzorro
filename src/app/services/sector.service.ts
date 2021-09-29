import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Sector} from "../pages/model/sector";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class SectorService {

  constructor( private http: HttpClient) { }
  getSector(): Observable<Sector[]> {
    return this.http.get<Sector[]>(`${environment.Url}/sectors`);
  }
}
