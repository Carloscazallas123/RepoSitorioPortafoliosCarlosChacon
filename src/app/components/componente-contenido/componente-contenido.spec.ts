import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteContenido } from './componente-contenido';

describe('ComponenteContenido', () => {
  let component: ComponenteContenido;
  let fixture: ComponentFixture<ComponenteContenido>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponenteContenido],
    }).compileComponents();

    fixture = TestBed.createComponent(ComponenteContenido);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
