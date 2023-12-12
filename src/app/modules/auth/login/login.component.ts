import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  //  INICIO DE VALIDACIONES LOGIN
  registerForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      contraseña: ['', Validators.required,],
    });
  }

  formCheck() {
    if (this.registerForm.valid) {
      console.log('Formulario válido, datos:', this.registerForm.value);
    } else {
      alert('Por favor, completa el formulario correctamente antes de enviarlo.');
    }
  }
  // FIN DE VALIDACIONES LOGIN

}
