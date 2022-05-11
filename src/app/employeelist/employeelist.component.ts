import { Component, OnInit , ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../shared/api.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { UserDetail } from '../models/userdetail';


@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.scss']
})
export class EmployeelistComponent implements OnInit {
  displayedColumns: string[] = ['id',  'firstName', 'roleName','email', 'dateOfBirth', 'departmentName', 'designationName', 'educationName',  'cityName','action'];
  dataSource!: MatTableDataSource<UserDetail>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  constructor(private router : Router , public service: ApiService) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  onAdd()
  { 
    this.router.navigateByUrl('/employee'); 
  }


  getAllUsers() {
    this.service.getUsers().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.service.listUsers = data;
    });
  }

  updateUser(id: number) {
    this.router.navigateByUrl('/employeeedit/' + id);
  };

  deleteUser(id: number) {
    if (confirm('Are you really want to delete this record?')) {
      this.service.deleteUser(id).subscribe(data => {
        console.log('record deleted');
        this.getAllUsers()

      }, err => {
        console.log('record not deleted');
      });
    }
   
  }

}
