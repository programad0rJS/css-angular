import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesdeVenezuelaComponent } from './desde-venezuela.component';

describe('DesdeVenezuelaComponent', () => {
  let component: DesdeVenezuelaComponent;
  let fixture: ComponentFixture<DesdeVenezuelaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesdeVenezuelaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesdeVenezuelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
