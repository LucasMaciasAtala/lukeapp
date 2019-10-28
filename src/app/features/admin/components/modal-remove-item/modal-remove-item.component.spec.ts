import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalRemoveItemComponent } from './modal-remove-item.component';

describe('ModalRemoveItemComponent', () => {
  let component: ModalRemoveItemComponent;
  let fixture: ComponentFixture<ModalRemoveItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalRemoveItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalRemoveItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
