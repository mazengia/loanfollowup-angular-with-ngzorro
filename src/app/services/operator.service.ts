import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Operator, OperatorResponse} from "../model/operator";

@Injectable({
  providedIn: 'root'
})
export class OperatorService {

  constructor(private http: HttpClient) {
  }

  getOperators(pageNumber: number = 0, pageSize: number = 20): Observable<OperatorResponse> {
    const params = new HttpParams()
      .append('page', `${pageNumber}`)
      .append('size', `${pageSize}`);
    return this.http.get<OperatorResponse>(`${environment.Url}/operators`, {params});
  }

  addOperators(operator: Operator): Observable<Operator> {
    return this.http.post<Operator>(`${environment.Url}/operators`, operator);
  }

  deleteOperators(operatorId: number): Observable<Operator> {
    return this.http.delete<Operator>(`${environment.Url}/operators/${operatorId}`);
  }

  updateOperators(operatorId: number, value: Operator): Observable<Operator> {
    return this.http.put<Operator>(`${environment.Url}/operators/${operatorId}`, value);
  }

  findOperatorsById(operatorId: number): Observable<Operator> {
    return this.http.get<Operator>(`${environment.Url}/operators/${operatorId}`);
  }
}

