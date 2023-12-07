import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PaginationModel } from '../models/pagination-model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'https://dummyjson.com/products';

  constructor(private http: HttpClient) { }

  getDataService(paginationModel: PaginationModel): Observable<PaginationModel> {
    return this.http.get<PaginationModel>(this.apiUrl + "?skip=" + paginationModel.skip + "&limit=" + paginationModel.limit);
  }
}
