import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginData = {
    email: '',
    password: '',
    selectedCompany: '',
  };

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    this.authService.login(this.loginData).subscribe(
      (response) => {
        localStorage.setItem('token', response.token);
        localStorage.setItem('company', response.selectedCompany);
        this.router.navigate(['/user']);
      },
      (error) => {
        console.error('Login failed:', error.error);
      }
    );
  }

}
