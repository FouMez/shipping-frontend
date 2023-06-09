import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParcelListComponent } from './parcel-list.component';

describe('ParcelListComponent', () => {
  let component: ParcelListComponent;
  let fixture: ComponentFixture<ParcelListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParcelListComponent]
    });
    fixture = TestBed.createComponent(ParcelListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
