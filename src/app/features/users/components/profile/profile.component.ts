import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  private panchos: any[];
  private user;
  @ViewChild('pay_modal', {static:false}) pay_modal: ElementRef;
  @ViewChild('payment_method', {static:false}) payment_method: ElementRef;

  constructor() { }

  ngOnInit() {
    this.panchos = [
      {
        id: 1,
        reason: 'A reason',
        created_at: '12/12/19 12:00',
        is_payed: false,
      },
      {
        id: 2,
        reason: 'Another reason',
        created_at: '12/12/19 12:00',
        is_payed: true,
      }
    ];
    this.user = {
      name: 'John Doe',
      img: 'https://picsum.photos/200',
    }
  }

  openModal() {
    this.pay_modal.nativeElement.classList.add('active-modal')
  }

  closeModal() {
    this.pay_modal.nativeElement.classList.remove('active-modal')
  }

  payAndCloseModal() {
    console.log(this.payment_method.nativeElement.value);
    this.closeModal();
  }
}
