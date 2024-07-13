import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customerFilter',
  standalone: true
})
export class CustomerFilterPipe implements PipeTransform {

  transform(value: any[], filterByName: string, filterByAmount: number | null): any[] {
    if (!value) return [];
    if (!filterByName && !filterByAmount) return value;
    return value.filter(customer => {
      let nameMatch = true;
      let amountMatch = true;
      if (filterByName) {
        nameMatch = customer.name.toLowerCase().includes(filterByName.toLowerCase());
      }
      if (filterByAmount !== null) {
        amountMatch = customer.transactions.some((transaction: any) => transaction.amount === filterByAmount);
      }
      return nameMatch && amountMatch;
    });
  }

}
