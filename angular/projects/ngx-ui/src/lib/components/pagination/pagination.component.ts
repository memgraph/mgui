import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'mg-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnChanges {
  @Input() pageSize = 2;
  @Input() totalRecords;
  @Output()
  currentPageChanged =
      new EventEmitter<{currentPage: number, pageSize: number}>();

  currentPage = 1;
  totalPages = 1;
  leftPages = [];
  rightPages = [];
  leftEllipsis = false;
  rightEllipsis = false;

  constructor() {}

  changePage(newPage) {
    this.currentPage = newPage;
    const left = this.currentPage - 1;
    const right = this.currentPage + 1;
    this.leftPages = [];
    for (let i = left; (i > 1 && i > (left - 2)); i--) {
      this.leftPages.unshift(i);
    }
    this.rightPages = [];
    for (let i = right; (i < this.totalPages && i < (right + 2)); i++) {
      this.rightPages.push(i);
    }
    this.leftEllipsis = this.currentPage > 4;
    this.rightEllipsis = this.currentPage < (this.totalPages - 3);
    this.currentPageChanged.emit(
        {currentPage : this.currentPage, pageSize : this.pageSize});
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.totalRecords != null &&
        changes.totalRecords.currentValue != null) {
      this.totalPages = Math.ceil(this.totalRecords / this.pageSize);
      this.changePage(1);
    }
  }

  changePageSize(pageSize) {
    this.pageSize = pageSize;
    this.totalPages = Math.ceil(this.totalRecords / this.pageSize);
    this.currentPage = 1;
    this.currentPageChanged.emit(
        {currentPage : this.currentPage, pageSize : this.pageSize});
    this.changePage(this.currentPage);
  }
}
