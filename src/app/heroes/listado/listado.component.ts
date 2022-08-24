import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  heroes: string[] = ['spiderman', 'ironman', 'hulk', 'batman', 'juan']
  heroeBorrado: string = '';
  
  borrarHeroe(): void {
    this.heroeBorrado = this.heroes.shift() || '';
  }

}
