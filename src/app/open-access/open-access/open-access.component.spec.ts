import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenAccessComponent } from './open-access.component';

describe('OpenAccessComponent', () => {
  let component: OpenAccessComponent;
  let fixture: ComponentFixture<OpenAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenAccessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpenAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
