import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Panchos';


  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private router: Router

  ) { 
    this.matIconRegistry.addSvgIcon(
      "pancho",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/imgs/pancho.svg")
    );
  }

  showToolbar() {
    return this.router.url !== "/login";
  }

}
