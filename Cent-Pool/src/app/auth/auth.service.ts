import { Injectable } from '@angular/core';
import { IUser } from '../user/user.model';

@Injectable()
export class AuthService {

    currentUser: IUser;

    loginUser() {}
    logoutUser() {}
    updateCurrentUser() {}

    isAuthenticated() {
        return !!this.currentUser;
    }

    checkAuthenicationStatus() {}
}
