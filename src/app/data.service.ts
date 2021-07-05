import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface HomeTab{
  title: string
};




@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {}

  getProduct() {
    return this.http.get("../../assets/fakedatabase.js")
  }
}
