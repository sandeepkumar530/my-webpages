import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentAPIService {

  constructor(private _httpClint:HttpClient) { }
  baseUrl:string="https://6128991386a213001729f9df.mockapi.io/test/v1/student";
  getStudentAPIs():Observable<any>{
    return this._httpClint.get(this.baseUrl);
  }
  getFilteredStudentAPIs(term:any):Observable<any>{
    return this._httpClint.get(this.baseUrl+"?filter="+term);
  }
  getSortedStudentAPIs(column:any,order:any):Observable<any>{
    return this._httpClint.get(this.baseUrl+"?sortBy="+column+"&order="+order);
}
getPaginatedStudentAPIs(limit:any,page:any):Observable<any>{
  return this._httpClint.get(this.baseUrl+"?limit="+limit+"&page="+page);
}
}