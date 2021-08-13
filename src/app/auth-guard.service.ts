import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import 'rxjs/add/operators/map';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService, private router:Router) { }

  canActivate() {
      return this.auth.user$.forEach(user => {
        if (user) return true;
        this.router.navigate(['/login']);
        return false;
    });
  }
}
