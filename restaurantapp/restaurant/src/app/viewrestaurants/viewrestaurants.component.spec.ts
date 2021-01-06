import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewrestaurantsComponent } from './viewrestaurants.component';

describe('ViewrestaurantsComponent', () => {
  let component: ViewrestaurantsComponent;
  let fixture: ComponentFixture<ViewrestaurantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewrestaurantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewrestaurantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
