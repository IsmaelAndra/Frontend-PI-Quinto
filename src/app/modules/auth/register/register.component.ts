import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  //  INICIO DE VALIDACIONES LOGIN
  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]],
      apellido: ['', [Validators.required, Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ]+$/)]],
      direccion: ['', [Validators.required, Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ]+$/)]],
      telefono: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      fecha: ['', [Validators.required,]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required]],
    }, { validator: this.checkPasswords });

  }

  checkPasswords(group: FormGroup) {
    const password = group.controls['password'].value;
    const confirmPassword = group.controls['confirmPassword'].value;

    return password === confirmPassword ? null : { notSame: true };
  }
  // FIN DE VALIDACIONES LOGIN

  ngOnInit(): void {

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

