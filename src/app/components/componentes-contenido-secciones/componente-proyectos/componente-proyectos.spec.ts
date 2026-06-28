import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteProyectos } from './componente-proyectos';

describe('ComponenteProyectos', () => {
  let component: ComponenteProyectos;
  let fixture: ComponentFixture<ComponenteProyectos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponenteProyectos],
    }).compileComponents();

    fixture = TestBed.createComponent(ComponenteProyectos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
