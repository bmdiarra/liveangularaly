import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  active = false;
  clickez = 'Activer';
  intinput;
  recupoutput: string;

  isclick(): void{
    this.active = !this.active;
    this.active === true ? this.clickez = 'Activez' : this.clickez = 'Desactivez';
  }
}
