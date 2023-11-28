import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  implements OnInit{


  constructor() {}

  ngOnInit():void {

  }
  nuevoUser = new FormGroup({
    name_user: new FormControl(''),
    lastname_user: new FormControl(''),
    mail_user: new FormControl(''),
    address_user: new FormControl(''),
    phone_user: new FormControl(''),
    date_of_birth_user: new FormControl(new Date()),
    password_user: new FormControl(''),
    password_validation_user: new FormControl(''),
    status_user: new FormControl(false)
  })
}

