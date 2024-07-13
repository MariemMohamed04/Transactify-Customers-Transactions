import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http:HttpClient) { }

  getAllCustomers(): Observable<any> {
    console.log('got customers');
    return this.http.get(`${this.baseUrl}/customers`);
  }

  getAllTransactions(): Observable<any> {
    console.log('got transactions');
    return this.http.get(`${this.baseUrl}/transactions`);
  }
}
