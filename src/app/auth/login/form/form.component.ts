import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  email: string = '';
  password: string = '';
  errorMessage: string | null = null;

  @Output() loginSuccess = new EventEmitter<void>();

  onLogin(): void {
    if (this.email === 'admin' && this.password === 'admin') {
      this.loginSuccess.emit();
      this.errorMessage = null;
    } else {
      this.errorMessage = 'Credenciales incorrectas. Intenta con admin.';
    }
  }
}