import { ApplicationModule, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../shared/api.service';

@Injectable({
  providedIn: 'root'
})


export class MenuGuard implements CanActivate {
  currentRole : any
  constructor(private router : Router , private service : ApiService){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (localStorage.getItem('token') != null) {
        this.currentRole = this.service.GetRolebyToken(this.service.GetToken());
        if(this.currentRole==1){
          return true;
        }else
        {
          alert('You are not authorized to access this page.!!');
          this.router.navigate(['/dashboard']);
          return false;
        }
        
      }
      else {
        this.router.navigate(['/login']);
        return false;
      }
  }
  
}
