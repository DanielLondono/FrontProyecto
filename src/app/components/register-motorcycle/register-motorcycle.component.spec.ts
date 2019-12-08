import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterMotorcycleComponent } from './register-motorcycle.component';

describe('RegisterMotorcycleComponent', () => {
  let component: RegisterMotorcycleComponent;
  let fixture: ComponentFixture<RegisterMotorcycleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterMotorcycleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterMotorcycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
