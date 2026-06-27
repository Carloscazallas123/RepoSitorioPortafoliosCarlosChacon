import { Component, signal } from '@angular/core';
import { ComponenteBanner } from "./components/componente-banner/componente-banner";

@Component({
  selector: 'app-root',
  imports: [ComponenteBanner],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('PortaFolioCarlosChacon');
}
