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
    private http:HttpClient,
    private authService:AuthService
  ) { }

  ngOnInit(): void {
    this.loadBranches();
    this.getUserRoles();
  }

  loadBranches()
  {
    return this.http.get(`http://localhost:9090/branches`);
  }

  get userName()
  {
    return (<any>this.authService.getTokenDetails()).name;
  }

  roles:any[];

  getUserRoles()
  {
    this.roles = (<any>this.authService.getUserRoles()).roles;
  }

}
