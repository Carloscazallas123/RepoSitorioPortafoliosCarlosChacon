import { Component } from '@angular/core';
import { ComponenteProyectos } from '../componentes-contenido-secciones/componente-proyectos/componente-proyectos';

@Component({
  selector: 'ComponenteContenido',
  imports: [ComponenteProyectos],
  templateUrl: './componente-contenido.html',
  styleUrl: './componente-contenido.css',
})
export class ComponenteContenido {

  seccionActiva: string = 'proyectos'; 

  cambiarSeccion(seccion: string): void {
    this.seccionActiva = seccion;
  }
}
