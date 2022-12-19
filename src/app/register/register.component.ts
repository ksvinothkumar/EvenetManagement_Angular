import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/shared/service/users.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  signInForm: any;
  registrationForm: any;
  constructor(
    public form: FormBuilder,
    private usersService: UsersService,
    private router: Router
  ) {}

  public buildForm() {
    this.signInForm = this.form.group({
      email: '',
      password: '',
    });

    this.registrationForm = this.form.group({
      name: '',
      email: '',
      phone: '',
      startDate: '',
      endDate: '',
      role: 'USER',
    });
  }

  ngOnInit() {
    this.buildForm();
  }

  signIn() {
    console.log(this.signInForm.value);
    this.usersService.userLogin(this.signInForm.value).subscribe((res) => {
      console.log(res);
      this.router.navigate(['/dashboard']);
    });
  }

  registerEvent() {
    console.log(this.registrationForm.value);
    this.usersService
      .userRegister(this.registrationForm.value)
      .subscribe((res) => {
        console.log(res);
      });
  }
}
