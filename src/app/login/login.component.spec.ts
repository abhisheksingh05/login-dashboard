import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';

import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [ReactiveFormsModule, RouterTestingModule, HttpClientTestingModule]
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

  it('Should Validate User Name Field', ()=>{
    let userName = component.loginForm.controls['username']
    expect(userName.valid).toBeFalsy();

    let errors = {};
    errors = userName.errors;
    expect(errors['required']).toBeTruthy()
  });
});
