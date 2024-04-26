import { HttpClient, HttpHeaders ,HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root',
  
})
export class ServiceService {

 

  constructor(private http:HttpClient){}
  
  capital(country:string):Observable<any>{
    let header=new HttpHeaders();
    return this.http.post('https://countriesnow.space/api/v0.1/countries/capital',{"country":country},{"headers":header});
  }
  population(country:string):Observable<any>{
    let header=new HttpHeaders();
    return this.http.post('https://countriesnow.space/api/v0.1/countries/population',{"country":country},{"headers":header});
  }
  position(country:string):Observable<any>{
    let header=new HttpHeaders();
    return this.http.post('https://countriesnow.space/api/v0.1/countries/positions',{"country":country},{"headers":header});
  }
  flag(country:string):Observable<any>{
    let header=new HttpHeaders();
    return this.http.post('https://countriesnow.space/api/v0.1/countries/flag/images',{"country":country},{"headers":header});
  }
  currency(country:string):Observable<any>{
    let header=new HttpHeaders();
    return this.http.post('https://countriesnow.space/api/v0.1/countries/currency',{"country":country},{"headers":header});
  }

  
  

}

