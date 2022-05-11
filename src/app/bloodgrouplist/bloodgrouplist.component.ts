import { Component, OnInit , ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../shared/api.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Bloodgroup } from '../models/bloodgroup';



@Component({
  selector: 'app-bloodgrouplist',
  templateUrl: './bloodgrouplist.component.html',
  styleUrls: ['./bloodgrouplist.component.scss']
})
export class BloodgrouplistComponent implements OnInit {
  
  displayedColumns: string[] = ['id', 'bloodGroupType' , 'action' ];
  dataSource!: MatTableDataSource<Bloodgroup>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private route : Router , public service: ApiService) { }

  ngOnInit(): void {
    
    this.getAllBgs();
  }
  onAdd(){

    this.route.navigateByUrl('/bloodgroup');
    this.service.bgData.bloodGroupType="";

  }

  getAllBgs() {
    this.service.getBloodgroups().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.service.listbg = data;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  updateBg(id: number) {
    this.route.navigateByUrl('/bloodgroupedit/' + id);
  };

  deleteBg(id: number) {
    if (confirm('Are you really want to delete this record?')) {
      this.service.deleteBloodgroup(id).subscribe(data => {
        console.log('record deleted');
        this.getAllBgs()

      }, err => {
        console.log('record not deleted');
      });
    }
   
  }
}
