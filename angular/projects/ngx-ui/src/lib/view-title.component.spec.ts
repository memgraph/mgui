import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTitleComponent } from './view-title.component';

describe('ViewTitleComponent', () => {
  let component: ViewTitleComponent;
  let fixture: ComponentFixture<ViewTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
