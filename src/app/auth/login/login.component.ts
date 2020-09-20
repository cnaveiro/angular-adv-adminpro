import { Component, OnInit } from '@angular/core';

// En Styles se añade el componente CSS para dar estilo.
// es necesario colocar StylesURL para que se llame al estilo de manera externa
// si no se usa el Styleurl queda como interno y no se reconoce. (es como public y private)

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.css',
  ]
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
