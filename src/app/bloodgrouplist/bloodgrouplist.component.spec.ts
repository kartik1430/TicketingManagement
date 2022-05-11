import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodgrouplistComponent } from './bloodgrouplist.component';

describe('BloodgrouplistComponent', () => {
  let component: BloodgrouplistComponent;
  let fixture: ComponentFixture<BloodgrouplistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BloodgrouplistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BloodgrouplistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
