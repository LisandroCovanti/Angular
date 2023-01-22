/**
 * Definizione iniziale dell' app-component principale e primario Component
 * selector -> come viene chiamato nella struttura html
 * templateUrl -> file html che ne descrive il contenuto da usare quando viene chiamato dal selector
 * styleUrls -> file di stile rispettivo di questo unico componente 
*/
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { //sintassi dichiarazione CLASSE TYPESCRITPT

  username: string = "variabile AppComponent";
  title = 'tutorial';
}
