import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import * as authSelector from '../../core/auth/auth.selectors';
import * as authActions from '../../core/auth/auth.action';
import { AppState } from 'src/app/core/core.state';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  user: any;

  error$ = this.store.select(state => {
    if(state.auth){
      return state.auth.error
    } else{
      return false
    }
  });
  isLoading$ = this.store.select( state => {
    if(state.auth){
      return state.auth.loading
    } else{
      return false;
    }
  }
  );
  constructor(
    //Se especifica el Store específico
    private store: Store<AppState>,
    private fb: FormBuilder,
  ) {

  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
    /* 
        this.store.dispatch(new authActions.GetUser());
        this.user = this.store.pipe(select(fromAuth.getAuth)); */
  }

  /* get form() {
    return this.loginForm.controls;
  } */

  onSubmit() {
    const value = this.loginForm.value;
    const data = {
      email: value.email,
      password: value.password
    }
    console.log(data);

    this.store.dispatch(new authActions.Login(data))
  }

  logout() {
    this.store.dispatch(new authActions.Logout());
  }

}
