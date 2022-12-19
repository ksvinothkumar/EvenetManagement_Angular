import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../shared/service/users.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  reigsteredUserDetails: any;

  constructor(private usersService: UsersService,  private router: Router) {}

  ngOnInit() {
    this.getRegistered();
  }

  getRegistered() {
    this.usersService.getRegisteredUsers().subscribe((res) => {
      this.reigsteredUserDetails = res;
    });
  }

  logout() {
    this.router.navigate(['']);
  }
}
