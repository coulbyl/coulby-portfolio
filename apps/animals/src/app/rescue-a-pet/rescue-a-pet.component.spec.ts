import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RescueAPetComponent } from './rescue-a-pet.component';

describe('RescueAPetComponent', () => {
  let component: RescueAPetComponent;
  let fixture: ComponentFixture<RescueAPetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RescueAPetComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RescueAPetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
