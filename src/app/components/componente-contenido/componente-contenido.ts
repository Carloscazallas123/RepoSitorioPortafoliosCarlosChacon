import { Component } from '@angular/core';
import { ComponenteProyectos } from '../componentes-contenido-secciones/componente-proyectos/componente-proyectos';
import { ComponenteTrayectoria } from '../componentes-contenido-secciones/componente-trayectoria/componente-trayectoria';

@Component({
  selector: 'ComponenteContenido',
  imports: [ComponenteProyectos,ComponenteTrayectoria],
  templateUrl: './componente-contenido.html',
  styleUrl: './componente-contenido.css',
})
export class ComponenteContenido {

  seccionActiva: string = 'proyectos'; 

  cambiarSeccion(seccion: string): void {
    this.seccionActiva = seccion;
  }
}
