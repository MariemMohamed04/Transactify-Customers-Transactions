import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CustomerFilterPipe } from '../../pipes/customer-filter.pipe';
import { TransactionService } from '../../services/transaction.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CustomerFilterPipe
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
  providers: [CustomerFilterPipe]
})
export class TableComponent implements OnInit {
  customers: any[] = [];
  transactions: any[] = [];
  customerTransactions: any[] = [];

  @Input() filterByName: string = '';
  @Input() filterByAmount: number | null = null;
  @Output() customerSelected = new EventEmitter<any>();

  constructor(private transactionService: TransactionService, private customerFilter: CustomerFilterPipe) {}

  ngOnInit(): void {
    this.loadCustomerTransactions();
  }

  loadCustomerTransactions(): void {
    this.transactionService.getAllCustomers().subscribe(
      (customers) => {
        this.transactionService.getAllTransactions().subscribe(
          (transactions) => {
            this.customerTransactions = customers.map((customer: any) => {
              const customerId = Number(customer.id);
              return {
                ...customer,
                transactions: transactions.filter((transaction: any) => Number(transaction.customer_id) === customerId),
              };
            });
          },
          (error) => {
            console.error('Error fetching transactions:', error);
          }
        );
      },
      (error) => {
        console.error('Error fetching customers:', error);
      }
    );
  }

  onDisplayChart(customer: any): void {
    this.customerSelected.emit(customer);
  }
}
