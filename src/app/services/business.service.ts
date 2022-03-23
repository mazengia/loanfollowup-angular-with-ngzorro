import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Business, BusinessResponse} from '../model/business';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {

  constructor(private http:HttpClient) { }

  getBusiness(pageNumber:number = 0,pageSize:number = 20):Observable<BusinessResponse>
  {
    const params =  new HttpParams()
      .append('page',`${pageNumber}`)
      .append('size',`${pageSize}`);
    return this.http.get<BusinessResponse>(`${environment.Url}/business`, {params} );
  }
  addBusiness(business:Business):Observable<Business>
  {
    return this.http.post<Business>(`${environment.Url}/business`,business  );
  }
  deleteBusiness(businessId:number):Observable<Business>
  {
    return this.http.delete<Business>(`${environment.Url}/business/${businessId}`  );
  }
  updateBusiness(businessId: number, value: any): Observable<Business> {
    return this.http.put<Business>(`${environment.Url}/business/${businessId}`, value );
  }
  findBusinessById(businessId: number): Observable<Business> {
    return this.http.get<Business>(`${environment.Url}/business/${businessId}` );
  }
}
