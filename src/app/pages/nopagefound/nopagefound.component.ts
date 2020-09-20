import { Component} from '@angular/core';
//en import se limina el OnInit
@Component({
  selector: 'app-nopagefound',
  templateUrl: './nopagefound.component.html',
  styleUrls: [ './nopagefound.component.css',
  ]
})
export class NopagefoundComponent {

  constructor() { }
/*Se borra la siguente linea 
  ngOnInit(): void {
  }
*/

year = new Date().getFullYear();



}
