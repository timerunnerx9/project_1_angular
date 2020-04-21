import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fin2reimbComponent } from './fin2reimb.component';

describe('Fin2reimbComponent', () => {
  let component: Fin2reimbComponent;
  let fixture: ComponentFixture<Fin2reimbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fin2reimbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fin2reimbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
