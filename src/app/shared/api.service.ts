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

   roleURL = 'http://192.168.10.77:8070/api/Role';
   desigURL = 'http://192.168.10.77:8070/api/Designations';
   bloodgroupURL = 'http://192.168.10.77:8070/api/BloodGroups';
   educationURL = 'http://192.168.10.77:8070/api/Educations';
   departmentURL = 'http://192.168.10.77:8070/api/Departments';
   userURL = 'http://192.168.10.77:8070/api/UserDetails';
   countryURL = 'http://192.168.10.77:8070/api/Countries';
   stateURL ='http://192.168.10.77:8070/api/States';
   cityURL = 'http://192.168.10.77:8070/api/Cities';
   loginURL = 'http://192.168.10.77:8070/api/UserAdd/Login';

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
    return this.http.post(this.roleURL , this.roleData);
  }

  singlerole(id: any): Observable<Role> {
    return this.http.get<Role>(this.roleURL + '/GetById?roleId=' + id);
  }

  updateRole():Observable<Role>{
    return this.http.post<Role>(this.roleURL , this.roleData);
  }

  getRoles():Observable<Role[]>
  {
    return this.http.get<Role[]>(this.roleURL + '/GetAll');
  }

  deleteRole(id : number):Observable<Role>{
    return this.http.delete<Role>(this.roleURL + '/id?id=' + id);
  }


  saveDesignation(){
    return this.http.post(this.desigURL , this.desigData);
  }

  singleDesignation(id: any): Observable<Designation> {
    return this.http.get<Designation>(this.desigURL + '/GetById?designationId=' + id);
  }

  updateDesignation():Observable<Designation>{
    return this.http.post<Designation>(this.desigURL , this.desigData);
  }

  getDesigantions():Observable<Designation[]>
  {
    return this.http.get<Designation[]>(this.desigURL + '/GetAll');
  }

  deleteDesignation(id : number):Observable<Designation>{
    return this.http.delete<Designation>(this.desigURL + '/designationId?designationId=' + id);
  }

  saveBloodgroup(){
    return this.http.post(this.bloodgroupURL , this.bgData);
  }

  singleBloodgroup(id: any): Observable<Bloodgroup> {
    return this.http.get<Bloodgroup>(this.bloodgroupURL + '/GetById?bloodGroupId=' + id);
  }

  updateBloodgroup():Observable<Bloodgroup>{
    return this.http.post<Bloodgroup>(this.bloodgroupURL , this.bgData);
  }

  getBloodgroups():Observable<Bloodgroup[]>
  {
    return this.http.get<Bloodgroup[]>(this.bloodgroupURL + '/GetAll');
  }

  deleteBloodgroup(id : number):Observable<Bloodgroup>{
    return this.http.delete<Bloodgroup>(this.bloodgroupURL + '/bloodGroupId?bloodGroupId=' + id);
  }

  saveEducation(){
    return this.http.post(this.educationURL , this.educationData);
  }

  singleEducation(id: any): Observable<Education> {
    return this.http.get<Education>(this.educationURL + '/GetById?educationId=' + id);
  }

  updateEducation():Observable<Education>{
    return this.http.post<Education>(this.educationURL , this.educationData);
  }

  getEducations():Observable<Education[]>
  {
    return this.http.get<Education[]>(this.educationURL + '/GetAll');
  }

  deleteEducation(id : number):Observable<Education>{
    return this.http.delete<Education>(this.educationURL + '/educationId?educationId=' + id);
  }

  saveDepartment(){
    return this.http.post(this.departmentURL , this.departmentData);
  }

  singleDepartment(id: any): Observable<Department> {
    return this.http.get<Department>(this.departmentURL + '/GetById?departmentId=' + id);
  }

  updateDepartment():Observable<Department>{
    return this.http.post<Department>(this.departmentURL , this.departmentData);
  }

  getDepartments():Observable<Department[]>
  {
    return this.http.get<Department[]>(this.departmentURL + '/GetAll');
  }

  deleteDepartment(id : number):Observable<Department>{
    return this.http.delete<Department>(this.departmentURL + '/departmentId?departmentId=' + id);
  }

  saveUser(){
    return this.http.post(this.userURL , this.userData);
  }

  singleUser(id: any): Observable<UserDetail> {
    return this.http.get<UserDetail>(this.userURL + '/GetById?userDetailsId=' + id);
  }

  updateUser():Observable<UserDetail>{
    return this.http.post<UserDetail>(this.userURL , this.userData);
  }

  getUsers():Observable<UserDetail[]>
  {
    return this.http.get<UserDetail[]>(this.userURL + '/GetAll');
  }

  deleteUser(id : number):Observable<UserDetail>{
    return this.http.delete<UserDetail>(this.userURL + '/userDetailsId?userDetailsId=' + id);
  }

  getCountries():Observable<Country[]>
  {
    return this.http.get<Country[]>(this.countryURL + '/GetAll');
  }

  getStates(countryId : any):Observable<State[]>
  {
    return this.http.get<State[]>(this.stateURL + '/Combo?countryId=' + countryId);
  }

  getCities(stateId  : any):Observable<City[]>
  {
    return this.http.get<City[]>(this.cityURL + '/Combo?stateId=' + stateId);
  }

  login(){
    return this.http.post(this.loginURL , this.loginData);
  }


  


}
