import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkedinParcoursComponent } from './linkedin-parcours.component';

describe('LinkedinParcoursComponent', () => {
  let component: LinkedinParcoursComponent;
  let fixture: ComponentFixture<LinkedinParcoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkedinParcoursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkedinParcoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
