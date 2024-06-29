import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManufaturerComponent } from './manufaturer.component';

describe('ManufaturerComponent', () => {
  let component: ManufaturerComponent;
  let fixture: ComponentFixture<ManufaturerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManufaturerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManufaturerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
