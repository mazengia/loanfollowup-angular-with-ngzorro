import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {Category, CategoryResponse} from '../model/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }

  getCategories(pageNumber:number = 0,pageSize:number = 20):Observable<CategoryResponse>
  {
    const params =  new HttpParams()
      .append('page',`${pageNumber}`)
      .append('size',`${pageSize}`);
    return this.http.get<CategoryResponse>(`${environment.Url}/categories`, {params} );
  }

  addCategory(category:Category):Observable<Category>
  {
    return this.http.post<Category>(`${environment.Url}/categories`,category );
  }

  deleteCategory(categoryId:number):Observable<Category>
  {
    return this.http.delete<Category>(`${environment.Url}/categories/${categoryId}`   );
  }
  findCategoryById(categoryId: number): Observable<any> {
    return this.http.get(`${environment.Url}/categories/${categoryId}` );
  }
  updateCategory(categoryId: number, category: Category): Observable<Category> {
    return this.http.put<Category>(`${environment.Url}/categories/${categoryId}`, category);
  }

}
