import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  
  // Verificar si el usuario ha iniciado sesión
  autenticacion(): boolean {
    if (typeof window !== "undefined" && window.localStorage) {
      return localStorage.getItem("login") === 'true';
    }
    return false;
  }

  // Verificar si el usuario es docente
  esDocente(): boolean {
    return localStorage.getItem("acceso") === 'docentes';
  }

  // Verificar si el usuario es estudiante
  esEstudiante(): boolean {
    return localStorage.getItem("acceso") === 'estudiantes';
  }
}
