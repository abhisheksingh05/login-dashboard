import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';

import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthenticationService } from '../_service';

const loginServiceSpy = jasmine.createSpyObj('AuthenticationService', ['login']); 

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [ReactiveFormsModule, RouterTestingModule, HttpClientTestingModule],
      providers: [
        {provide: AuthenticationService, useValue: loginServiceSpy}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Form Invalid when Empty', ()=>{
    expect(component.loginForm.valid).toBeFalsy();
  });

  // it('Should Validate User Name Field', ()=>{
  //   let userName = component.loginForm.controls['username']
  //   expect(userName.valid).toBeFalsy();

  //   let errors = {};
  //   errors = userName.errors;
  //   expect(errors['required']).toBeTruthy()
  // });

  it('Should Validate all the fields in Login Form', ()=>{
    let userName = component.loginForm.controls['username'];
    let password = component.loginForm.controls['password']
    expect(userName.valid).toBeFalsy();
    expect(password.valid).toBeFalsy();

    let userNameErrors = {};
    userNameErrors = userName.errors;
    expect(userNameErrors['required']).toBeTruthy();
    
    let passwordErrors = {};
    passwordErrors = password.errors;
    expect(passwordErrors['required']).toBeTruthy();
  });

  it('loginService login() should called ', fakeAsync(() => {
    component.loginForm.controls['username'].setValue('abhi');
    component.loginForm.controls['password'].setValue('123456');

    fixture.detectChanges();
    const button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
    fixture.detectChanges();

    expect(loginServiceSpy.login).toHaveBeenCalled();
  }));
});
