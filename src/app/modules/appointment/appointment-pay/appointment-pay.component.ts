import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appointment-pay',
  templateUrl: './appointment-pay.component.html',
  styleUrls: ['./appointment-pay.component.css'],
  animations: [
    trigger('flipState', [
      state('active', style({
        transform: 'rotateY(179deg)'
      })),
      state('inactive', style({
        transform: 'rotateY(0)'
      })),
      transition('active => inactive', animate('500ms ease-out')),
      transition('inactive => active', animate('500ms ease-in'))
    ])
  ]
})
export class AppointmentPayComponent {
  constructor(private router: Router) { }

  ngOnInit() {
  }

  flip: string = 'inactive';

  toggleFlip() {
    this.flip = (this.flip == 'inactive') ? 'active' : 'inactive';
  }

  pagar() {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "¡Pago Realizado con Exito!",
      showConfirmButton: false,
      timer: 1500
    });
    setTimeout(() => {
      this.router.navigate(['/appointment-finish'])
    }, 1700);
  }
}
