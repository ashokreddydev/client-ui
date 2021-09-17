import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../_models';

@Injectable()
export class UserService {
    constructor(private http: HttpClient) { }

    getAll(val:any) {
        return this.http.get<User[]>(`${config.apiUrl}/users?page=`+val);
    }

    getById(id: number) {
        return this.http.get(`${config.apiUrl}/users/` + id);
    }

    register(user: User) {
        return this.http.post(`${config.apiUrl}/users/register`, user);
    }

    update(user: User) {
        return this.http.put(`${config.apiUrl}/users/` + user.id, user);
    }

    delete(id: number) {
        return this.http.delete(`${config.apiUrl}/users/` + id);
    }
    getLogins()
    {

        return this.http.get(`${config.apiUrl}/users/api/getlogins`);

    }

    logout()
    {
        return this.http.get(`${config.apiUrl}/users/api/logout`);
    }
}