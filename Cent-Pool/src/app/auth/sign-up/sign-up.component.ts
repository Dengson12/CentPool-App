import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signUpForm: FormGroup;
  firstName: FormControl;
  lastName: FormControl;
  email: FormControl;
  gender: FormControl;
  dateOfBirth: FormControl;
  country: FormControl;

  countries: string[];
  constructor() { }

  ngOnInit() {
    this.signUpForm = new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl(),
      email: new FormControl(),
      date_of_birth: new FormControl(),
      country: new FormControl()
    });
  }

  saveUser() {

  }

}
