import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-my-form',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css'],
})
export class MyFormComponent {
  form = {
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  };
  constructor(private http: HttpClient) {}

  onSubmit() {
    console.log(this.form);
    this.http.post('http://localhost:3001/api/users', this.form).subscribe(
      (response) => {
        console.log('Success:', response);
        this.onReset();
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }
  onReset() {
    this.form = {
      first_name: '',
      last_name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    };
  }
}
