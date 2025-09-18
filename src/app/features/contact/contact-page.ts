import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-page.html',
  styleUrl: './contact-page.scss'
})
export class ContactPage {
  contactForm = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  submitForm() {
    // In a real application, this would send the form data to a server
    console.log('Form submitted:', this.contactForm);
    alert('Votre message a été envoyé. Nous vous répondrons dans les plus brefs délais.');

    // Reset the form
    this.contactForm = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
  }
}
