import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteBanner } from './componente-banner';

describe('ComponenteBanner', () => {
  let component: ComponenteBanner;
  let fixture: ComponentFixture<ComponenteBanner>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponenteBanner],
    }).compileComponents();

    fixture = TestBed.createComponent(ComponenteBanner);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
