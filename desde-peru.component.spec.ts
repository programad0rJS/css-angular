import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesdePeruComponent } from './desde-peru.component';

describe('DesdePeruComponent', () => {
  let component: DesdePeruComponent;
  let fixture: ComponentFixture<DesdePeruComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesdePeruComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesdePeruComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
