import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PaginationComponent} from './pagination.component';

export function arraysEqual(a: any[], b: any[]): boolean {
  if (a === b) {
    return true;
  }
  if (a == null || b == null) {
    return false;
  }
  if (a.length !== b.length) {
    return false;
  }
  for (let i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) {
      return false;
    }
  }
  return true;
}

describe('PaginationComponent', () => {
  let component: PaginationComponent;
  let fixture: ComponentFixture<PaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({declarations : [ PaginationComponent ]})
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationComponent);
    component = fixture.componentInstance;
    component.pageSize = 2;
    component.totalRecords = 11;
    fixture.detectChanges();
  });

  it('should create', () => { expect(component).toBeTruthy(); });

  it('should update the pagination state on change page', () => {
    component.changePage(2);
    expect(component.currentPage).toEqual(2);
    expect(arraysEqual(component.leftPages, [])).toBeTruthy();
    expect(arraysEqual(component.rightPages, [])).toBeTruthy();
    expect(component.leftEllipsis).toEqual(false);
    expect(component.rightEllipsis).toEqual(false);

    component.changePage(3);
    expect(component.currentPage).toEqual(3);
    expect(arraysEqual(component.leftPages, [ 2 ])).toBeTruthy();
    expect(arraysEqual(component.rightPages, [])).toBeTruthy();
    expect(component.leftEllipsis).toEqual(false);
    expect(component.rightEllipsis).toEqual(false);

    component.changePage(4);
    expect(component.currentPage).toEqual(4);
    expect(arraysEqual(component.leftPages, [ 2, 3 ])).toBeTruthy();
    expect(arraysEqual(component.rightPages, [])).toBeTruthy();
    expect(component.leftEllipsis).toEqual(false);
    expect(component.rightEllipsis).toEqual(false);

    component.changePage(5);
    expect(component.currentPage).toEqual(5);
    expect(arraysEqual(component.leftPages, [ 3, 4 ])).toBeTruthy();
    expect(arraysEqual(component.rightPages, [])).toBeTruthy();
    expect(component.leftEllipsis).toEqual(true);
    expect(component.rightEllipsis).toEqual(false);

    component.changePage(6);
    expect(component.currentPage).toEqual(6);
    expect(arraysEqual(component.leftPages, [ 4, 5 ])).toBeTruthy();
    expect(arraysEqual(component.rightPages, [])).toBeTruthy();
    expect(component.leftEllipsis).toEqual(true);
    expect(component.rightEllipsis).toEqual(false);
  });

  it('should update page size', () => {
    component.changePageSize(3);
    expect(component.currentPage).toEqual(1);
  });
});
