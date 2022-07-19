import { Component, OnInit } from '@angular/core';
import { render } from 'creditcardpayments/creditCardPayments';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.css'],
})
export class PaymentFormComponent implements OnInit {
  constructor() {
    render({
      id: '#myPaypalButtons',
      currency: 'PE',
      value: '100.00',
      onApprove: (details) => {
        alert('Transaction Successfull');
      },
    });
  }

  ngOnInit(): void {}
}
