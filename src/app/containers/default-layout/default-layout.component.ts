import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';

import { navItems } from './_nav';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
})
export class DefaultLayoutComponent implements OnInit {
  public navItems = navItems;
  displaymenu = false;
  displayMaster = false;
  currentRole: any;
  public perfectScrollbarConfig = {
    suppressScrollX: true,
  };

  constructor(private service: ApiService) {}

  ngOnInit(): void {
    this.MenuDisplay();
  }

  MenuDisplay() {
    if (this.service.GetToken() != '') {
      this.currentRole = this.service.GetRolebyToken(this.service.GetToken());
      console.log(this.currentRole);
      this.displayMaster = this.currentRole == 1;
      console.log(this.displayMaster);
    }
  }
}
