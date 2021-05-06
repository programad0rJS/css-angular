import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeosComponent } from './feos.component';

describe('FeosComponent', () => {
  let component: FeosComponent;
  let fixture: ComponentFixture<FeosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
