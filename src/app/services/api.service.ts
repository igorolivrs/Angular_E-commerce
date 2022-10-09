import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from '../models/products.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  public baseUrl: string = 'http://localhost:3001';
  public listProducts: Products[] = [];

  constructor(private httpClient: HttpClient) {}

  getListProducts(): Observable<Products[]> {
    return this.httpClient.get<Products[]>(this.baseUrl + '/produtos');
  }
}
