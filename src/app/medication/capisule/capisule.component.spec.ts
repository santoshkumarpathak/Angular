import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapisuleComponent } from './capisule.component';

describe('CapisuleComponent', () => {
  let component: CapisuleComponent;
  let fixture: ComponentFixture<CapisuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CapisuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CapisuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
