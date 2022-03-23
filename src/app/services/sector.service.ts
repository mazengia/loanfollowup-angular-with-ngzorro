import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {Sector, SectorResponse} from '../model/sector';

@Injectable({
  providedIn: 'root'
})
export class SectorService {
  constructor(private http:HttpClient) { }
  getSectors(pageNumber:number = 0,pageSize:number = 20):Observable<SectorResponse>
  {
     const params =  new HttpParams()
     .append('page',`${pageNumber}`)
     .append('size',`${pageSize}`);
     return this.http.get<SectorResponse>(`${environment.Url}/sectors`, {params} );
  }
  addSectors(sector:Sector):Observable<Sector>
  {
    return this.http.post<Sector>(`${environment.Url}/sectors`,sector  );
  }
  deleteSectors(sectorId:number):Observable<Sector>
  {
    return this.http.delete<Sector>(`${environment.Url}/sectors/${sectorId}` );
  }
  updateSector(sectorId: number, sector: Sector): Observable<Sector> {
    return this.http.put<Sector>(`${environment.Url}/sectors/${sectorId}`, sector );
  }
  findSectorById(sectorId: number): Observable<Sector> {
    return this.http.get<Sector>(`${environment.Url}/sectors/${sectorId}` );
  }
}
