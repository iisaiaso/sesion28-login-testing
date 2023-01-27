import { ChangeDetectionStrategy } from '@angular/compiler';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Login';
  // username!: string
  // password!: string
  formLogin!: FormGroup
  result!: string
  alert = false

  constructor(private formBuilder: FormBuilder, private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(5),Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]]
    })
    this.cd.detectChanges()
  }

  onLogin():any {
    if (this.formLogin.valid == true) {
      this.result = 'Estas Logeado'
      this.alert=true
    } else {
      this.result = ""
      this.alert=false
    }
  }

}
