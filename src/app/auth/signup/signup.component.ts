import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../auth.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  registrationForm: FormGroup;

  constructor(private fb: FormBuilder,
              private authService: AuthService) {
    this.registrationForm = this.fb.group({
      email: [null, [Validators.required]],
      password: [null, [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit() {
  }
  onSignup() {
    const email = this.registrationForm.get('email').value,
          password = this.registrationForm.get('password').value;
    this.authService.signupUser(email, password);
  }
}
