import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Collateral, CollateralResponse} from '../model/collateral';

@Injectable({
  providedIn: 'root'
})
export class CollateralService {


  constructor(private http:HttpClient) { }

  getCollaterals(pageNumber:number = 0, pageSize:number = 20):Observable<CollateralResponse>
  {
    const params =  new HttpParams()
      .append('page',`${pageNumber}`)
      .append('size',`${pageSize}`);
    return this.http.get<CollateralResponse>(`${environment.Url}/collaterals`, {params} );
  }
  addCollaterals(collaterals:Collateral):Observable<Collateral>
  {
    return this.http.post<Collateral>(`${environment.Url}/collaterals`,collaterals   );
  }
  deleteCollaterals(collateralId:number):Observable<Collateral>
  {
    return this.http.delete<Collateral>(`${environment.Url}/collaterals/${collateralId}`  );
  }
  findCollateralsById(collateralId: number): Observable<Collateral> {
    return this.http.get<Collateral>(`${environment.Url}/collaterals/${collateralId}` );
  }
  updateCollaterals(collateralId: number, collateral: Collateral): Observable<Collateral> {
    return this.http.put<Collateral>(`${environment.Url}/collaterals/${collateralId}`, collateral );
  }
}
