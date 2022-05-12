import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Role } from '../models/role';
import { Designation } from '../models/designation';
import {Bloodgroup} from '../models/bloodgroup';
import {Education} from '../models/education';
import {Department} from '../models/department';
import {UserDetail} from '../models/userdetail';
import {Country} from '../models/country';
import {State} from '../models/state';
import {City} from '../models/city';
import {Login} from '../models/Login';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  tokenresp: any;

  constructor(private http : HttpClient) { }

  baseURL = 'http://192.168.70.6:8080/api';


  // roleURL = 'https://localhost:7273/api/Role';
  // desigURL = 'https://localhost:7273/api/Designations';
  // bloodgroupURL = 'https://localhost:7273/api/BloodGroups';
  // educationURL = 'https://localhost:7273/api/Educations';
  // departmentURL = 'https://localhost:7273/api/Departments';
  // userURL = 'https://localhost:7273/api/UserDetails';
  // countryURL = 'https://localhost:7273/api/Countries';
  // stateURL ='https://localhost:7273/api/States';
  // cityURL = 'https://localhost:7273/api/Cities';
  // loginURL = 'https://localhost:7273/api/UserAdd/Login';
  
  listRole:Role[]=[]; //for get data
  roleData:Role = new Role(); //for post data

  listDesignation : Designation[] = [];  //for get data
  desigData : Designation = new Designation(); //for post data

  listbg : Bloodgroup[] =[];
  bgData : Bloodgroup= new Bloodgroup();

  listeducation : Education[] = [];
  educationData : Education = new Education();

  listDepartment : Department[] = [];
  departmentData : Department = new Department();

  listUsers : UserDetail[] = [];
  userData : UserDetail = new UserDetail();

  listLogins : Login[] = [];
  loginData : Login = new Login();

  listState : State[] =[];

  GetRolebyToken(token : any){
    let _token = token.split('.')[1];
    this.tokenresp = JSON.parse(atob(_token));
    return this.tokenresp.role;
  }

  GetToken() {
    return localStorage.getItem("token") || '';
  }

  saveRole(){
    return this.http.post(this.baseURL + '/Role' , this.roleData);
  }

  singlerole(id: any): Observable<Role> {
    return this.http.get<Role>(this.baseURL + '/Role/GetById?roleId=' + id);
  }

  updateRole():Observable<Role>{
    return this.http.post<Role>(this.baseURL + '/Role' , this.roleData);
  }

  getRoles():Observable<Role[]>
  {
    return this.http.get<Role[]>(this.baseURL + '/Role/GetAll');
  }

  deleteRole(id : number):Observable<Role>{
    return this.http.delete<Role>(this.baseURL + '/Role/id?id=' + id);
  }


  saveDesignation(){
    return this.http.post(this.baseURL +'/Designations' , this.desigData);
  }

  singleDesignation(id: any): Observable<Designation> {
    return this.http.get<Designation>(this.baseURL + '/Designations/GetById?designationId=' + id);
  }

  updateDesignation():Observable<Designation>{
    return this.http.post<Designation>(this.baseURL +'/Designations', this.desigData);
  }

  getDesigantions():Observable<Designation[]>
  {
    return this.http.get<Designation[]>(this.baseURL + '/Designations/GetAll');
  }

  deleteDesignation(id : number):Observable<Designation>{
    return this.http.delete<Designation>(this.baseURL + '/Designations/designationId?designationId=' + id);
  }

  saveBloodgroup(){
    return this.http.post(this.baseURL + '/BloodGroups' , this.bgData);
  }

  singleBloodgroup(id: any): Observable<Bloodgroup> {
    return this.http.get<Bloodgroup>(this.baseURL + '/BloodGroups/GetById?bloodGroupId=' + id);
  }

  updateBloodgroup():Observable<Bloodgroup>{
    return this.http.post<Bloodgroup>(this.baseURL  + '/BloodGroups'  , this.bgData);
  }

  getBloodgroups():Observable<Bloodgroup[]>
  {
    return this.http.get<Bloodgroup[]>(this.baseURL + '/BloodGroups/GetAll');
  }

  deleteBloodgroup(id : number):Observable<Bloodgroup>{
    return this.http.delete<Bloodgroup>(this.baseURL + '/BloodGroups/bloodGroupId?bloodGroupId=' + id);
  }

  saveEducation(){
    return this.http.post(this.baseURL + '/Educations' , this.educationData);
  }

  singleEducation(id: any): Observable<Education> {
    return this.http.get<Education>(this.baseURL + '/Educations/GetById?educationId=' + id);
  }

  updateEducation():Observable<Education>{
    return this.http.post<Education>(this.baseURL + '/Educations' , this.educationData);
  }

  getEducations():Observable<Education[]>
  {
    return this.http.get<Education[]>(this.baseURL + '/Educations/GetAll');
  }

  deleteEducation(id : number):Observable<Education>{
    return this.http.delete<Education>(this.baseURL + '/Educations/educationId?educationId=' + id);
  }

  saveDepartment(){
    return this.http.post(this.baseURL + '/Departments' , this.departmentData);
  }

  singleDepartment(id: any): Observable<Department> {
    return this.http.get<Department>(this.baseURL + '/Departments/GetById?departmentId=' + id);
  }

  updateDepartment():Observable<Department>{
    return this.http.post<Department>(this.baseURL + '/Departments' , this.departmentData);
  }

  getDepartments():Observable<Department[]>
  {
    return this.http.get<Department[]>(this.baseURL + '/Departments/GetAll');
  }

  deleteDepartment(id : number):Observable<Department>{
    return this.http.delete<Department>(this.baseURL + '/Departments/departmentId?departmentId=' + id);
  }

  saveUser(){
    return this.http.post(this.baseURL + '/UserDetails' , this.userData);
    
  }

  singleUser(id: any): Observable<UserDetail> {
    return this.http.get<UserDetail>(this.baseURL + '/UserDetails/GetById?userDetailsId=' + id);
  }

  updateUser():Observable<UserDetail>{
    return this.http.post<UserDetail>(this.baseURL + '/UserDetails' , this.userData);
  }

  getUsers():Observable<UserDetail[]>
  {
    return this.http.get<UserDetail[]>(this.baseURL + '/UserDetails/GetAll');
  }

  deleteUser(id : number):Observable<UserDetail>{
    return this.http.delete<UserDetail>(this.baseURL + '/UserDetails/userDetailsId?userDetailsId=' + id);
  }

  getCountries():Observable<Country[]>
  {
    return this.http.get<Country[]>(this.baseURL + '/Countries/GetAll');
  }

  getStates(countryId : any):Observable<State[]>
  {
    return this.http.get<State[]>(this.baseURL + '/States/Combo?countryId=' + countryId);
  }

  getCities(stateId  : any):Observable<City[]>
  {
    return this.http.get<City[]>(this.baseURL + '/Cities/Combo?stateId=' + stateId);
  }

  login(){
    return this.http.post(this.baseURL + '/UserAdd/Login' , this.loginData);
  }


  


}
