import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinreimbComponent } from './finreimb.component';

describe('FinreimbComponent', () => {
  let component: FinreimbComponent;
  let fixture: ComponentFixture<FinreimbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinreimbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinreimbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
