import {sandboxOf} from 'angular-playground';
import {PaginationComponent} from './pagination.component';

export default sandboxOf(PaginationComponent).add('default', {
  template:
      `<mg-pagination [pageSize]="10" [totalRecords]="125"></mg-pagination>`,
});
