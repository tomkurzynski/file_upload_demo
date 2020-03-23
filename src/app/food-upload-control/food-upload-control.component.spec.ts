import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodUploadControlComponent } from './food-upload-control.component';

describe('FoodUploadControlComponent', () => {
  let component: FoodUploadControlComponent;
  let fixture: ComponentFixture<FoodUploadControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodUploadControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodUploadControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
