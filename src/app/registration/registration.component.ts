import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
})
export class RegistrationComponent {
  angForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.angForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required], // Move it to the correct position
    });
  }

  onSubmit() {
    if (this.angForm.valid) {
      // Handle form submission here
    }
  }
}
