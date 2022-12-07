import { Injectable } from '@angular/core';
import { IUser, UserRole } from '@core/interfaces';

const userMock: IUser = {
    login: 'test login',
    name: 'placeholder name name name',
    photo: 'https://picsum.photos/1000',
    role: UserRole.Admin,
};

@Injectable({
    providedIn: 'root',
})
export class UserService {
    public get logged(): boolean {
        return this.isLogged;
    }

    public get userRole(): UserRole {
        return this.user ? this.user.role : UserRole.Guest;
    }

    public get userName(): string {
        return this.user ? this.user.name : '';
    }

    public get userPhoto(): string {
        return this.user ? this.user.photo : '';
    }

    private isLogged: boolean = false;
    private user: IUser | null = null;

    public auth(): boolean {
        this.isLogged = true;

        this.user = userMock;

        return true;
    }

    public logout(): void {
        this.isLogged = false;

        this.user = null;
    }
}
