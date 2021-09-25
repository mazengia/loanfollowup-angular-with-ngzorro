import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }

  get userName() {
    return (this.authService.getTokenDetails() as any).name;
  }

  roles: any[];

  ngOnInit(): void {
    this.loadBranches();
    this.getUserRoles();
  }

  loadBranches() {
    return this.http.get(`http://localhost:9090/branches`);
  }

  getUserRoles() {
    this.roles = (this.authService.getUserRoles() as any).roles;
  }

}
