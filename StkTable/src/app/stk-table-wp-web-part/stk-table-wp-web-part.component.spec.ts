import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StkTableWpWebPartComponent } from './stk-table-wp-web-part.component';

describe('StkTableWpWebPartComponent', () => {
  let component: StkTableWpWebPartComponent;
  let fixture: ComponentFixture<StkTableWpWebPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StkTableWpWebPartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StkTableWpWebPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
