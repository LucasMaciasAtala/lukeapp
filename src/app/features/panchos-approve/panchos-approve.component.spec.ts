import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanchosApproveComponent } from './panchos-approve.component';

describe('PanchosApproveComponent', () => {
  let component: PanchosApproveComponent;
  let fixture: ComponentFixture<PanchosApproveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanchosApproveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanchosApproveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
