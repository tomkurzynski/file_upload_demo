import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodUploadComponent } from './food-upload.component';

describe('FoodUploadComponent', () => {
  let component: FoodUploadComponent;
  let fixture: ComponentFixture<FoodUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
