import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';

import { User } from '../_models';
import { UserService } from '../_services';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent implements OnInit {
    currentUser: User;
    users: User[] = [];

    list: any[] = [];

    pagination = {
        id: 'users',
        itemsPerPage: 10,
        currentPage: 1,
        totalItems: 0
    }

    constructor(private userService: UserService, private router: Router) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {
        this.loadAllUsers(1);
    }

    deleteUser(id: number) {
        this.userService.delete(id).pipe(first()).subscribe(() => {
            this.loadAllUsers(this.pagination.currentPage)
        });
    }

    private loadAllUsers(val:any) {
        this.userService.getAll(val).pipe(first()).subscribe((users: any) => {
            this.users = users.data;
            this.pagination.totalItems = users.totalRecords;
        });
    }


    pageChanged(page:any)
    {
        this.pagination.currentPage = page;
        this.loadAllUsers(page);

        // console.log(page)
    }

    auditor()
    {
        
            this.router.navigate(['/home']);
        
    }

  
   
}