import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  editProfileForm: FormGroup
  userName: FormControl
  email: FormControl
  dateOfBirth: FormControl

  constructor() { }

  ngOnInit() {
    this.editProfileForm = new FormGroup({
      email: new FormControl(),
      userName: new FormControl(),
      dateOfBirth: new FormControl()
    })
  }

}
