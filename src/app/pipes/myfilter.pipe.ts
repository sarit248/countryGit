import { Pipe, PipeTransform } from '@angular/core';
import { Country } from '../models/country';
@Pipe({
    name: 'myfilter'
})
export class FilterPipe implements PipeTransform {
    transform(items: Country[], searchText: string): any[] {
        if (!items) return [];
        if (!searchText) return items;
        searchText = searchText.toLowerCase();
        return items.filter(it => {
            return it.name.toLowerCase().includes(searchText) ||
            it.capital.toLowerCase().includes(searchText)
        });
    }
}