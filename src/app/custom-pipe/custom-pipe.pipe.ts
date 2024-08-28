import { Pipe, PipeTransform } from '@angular/core';
 
@Pipe({
  name: 'MyCustomPipes',
})
export class MyCustomPipes implements PipeTransform {
  transform(value: string, option: string): string {
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
      default:
        return value;
    }
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
 
  
}
 