import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetCardListComponent } from './pet-card-list.component';

describe('PetCardListComponent', () => {
  let component: PetCardListComponent;
  let fixture: ComponentFixture<PetCardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PetCardListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PetCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
