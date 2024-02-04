import { Injectable } from '@angular/core';
import { IS_USER_LOGGED_IN } from '../store/keys';


// That's boilerplate data because i have no backend here :)

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  login() {
    localStorage.setItem(IS_USER_LOGGED_IN, "true")
  }

  logout() {
    localStorage.removeItem(IS_USER_LOGGED_IN)
  }

  isLoggedIn(): boolean {
    const isLogged = localStorage.getItem(IS_USER_LOGGED_IN)
    if (isLogged) return JSON.parse(isLogged)
    return false
  }
}
