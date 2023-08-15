import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-autenticate',
  templateUrl: './autenticate.component.html',
  styleUrls: ['./autenticate.component.scss']
})
export class AutenticateComponent {
  barerTokenControl: any = new FormControl('');

  public sendForm() {
    localStorage.setItem('autentication', this.barerTokenControl)
  }
}
