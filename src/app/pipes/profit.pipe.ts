import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'profitPipe'
})
export class ProfitPipe implements PipeTransform {
    transform(value: number, cost: number): number {
        const profit = value - cost;
        const profitPercentage = (profit / cost) * 100;
        return profitPercentage;
    }
}