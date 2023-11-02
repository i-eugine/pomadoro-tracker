import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';


@Component({
  standalone: true,
  selector: 'pom-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],

  imports: [RouterModule, HeaderComponent]
})
export class LayoutComponent {

}
