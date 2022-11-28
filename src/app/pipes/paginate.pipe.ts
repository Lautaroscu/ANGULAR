import { Pipe, PipeTransform } from '@angular/core';
import { Chapters } from '../components/chapters-component/interf-chapters';
import { Comments } from '../components/comments-component/interf-comments';

@Pipe({
  name: 'paginate'
})
export class PaginatePipe implements PipeTransform {

  transform(array:any[] | Chapters[], page_size:number | string | any , page_number:number | string | any):any[] {
    if(!array.length) return [] ;

    if(page_size === 'all'){
      return array;
    }
    page_size = page_size || 5 ;
    page_number = page_number || 1;
    page_number--;
    
    return array.slice(page_number * page_size , ((page_number + 1 ) * page_size))

  }

}
