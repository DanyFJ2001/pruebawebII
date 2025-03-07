import { Component } from '@angular/core';
import { HomComponent } from "../../components/hom/hom.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HomComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
