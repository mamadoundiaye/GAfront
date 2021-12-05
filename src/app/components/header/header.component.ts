import { Component, OnInit } from '@angular/core';
import { NavbarModule, WavesModule, ButtonsModule } from 'angular-bootstrap-md'


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  cheminLogo:any = "assets/images/logo.png";
  constructor() { }

  ngOnInit(): void {
  }


}
