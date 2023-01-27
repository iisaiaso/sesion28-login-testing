import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'sesion28-login-testing';
  // username!: string
  // password!: string
  formLogin!: FormGroup
  result!:string

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(5)]],
      password: ['', [Validators.required, Validators.minLength(5)]]
    })
  }

  onLogin(){
    if(this.formLogin.valid == true){
    this.result = 'Estas Logeado'
    }else{
      this.result= ""
    }
  }

}
