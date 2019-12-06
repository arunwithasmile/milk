import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-order',
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss'],
})
export class OrderPage implements OnInit {

	loginForm: FormGroup;

	constructor(public formBuilder: FormBuilder) {
		this.loginForm = this.formBuilder.group({
			phoneNumber: new FormControl('', Validators.required),
			password: new FormControl('', Validators.required)
		});
	}

	ngOnInit() {
	}

}
