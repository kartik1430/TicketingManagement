
import { DatePipe, formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { event } from 'jquery';
import { map, filter, scan } from 'rxjs/operators';
import { isTemplateExpression } from 'typescript/lib/tsserverlibrary';
import { Country } from '../models/country';
import { State } from '../models/state';
import { UserDetail } from '../models/userdetail';
import { ApiService } from '../shared/api.service';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {



  actionBtn: string = "Save";

  id: any;
  desigData: any;
  departData: any;
  bgData: any;
  roleData: any;
  eduData: any;
  countryData: any;
  stateData: any;
  cityData: any;

  constructor(private router: Router, private route: ActivatedRoute, public service: ApiService, public dp: DatePipe) {
    this.loadDesig();
    this.loadDepart();
    this.loadBg();
    this.loadRole();
    this.loadEducation();
    this.loadCountry();
    

  }

  ngOnInit(): void {
    
    this.id = this.route.snapshot.params['id'];
    // console.log(this.id);
    if (this.id) {
      this.actionBtn = "Update";
      this.singleuser();
    }
    this.getAllUsers();
      

  }
  Back() {
    this.router.navigateByUrl('/employeelist')
  }

  changeCountry(event: any) {
    this.service.getStates(event.target.value).subscribe(res => {
      this.stateData = res;
    })
  }

  changeState(event: any) {
    this.service.getCities(event.target.value).subscribe(res => {
      this.cityData = res;
    })
  }





  getAllUsers() {
    this.service.getUsers().subscribe(data => {
      this.service.listUsers = data;
    });
  }

  populateUser(selectedemp: UserDetail) {
    // this.actionBtn = "Update";
      let df = this.dp.transform(selectedemp.dateOfBirth, 'dd-MM-yyyy');
      selectedemp.dateOfBirth = df;
      console.log(selectedemp.dateOfBirth);
    this.service.userData = selectedemp;
  }

  singleuser() {
    this.service.singleUser(this.id).subscribe((res: any) => {
      this.service.userData = res;
      
    });
  }

  deleteUser(id: number) {
    if (confirm('Are you really want to delete this record?')) {
      this.service.deleteUser(id).subscribe(data => {
        console.log('record deleted');
        this.getAllUsers();
      }, err => {
        console.log('record not deleted');
      });
    }
  }

  submit(form: NgForm) {
    // this.service.roleData.isAdmin = form.value.isAdmin == false?true:false;
    if (this.service.userData.id == 0) {
      this.resetForm(form);
      this.insertUser(form);
    }
    else {
      this.updateUser(form);
    }
  }

  insertUser(myform: NgForm) {
    this.resetForm(myform);
    this.service.saveUser().subscribe(d => {
      console.log('Save Success');
    });
    alert("User added successfully");
    this.router.navigateByUrl('/employeelist')
  }

  updateUser(myform: NgForm) {
    this.service.updateUser().subscribe(d => {
      
      this.resetForm(myform);
    });
    alert("User updated successfully");
    this.router.navigateByUrl('/employeelist')
  }

  resetForm(myform: NgForm) {
    myform.form.reset();
    this.service.userData = new UserDetail();
  }

  loadDesig() {
    this.service.getDesigantions().subscribe(res => {
      this.desigData = res;
    })
  }

  loadDepart() {
    this.service.getDepartments().subscribe(res => {
      this.departData = res;
    })
  }

  loadBg() {
    this.service.getBloodgroups().subscribe(res => {
      this.bgData = res;

    })
  }

  loadRole() {
    this.service.getRoles().subscribe(res => {
      this.roleData = res;
    })
  }

  loadEducation() {
    this.service.getEducations().subscribe(res => {
      this.eduData = res;

    })
  }

  loadCountry() {
    this.service.getCountries().subscribe(res => {
      this.countryData = res;
    })
  }




}
