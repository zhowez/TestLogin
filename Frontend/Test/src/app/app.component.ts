import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  loginForm = this.formBuilder.group({
    username: '',
    password: '',
  });

  constructor(private formBuilder: FormBuilder) {}

  onSubmit(): void {
    window.alert('Okay something did happen but not really');
    this.loginForm.reset();
  }
}
