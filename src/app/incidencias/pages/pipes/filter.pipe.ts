import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {

  // constructor(private filterService: FilterService) {}
  transform(value: any, arg: any): any {
  
    if (arg === "Todos") {
      return value;
    }
    
    let result = [];
    for (const estatu of value) {

      if (estatu.DetalleEstatus.indexOf(arg) > -1 ) {
        result.push(estatu);
      }
    }
    
    if(result.length >= 1){
      return result;
    }else{
      result = [{tes:"No hay datos"}];
      console.log(result);
      return result;
    }
    
    // console.log("array datos FILTRADOS", result);
    // console.log("arg select", arg);
    // return result;

  }

}




