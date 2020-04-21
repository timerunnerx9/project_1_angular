import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpReimbComponent } from './empreimb.component';

describe('ReimbComponent', () => {
  let component: EmpReimbComponent;
  let fixture: ComponentFixture<EmpReimbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpReimbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpReimbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
