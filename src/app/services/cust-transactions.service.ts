import { Injectable } from '@angular/core';
import { ICustomer } from '../interfaces/icustomer';
import { ITransaction } from '../interfaces/itransaction';

@Injectable({
  providedIn: 'root'
})
export class CustTransactionsService {
  customers: ICustomer[] = [
    {
      id: 1,
      name: "John Doe"
    },
    {
      id: 2,
      name: "Jane Smith"
    },
    {
      id: 3,
      name: "Alice Johnson"
    },
    {
      id: 4,
      name: "Bob Brown"
    },
    {
      id: 5,
      name: "Charlie Davis"
    }
  ];

  transactions: ITransaction[] = [
    {
      id: 1,
      customer_id: 1,
      date: "2023-06-01",
      amount: 1500
    },
    {
      id: 2,
      customer_id: 1,
      date: "2023-06-02",
      amount: 2200
    },
    {
      id: 3,
      customer_id: 2,
      date: "2023-06-01",
      amount: 600
    },
    {
      id: 4,
      customer_id: 3,
      date: "2023-06-01",
      amount: 800
    },
    {
      id: 5,
      customer_id: 2,
      date: "2023-06-02",
      amount: 1200
    },
    {
      id: 6,
      customer_id: 4,
      date: "2023-06-01",
      amount: 700
    },
    {
      id: 7,
      customer_id: 3,
      date: "2023-06-02",
      amount: 1300
    },
    {
      id: 8,
      customer_id: 5,
      date: "2023-06-01",
      amount: 2600
    },
    {
      id: 9,
      customer_id: 5,
      date: "2023-06-02",
      amount: 950
    }
  ];

  constructor() { }

  getAllCustomers():ICustomer[] {
    return this.customers;
  }

  getAllTransactions():ITransaction[] {
    return this.transactions;
  }
}
