import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custPipe'
})
export class CustPipePipe implements PipeTransform {

  transform(value: string, option: string,limit?: number, locale?: string, currency?: string): string {
    switch (option) {
      
      case 'toLowerCase':
        return value.toLowerCase();
      case 'toUpperCase':
        return value.toUpperCase();
      case 'reverse':
        return this.reverseString(value);
      case 'countWords':
        return this.countWords(value);
      case 'capitalize':
        return this.capitalizeFirstLetter(value);
      case 'removeSpaces':
        return this.removeSpaces(value);
        case 'truncate':
          return this.truncate(value, limit);
          case 'formatCurrency':
            return this.formatCurrency(value, locale, currency);
      default:
        return value;
    
}

  }
  private truncate(value: string, limit?: number): string {
    if (!limit) return value;
    return value.length > limit ? value.substring(0, limit) + '...' : value;
  }
  
  private reverseString(value: string): string {
    return value.split('').reverse().join('');
  }
 
  private capitalizeFirstLetter(value: string): string {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }
 
  private countWords(value: string): string {
    const words = value.trim().split(/\s+/);
    return words.length.toString();
  }
  private removeSpaces(value: string): string {
    return value.replace(/\s/g, '');
  }
  private formatCurrency(value: string | number, locale?: string, currency?: string): string {
    let numericValue: number;
    if (typeof value === 'string') {
      numericValue = parseFloat(value);
    } else if (typeof value === 'number') {
      numericValue = value;
    } else {
      // If the value is neither a string nor a number, return an empty string
      return '';
    }
    return numericValue.toLocaleString(locale, { style: 'currency', currency });
  }
  
}