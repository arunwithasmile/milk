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
	order: any;

	constructor(public formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router) {
		this.loginForm = this.formBuilder.group({
			phoneNumber: new FormControl('', Validators.required),
			password: new FormControl('', Validators.required)
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
