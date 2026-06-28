import { Component } from '@angular/core';

@Component({
  selector: 'ComponenteBanner',
  imports: [],
  templateUrl: './componente-banner.html',
  styleUrl: './componente-banner.css',
})
export class ComponenteBanner {
    abierto: boolean = false;
    private timerId: any;
    escribiendo: boolean = false;
    
    EfectoEscritura(elemento: HTMLElement) {
    if (this.escribiendo) { return; }

    this.abierto = !this.abierto;
    clearInterval(this.timerId);

    if (this.abierto) {
    const textoOriginal = elemento.innerText;
    elemento.innerText = '';
    let index = 0;


    this.timerId = setInterval(() => {
      if (index < textoOriginal.length) {
        const caracterActual = textoOriginal.charAt(index);
        if (caracterActual === '.') {
        elemento.innerHTML += '.' + '<br><br>'; 
        } else {
        elemento.innerHTML += caracterActual;
        }
        index++;
      } else {
        clearInterval(this.timerId);
        this.escribiendo = false; 
      }}, 30);

    } else {
    clearInterval(this.timerId);
    this.escribiendo = false;
    }
  }
}
