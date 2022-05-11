import { Component, OnInit , ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Role } from '../models/role';
import { ApiService } from '../shared/api.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'app-rolelist',
  templateUrl: './rolelist.component.html',
  styleUrls: ['./rolelist.component.scss']
})
export class RolelistComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name' , 'isAdmin', 'action'];
  dataSource!: MatTableDataSource<Role>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private route : Router , public service: ApiService) { }

  ngOnInit(): void {
    this.getAllRoles()
  }

  onAdd(){

    this.route.navigateByUrl('/rolemaster')
    this.service.roleData.name="";
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getAllRoles() {
    this.service.getRoles().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.service.listRole = data;
    });
  }

  updateRole(id: number) {
    this.route.navigateByUrl('/edit/' + id);
  };

  deleteRole(id: number) {
    if (confirm('Are you really want to delete this record?')) {
      this.service.deleteRole(id).subscribe(data => {
        console.log('record deleted');
        this.getAllRoles()

      }, err => {
        console.log('record not deleted');
      });
    }
   
  }

  

  

}
