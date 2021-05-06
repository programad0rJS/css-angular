import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesdeChinaComponent } from './desde-china.component';

describe('DesdeChinaComponent', () => {
  let component: DesdeChinaComponent;
  let fixture: ComponentFixture<DesdeChinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesdeChinaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesdeChinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
