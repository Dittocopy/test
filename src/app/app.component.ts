import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidenaveComponent } from "./sidenave/sidenave.component";
import { BodyComponent } from "./body/body.component";
import { DashbordComponent } from './dashbord/dashbord.component';
import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidenaveComponent, DashbordComponent, BodyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'test';
}
