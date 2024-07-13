import { Component, EventEmitter, Output } from '@angular/core';
import { CustomerFilterPipe } from '../../pipes/customer-filter.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter-bar',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './filter-bar.component.html',
  styleUrl: './filter-bar.component.css',
  providers: [CustomerFilterPipe]
})
export class FilterBarComponent {
  filterByName: string = '';
  filterByAmount: number | null = null;

  @Output() filterChanged = new EventEmitter<{ name: string; amount: number | null }>();

  onFilterChange() {
    this.filterChanged.emit({
      name: this.filterByName,
      amount: this.filterByAmount,
    });
  }

  resetData(): void {
    this.filterByName = '';
    this.filterByAmount = null;
    this.onFilterChange();
  }
}
