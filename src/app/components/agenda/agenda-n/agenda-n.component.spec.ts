import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendaNComponent } from './agenda-n.component';

describe('AgendaNComponent', () => {
  let component: AgendaNComponent;
  let fixture: ComponentFixture<AgendaNComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgendaNComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendaNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
