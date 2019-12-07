import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss'],
})
export class OrderPage implements OnInit {

	loginForm: FormGroup;
	order = {
		totoal: 0,
		items: []
	};

	constructor(public formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router) {
		this.loginForm = this.formBuilder.group({
			name: new FormControl('', Validators.required),
			phoneNumber: new FormControl('', Validators.required),
			address: new FormControl('', Validators.required),
			pinCode: new FormControl('', Validators.required)
		});
		this.route.queryParams.subscribe(params => {
			if (this.router.getCurrentNavigation().extras.state) {
				this.order = this.router.getCurrentNavigation().extras.state.order;
			}
		});
	}

	ngOnInit() {
	}

}
