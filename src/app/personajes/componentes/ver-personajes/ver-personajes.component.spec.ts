import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerPersonajesComponent } from './ver-personajes.component';

describe('VerPersonajesComponent', () => {
  let component: VerPersonajesComponent;
  let fixture: ComponentFixture<VerPersonajesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerPersonajesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerPersonajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
