import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesdeChileComponent } from './desde-chile.component';

describe('DesdeChileComponent', () => {
  let component: DesdeChileComponent;
  let fixture: ComponentFixture<DesdeChileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesdeChileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesdeChileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
