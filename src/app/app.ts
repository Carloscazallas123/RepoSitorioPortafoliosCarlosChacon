import { ChangeDetectorRef, Component, signal } from '@angular/core';

import { ComponenteBanner } from "./components/componente-banner/componente-banner";
import { ComponenteContenido } from "./components/componente-contenido/componente-contenido";

@Component({
  selector: 'app-root',
  imports: [ComponenteBanner, ComponenteContenido],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  mostrandoLoading: boolean = true;

  // Inyectamos el detector de cambios en el constructor
  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit() {
    // Forzamos 2 segundos de carga
    setTimeout(() => {
      this.mostrandoLoading = false;
      
      // 👈 ¡ESTO ES CLAVE! Le dice a Angular: "He cambiado la variable, redibuja ya"
      this.cd.detectChanges(); 
    }, 2000); 
  }
}
