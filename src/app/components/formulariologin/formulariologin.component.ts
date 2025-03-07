import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulariologin',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulariologin.component.html',
  styleUrl: './formulariologin.component.css'
})
export class FormulariologinComponent {
  
  constructor(private servicio:LoginService,private route:Router){}
  email:any
  password:any

  login(formulario: any) {
    this.servicio.postLogin(formulario.value).subscribe(accesso => {
      console.log(accesso);
  
      let token = accesso.accessToken;
      let email = formulario.value.email;
  
      if (token) {
        localStorage.setItem("login", "true");
  
        if (email.includes('@docentes.com')) { 
          localStorage.setItem("acceso", "docentes"); 
          console.log("Usuario docente, redirigiendo...");
          this.route.navigate(['docentes']);
        } else {
          localStorage.setItem("acceso", "estudiantes"); 
          console.log("Usuario estudiante, redirigiendo...");
          this.route.navigate(['estudiantes']);
        }
      }
    });
  }
}  