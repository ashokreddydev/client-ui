import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';

import { User } from '../_models';
import { UserService } from '../_services';

@Component({ templateUrl: 'headers.component.html' })
export class HeadersComponent implements OnInit {
    currentUser: User;
    constructor(private userService: UserService,private router: Router) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    ngOnInit()
    {

    }

    logout()
    {
        this.userService.logout().pipe(first()).subscribe(() => {
            this.router.navigate(['/login']);
        });
    }

  
  
}