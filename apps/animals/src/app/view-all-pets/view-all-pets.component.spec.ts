import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllPetsComponent } from './view-all-pets.component';

describe('ViewAllPetsComponent', () => {
  let component: ViewAllPetsComponent;
  let fixture: ComponentFixture<ViewAllPetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewAllPetsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewAllPetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
