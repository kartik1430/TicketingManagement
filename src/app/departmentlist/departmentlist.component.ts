import { Component, OnInit , ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../shared/api.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Department } from '../models/department';


@Component({
  selector: 'app-departmentlist',
  templateUrl: './departmentlist.component.html',
  styleUrls: ['./departmentlist.component.scss']
})
export class DepartmentlistComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name' , 'action'];
  dataSource!: MatTableDataSource<Department>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private route : Router , public service: ApiService) { }

  ngOnInit(): void {
    this.getAllDepartment();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  onAdd(){
    this.route.navigateByUrl('/department')
    this.service.departmentData.name="";
  }

  getAllDepartment() {
    this.service.getDepartments().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.service.listDepartment = data;
    });
  }

  updateDepartment(id: number) {
    this.route.navigateByUrl('/departmentedit/' + id);
  };

  deleteDepartment(id: number) {
    if (confirm('Are you really want to delete this record?')) {
      this.service.deleteDepartment(id).subscribe(data => {
        console.log('record deleted');
        this.getAllDepartment();
      }, err => {
        console.log('record not deleted');
      });
    }
   
  }

}
