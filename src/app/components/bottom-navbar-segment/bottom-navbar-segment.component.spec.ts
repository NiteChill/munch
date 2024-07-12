import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomNavbarSegmentComponent } from './bottom-navbar-segment.component';

describe('BottomNavbarSegmentComponent', () => {
  let component: BottomNavbarSegmentComponent;
  let fixture: ComponentFixture<BottomNavbarSegmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BottomNavbarSegmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BottomNavbarSegmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
