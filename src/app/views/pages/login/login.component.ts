import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { ApiService } from 'src/app/shared/api.service';
import { from } from 'rxjs';
import { Login } from 'src/app/models/Login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  // user!: Login;



  constructor(private router : Router , public service : ApiService) { }

  ngOnInit(): void {
    if(localStorage.getItem('token')!=null)
      this.router.navigateByUrl('/dashboard'); 
  }
  

  onSubmit(form:NgForm){
    this.service.login().subscribe(
      (res : any)=>{
        localStorage.setItem('role',res.user.role);
        localStorage.setItem('token',res.token);
         this.router.navigateByUrl('/dashboard');
      },
      err=>{
        if(err.status == 400)
          alert("Incorrect Username or Password");
        else  
          console.log(err);
      }
    )
  }

  // private getUser(token : string) : Login{
  //   return JSON.parse(atob(token.split('.')[1])) as Login;
  // }
}
