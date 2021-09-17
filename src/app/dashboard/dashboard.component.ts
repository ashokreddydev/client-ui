import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '../_models';
import { UserService } from '../_services';
import {Location} from '@angular/common';

@Component({ templateUrl: 'dashboard.component.html' })
export class DashboardComponent implements OnInit {
    currentUser: User;

    loginList:any[] = [];
    ngOnInit()
    {

    }
  constructor(private userService: UserService,private _location: Location)
  {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if(this.currentUser.role == 'AUDITOR')
    {
        this.getLogin()
    }
    else{
        this._location.back();
    }
    
  }

  getLogin()
  {
    this.userService.getLogins().pipe(first()).subscribe((resp: any) => {
        this.loginList = resp;
        console.log(resp)
     
    });

  }
}