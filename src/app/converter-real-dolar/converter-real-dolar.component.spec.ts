import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConverterRealDolarComponent } from './converter-real-dolar.component';

describe('ConverterRealDolarComponent', () => {
  let component: ConverterRealDolarComponent;
  let fixture: ComponentFixture<ConverterRealDolarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConverterRealDolarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConverterRealDolarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
