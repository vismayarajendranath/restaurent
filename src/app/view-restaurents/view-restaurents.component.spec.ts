import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRestaurentsComponent } from './view-restaurents.component';

describe('ViewRestaurentsComponent', () => {
  let component: ViewRestaurentsComponent;
  let fixture: ComponentFixture<ViewRestaurentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewRestaurentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewRestaurentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
