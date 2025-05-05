import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  registerData = {
    email: '',
    password: '',
    role: 'user', // Default role
    companies: '',
  };

  constructor(private authService: AuthService, private router: Router) {}

  onRegister() {
    const formattedData = {
      ...this.registerData,
      companies: this.registerData.companies.split(',').map((c) => c.trim()), // Convert comma-separated string to array
    };

    this.authService.registerUser(formattedData).subscribe(
      (res) => {
        alert('Registration successful!');
        this.router.navigate(['/auth/login']);
      },
      (err) => {
        alert('Registration failed!');
      }
    );
  }
}
