import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Login'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Login');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Login');
  });

  /**   Testing de formulario valido */
  it('Debe retornar formulario valido', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges()
    let username = app.formLogin.controls['username']
    let password = app.formLogin.controls['password']
    username.setValue('isaias@gmail.com'),
      password.setValue('12345')
    expect(app.formLogin.invalid).toBeFalsy();
  });

  it('Debe retornar formulario invalido', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges()
    let username = app.formLogin.controls['username']
    let password = app.formLogin.controls['password']
    username.setValue('isaiasgmail.com'),
      password.setValue('12345')
    expect(app.formLogin.invalid).toBeTruthy();
  });

  /** fin te testing */

  /** Testing de iniciciar seion mediante un click*/

  it(`Debe retornar iniciar sesion`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges()

    let username = app.formLogin.controls['username']
    let password = app.formLogin.controls['password']

    username.setValue('isaias@gmail.com')
    password.setValue('12345')

    const btnElement = fixture.debugElement.query(By.css('button.btn'))
    btnElement.nativeElement.click()
    const testData = { user: "Estas Logeado" }
    expect(app.result).toEqual(testData.user)
  });

  /** */

  it(`Debe retornar no poder ingresar`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges()
    let username = app.formLogin.controls['username']
    let password = app.formLogin.controls['password']

    username.setValue('isaiasgmail.com')
    password.setValue('1234')

    const btnElement = fixture.debugElement.query(By.css('button.btn'))
    btnElement.nativeElement.click()
    const testData = { user: "" }
    expect(app.result).toEqual(testData.user)
  });
/** fin Testing */
});
