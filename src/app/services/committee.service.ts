import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {Committee, CommitteeResponse} from "../model/committee";

@Injectable({
  providedIn: 'root'
})
export class CommitteeService {

  constructor(private http:HttpClient) { }

  getCommittee(pageNumber:number = 0, pageSize:number = 20):Observable<CommitteeResponse>
  {
    const params =  new HttpParams()
      .append('page',`${pageNumber}`)
      .append('size',`${pageSize}`);
    return this.http.get<CommitteeResponse>(`${environment.Url}/committees`, {params} );
  }
  addCommittee(committee:Committee):Observable<Committee>
  {
    return this.http.post<Committee>(`${environment.Url}/committees`,committee   );
  }
  deleteCommittee(committeeId:number):Observable<Committee>
  {
    return this.http.delete<Committee>(`${environment.Url}/committees/${committeeId}`  );
  }
  findCommitteeById(committeeId: number): Observable<Committee> {
    return this.http.get<Committee>(`${environment.Url}/committees/${committeeId}` );
  }
  updateCommittee(committeeId: number, committee: Committee): Observable<Committee> {
    return this.http.put<Committee>(`${environment.Url}/committees/${committeeId}`, committee );
  }
}
