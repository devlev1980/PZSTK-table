import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StkTableComponent } from './stk-table.component';

describe('StkTableComponent', () => {
  let component: StkTableComponent;
  let fixture: ComponentFixture<StkTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StkTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StkTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
