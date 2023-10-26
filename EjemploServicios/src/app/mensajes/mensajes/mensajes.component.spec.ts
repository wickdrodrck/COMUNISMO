import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensajesComponent } from './mensajes.component';

describe('MensajesComponent', () => {
  let component: MensajesComponent;
  let fixture: ComponentFixture<MensajesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MensajesComponent]
    });
    fixture = TestBed.createComponent(MensajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
