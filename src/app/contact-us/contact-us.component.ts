import { Component } from '@angular/core';
import { MyFormComponent } from '../my-form/my-form.component';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [MyFormComponent],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css',
})
export class ContactUsComponent {}
