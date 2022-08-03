import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetAPetComponent } from './meet-a-pet.component';

describe('MeetAPetComponent', () => {
  let component: MeetAPetComponent;
  let fixture: ComponentFixture<MeetAPetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MeetAPetComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MeetAPetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
