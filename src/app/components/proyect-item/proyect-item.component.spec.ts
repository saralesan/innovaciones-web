import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectItemComponent } from './proyect-item.component';

describe('ProyectItemComponent', () => {
  let component: ProyectItemComponent;
  let fixture: ComponentFixture<ProyectItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProyectItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProyectItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
