import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcuisineComponent } from './addcuisine.component';

describe('AddcuisineComponent', () => {
  let component: AddcuisineComponent;
  let fixture: ComponentFixture<AddcuisineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddcuisineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcuisineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
