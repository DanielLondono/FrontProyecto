import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultFilterComponent } from './consult-filter.component';

describe('ConsultFilterComponent', () => {
  let component: ConsultFilterComponent;
  let fixture: ComponentFixture<ConsultFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
