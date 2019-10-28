import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditionFormComponent } from './modal-edition-form.component';

describe('ModalEditionFormComponent', () => {
  let component: ModalEditionFormComponent;
  let fixture: ComponentFixture<ModalEditionFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalEditionFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEditionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
