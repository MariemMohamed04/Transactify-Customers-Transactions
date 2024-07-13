import { Component } from '@angular/core';
import { FilterBarComponent } from '../filter-bar/filter-bar.component';
import { TableComponent } from '../table/table.component';
import { ChartComponent } from '../chart/chart.component';

@Component({
  selector: 'app-all',
  standalone: true,
  imports: [
    FilterBarComponent,
    TableComponent,
    ChartComponent
  ],
  templateUrl: './all.component.html',
  styleUrl: './all.component.css'
})
export class AllComponent {
  filterValues: { name: string; amount: number | null } = { name: '', amount: null };
  selectedCustomer: any = null;

  onFilterChanged(filterValues: { name: string; amount: number | null }) {
    this.filterValues = filterValues;
  }

  onCustomerSelected(customer: any) {
    this.selectedCustomer = customer;
  }
}