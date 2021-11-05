import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ConversorService {

  constructor(private http: HttpClient) { }
  FazerConversao(): Observable<any>{
    const url = "https://api.exchangerate.host/convert?from=USD&to=BRL&amount=100"
    return this.http.get<any>(url);

  }
}
