import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteTrayectoria } from './componente-trayectoria';

describe('ComponenteTrayectoria', () => {
  let component: ComponenteTrayectoria;
  let fixture: ComponentFixture<ComponenteTrayectoria>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponenteTrayectoria],
    }).compileComponents();

    fixture = TestBed.createComponent(ComponenteTrayectoria);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
