import { Component, input } from '@angular/core';
import { navbarData } from './nav-data';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidenave',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './sidenave.component.html',
  styleUrl: './sidenave.component.scss'
})


export class SidenaveComponent {
  on = false;
  naveData = navbarData;

}
